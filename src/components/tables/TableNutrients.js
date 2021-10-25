import React from "react";
import Table from "react-bootstrap/Table";

function TableNutrients() {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th colSpan="2">Vitamins</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Vitamin C</td>
            <td>20 mg</td>
          </tr>
          <tr>
            <td>Vitamin B12</td>
            <td>20 mg</td>
          </tr>
        </tbody>
      </Table>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th colSpan="2">Minerals</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Calcium</td>
            <td>20 mg</td>
          </tr>
          <tr>
            <td>Magnesium</td>
            <td>20 mg</td>
          </tr>
        </tbody>
      </Table>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th colSpan="2">Carbohydrates</th>
          </tr>
        </thead>

        <tbody>
        </tbody>
      </Table>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th colSpan="2">Lipids</th>
          </tr>
        </thead>

        <tbody>
        </tbody>
      </Table>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th colSpan="2">Protein</th>
          </tr>
        </thead>

        <tbody>
        </tbody>
      </Table>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th colSpan="2">General</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Alcohol</td>
            <td>20 mg</td>
          </tr>
          <tr>
            <td>Coffein</td>
            <td>20 mg</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default TableNutrients;
