import React from "react";
import { Member } from "./list.vm";
import { List } from "./list.component";
import { getMembers } from "./list.repository";
import { OrganizationContext } from "@/core/providers";

interface Props {
  onSelect: (login: string) => void;
}

export const ListContainer: React.FC<Props> = (props) => {
  const { onSelect } = props;
  const { org, setOrg } = React.useContext(OrganizationContext);
  const [inputOrg, setInputOrg] = React.useState<string>(org);
  const [members, setMembers] = React.useState<Member[]>([]);

  React.useEffect(() => {
    getMembers(org).then(setMembers);
  }, [org]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setOrg(inputOrg);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label>Username: </label>
            <input
              value={inputOrg}
              onChange={(e) => setInputOrg(e.target.value)}
            />
          </div>
        </div>

        <button type="submit">Login</button>
      </form>
      <List members={members} onSelect={onSelect} />
    </>
  );
};
