import React from "react";
import { createDefaultMemberDetail, MemberDetail } from "../detail.vm";
import { getCharacter } from "../api";
import { mapCharacterToVM } from "../detail.mapper";
import { Detail } from "../detail.component";

interface Props {
  id: string;
}

export const DetailRickMortyContainer: React.FC<Props> = (props) => {
  const { id } = props;
  const [character, setCharacters] = React.useState<MemberDetail>(
    createDefaultMemberDetail()
  );

  React.useEffect(() => {
    getCharacter(id).then(mapCharacterToVM).then(setCharacters);
  }, []);

  return (
    <>
      <Detail member={character} />
    </>
  );
};
