import React from "react";
import Table from "react-bootstrap/Table";

function TableNutrients({ tableData }) {
  //tableData.map((nutrient)=>(console.log(nutrient)));
  //console.log(tableData);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th colSpan="2">Vitamins</th>
          </tr>
        </thead>

        <tbody>
          {tableData
            .filter((nutrient) => nutrient.category === "Vitamins")
            .map((nutrient) => (
              <tr>
                <td>{nutrient.nutrientName}</td>
                <td>{nutrient.avgConsumed}</td>
              </tr>
            ))}
        </tbody>
      </Table>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th colSpan="2">Minerals</th>
          </tr>
        </thead>

        <tbody>
        {tableData
            .filter((nutrient) => nutrient.category === "Minerals")
            .map((nutrient) => (
              <tr>
                <td>{nutrient.nutrientName}</td>
                <td>{nutrient.avgConsumed}</td>
              </tr>
            ))}
        </tbody>
      </Table>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th colSpan="2">Carbohydrates</th>
          </tr>
        </thead>

        <tbody>
        {tableData
            .filter((nutrient) => nutrient.category === "Carbohydrates")
            .map((nutrient) => (
              <tr>
                <td>{nutrient.nutrientName}</td>
                <td>{nutrient.avgConsumed}</td>
              </tr>
            ))}
        </tbody>
      </Table>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th colSpan="2">Lipids</th>
          </tr>
        </thead>

        <tbody>
        {tableData
            .filter((nutrient) => nutrient.category === "Lipids")
            .map((nutrient) => (
              <tr>
                <td>{nutrient.nutrientName}</td>
                <td>{nutrient.avgConsumed}</td>
              </tr>
            ))}
        </tbody>
      </Table>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th colSpan="2">Others</th>
          </tr>
        </thead>

        <tbody>{tableData
            .filter((nutrient) => nutrient.category === "Others")
            .map((nutrient) => (
              <tr>
                <td>{nutrient.nutrientName}</td>
                <td>{nutrient.avgConsumed}</td>
              </tr>
            ))}</tbody>
      </Table>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th colSpan="2">General</th>
          </tr>
        </thead>

        <tbody>
        {tableData
            .filter((nutrient) => nutrient.category === "General")
            .map((nutrient) => (
              <tr>
                <td>{nutrient.nutrientName}</td>
                <td>{nutrient.avgConsumed}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}

export default TableNutrients;
