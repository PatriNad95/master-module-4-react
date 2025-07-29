import React from "react";
import { TablePagination } from "@mui/material";
import { MemberTable } from "./member-table.component";
import { Member } from "../list.vm";

interface Props {
  members: Member[];
  onSelect: (login: string) => void;
}

export const MemberTableWithPagination: React.FC<Props> = ({
  members,
  onSelect,
}) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginated = members.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <>
      <MemberTable members={paginated} onSelect={onSelect} />
      <TablePagination
        component="div"
        count={members.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};
