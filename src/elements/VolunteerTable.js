import React from "react";
import { Table } from "rsuite";
const { Column, HeaderCell, Cell, Pagination } = Table;

export const VolunteerTable = ({ volunteers }) => {
  console.log(volunteers);
  return (
    <div>
      <Table
        height={400}
        data={volunteers}
        onRowClick={(data) => {
          console.log(data);
        }}
      >
        <Column width={70} align="center" fixed>
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column width={200} fixed>
          <HeaderCell>First Name</HeaderCell>
          <Cell dataKey="userName" />
        </Column>

        <Column width={200}>
          <HeaderCell>City</HeaderCell>
          <Cell dataKey="city" />
        </Column>

        <Column width={300}>
          <HeaderCell>Email</HeaderCell>
          <Cell dataKey="email" />
        </Column>
      </Table>
    </div>
  );
};
