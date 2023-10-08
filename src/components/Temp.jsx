import React from "react";
import { Table } from "react-bootstrap";
import "../css/table.css";

export default function Temp() {
  return (
    <>
      <Table>
        <thead className="tab-head">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Form</th>
          </tr>
        </thead>
      </Table>
    </>
  );
}
