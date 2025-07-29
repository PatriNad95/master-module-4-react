import React from "react";
import { Member } from "../list.vm";
import { getMembers } from "../list.repository";
import { OrganizationContext } from "@/core/providers";
import { useNavigate } from "react-router-dom";
import { switchRoutes } from "@/router/routes";
import { BoxLayout } from "@/layout";
import { ListOrganizationForm, MemberTable } from "../components";

interface Props {
  onSelect: (login: string) => void;
}

export const ListContainer: React.FC<Props> = (props) => {
  const { onSelect } = props;
  const navigate = useNavigate();
  const { org, setOrg } = React.useContext(OrganizationContext);
  const [members, setMembers] = React.useState<Member[]>([]);

  React.useEffect(() => {
    getMembers(org).then(setMembers);
  }, [org]);

  const goBack = () => {
    navigate(switchRoutes.root);
  };

  return (
    <>
      <BoxLayout title="organización">
        <ListOrganizationForm org={org} setOrg={setOrg} goBack={goBack} />
      </BoxLayout>

      <MemberTable members={members} onSelect={onSelect} />
    </>
  );
};
