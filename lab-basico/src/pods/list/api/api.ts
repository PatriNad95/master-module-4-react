import { Member } from "./api.model";

export const getMembers = async (org): Promise<Member[]> => {
  return fetch(`https://api.github.com/orgs/${org}/members`).then((response) =>
    response.json()
  );
};
