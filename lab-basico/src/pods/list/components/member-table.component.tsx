import React from "react";
import {
  Avatar,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Member } from "../list.vm";

interface Props {
  members: Member[];
  onSelect: (member: Member) => void;
}

export const MemberTable: React.FC<Props> = (props) => {
  const { members, onSelect } = props;
  return (
    <TableContainer component={Paper}>
      <Table aria-label="Lista de usuarios">
        <TableHead>
          <TableRow>
            <TableCell>Avatar</TableCell>
            <TableCell>ID</TableCell>
            <TableCell>Login</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {members.map((member) => (
            <TableRow key={member.id} hover>
              <TableCell>
                <Avatar src={member.avatarUrl} alt={member.login} />
              </TableCell>
              <TableCell>{member.id}</TableCell>
              <TableCell
                sx={{
                  color: "indianred",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                onClick={() => onSelect(member)}
              >
                {member.login}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
