import React from "react";
import { TablePagination } from "@mui/material";
import { MemberTable } from "./member-table.component";
import { Member } from "../list.vm";

interface Props {
  members: Member[];
  onSelect: (login: string) => void;
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (event: unknown, newPage: number) => void;
}

export const MemberTableWithPagination: React.FC<Props> = (props) => {
  const { members, onSelect, count, page, rowsPerPage, onPageChange } = props;

  const setSelected = (member: Member) => {
    onSelect(member.id);
  };

  return (
    <>
      <MemberTable members={members} onSelect={setSelected} />
      <TablePagination
        component="div"
        count={count}
        page={page}
        onPageChange={onPageChange}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[]}
      />
    </>
  );
};
