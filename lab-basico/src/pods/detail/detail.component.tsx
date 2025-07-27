import { routes } from "@/router";
import React from "react";
import { Link } from "react-router-dom";
import { MemberDetail } from "./detail.vm";

interface Props {
  member: MemberDetail;
}

export const Detail: React.FC<Props> = (props) => {
  const { member } = props;

  return (
    <>
      <h2>{member.name}</h2>
      <img src={member.avatarUrl} alt="avatar" />
      <p> id: {member.id}</p>
      <p> login: {member.login}</p>
      <p> company: {member.company}</p>
      <p> bio: {member.bio}</p>
      <Link to={routes.root}>Back to list page</Link>
    </>
  );
};
