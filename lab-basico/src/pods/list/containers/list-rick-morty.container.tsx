import React from "react";
import { getCharacters } from "../list.repository";
import { BoxLayout } from "@/layout";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "use-debounce";
import { switchRoutes } from "@/router/routes";
import {
  ListRickMortyForm,
  MemberTable,
  MemberTableWithPagination,
} from "../components";
import { TablePagination } from "@mui/material";
import { Member } from "../list.vm";
import { CharacterContext } from "@/core/providers";

interface Props {
  onSelect: (login: string) => void;
}

export const ListRickMortyContainer: React.FC<Props> = (props) => {
  const { onSelect } = props;

  const navigate = useNavigate();
  const { name, setName } = React.useContext(CharacterContext);
  const [debouncedFilter] = useDebounce(name, 500);
  const [characters, setCharacters] = React.useState<Member[]>([]);
  const [count, setCount] = React.useState(0);
  const [page, setPage] = React.useState(0);
  const [nextUrl, setNextUrl] = React.useState<string | null>(null);
  const [prevUrl, setPrevUrl] = React.useState<string | null>(null);

  const baseUrl = "https://rickandmortyapi.com/api/character";

  const goBack = () => {
    setName("");
    navigate(switchRoutes.root);
  };

  const searchData = async (url: string, newPage: number) => {
    try {
      const response = await getCharacters(url);
      setCharacters(response.results);
      setCount(response.info.count);
      setNextUrl(response.info.next);
      setPrevUrl(response.info.prev);
      setPage(newPage);
    } catch {
      setCharacters([]);
      setCount(0);
      setNextUrl(null);
      setPrevUrl(null);
    }
  };

  React.useEffect(() => {
    const url =
      debouncedFilter !== "" ? `${baseUrl}/?name=${debouncedFilter}` : baseUrl;
    searchData(url, 0);
  }, [debouncedFilter]);

  const handleChangePage = (_: unknown, newPage: number) => {
    if (newPage > page && nextUrl) {
      searchData(nextUrl, newPage);
    } else if (newPage < page && prevUrl) {
      searchData(prevUrl, newPage);
    }
  };

  return (
    <>
      <BoxLayout title="personaje">
        <ListRickMortyForm filter={name} setFilter={setName} goBack={goBack} />
      </BoxLayout>
      <MemberTableWithPagination
        members={characters}
        onSelect={onSelect}
        count={count}
        page={page}
        rowsPerPage={20}
        onPageChange={handleChangePage}
      />
    </>
  );
};
