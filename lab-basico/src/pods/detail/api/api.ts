import { MemberDetail, Result } from "./api.model";

export const getMember = async (login: string): Promise<MemberDetail> => {
  return fetch(`https://api.github.com/users/${login}`).then((response) =>
    response.json()
  );
};

export const getCharacter = async (login: string): Promise<Result> => {
  return fetch(`https://rickandmortyapi.com/api/character/${login}`).then(
    (response) => response.json()
  );
};
