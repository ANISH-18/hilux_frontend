import React from "react";
import { Container, Row, Table } from "react-bootstrap";
import "../../css/table.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Category_Ten() {
  return (
    <>
      <Container className="mt-4">
        <Row>
          <h1>CATEGORY</h1>
          <TB />
        </Row>
      </Container>
    </>
  );
}

const TB = () => {
  return (
    <Table className="rounded" striped hover responsive>
      <thead className="yellow-thead">
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Form</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            similique voluptas officiis eius temporibus? Voluptatibus recusandae
            reiciendis dicta! Ipsam recusandae culpa obcaecati minima debitis
            aliquid? Optio illo labore eius distinctio!
          </td>
          <td>Mail</td>
        </tr>
      </tbody>
    </Table>
  );
};
