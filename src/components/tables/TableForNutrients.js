import React from "react";
import Table from "react-bootstrap/Table";
import "../../static/css/NutrientTable.css";

const tableStyle = {
  background: "white",
  width: "600px",
};

const tableHeaderStyle = {
  background: "rgb(139, 224, 181)",
};

function TableForNutrients({ data, filterCriteria }) {
  console.log(data);
  console.log(filterCriteria);
  return (
    <Table striped bordered hover style={tableStyle}>
      <thead>
        <tr>
          <th colSpan="3" style={tableHeaderStyle}>
            {filterCriteria.toUpperCase()}
          </th>
        </tr>
      </thead>

      <tbody>
        {data
          .filter((nutrient) => nutrient.category ===  filterCriteria )
          .map((nutrient) => (
            <tr key={nutrient.nutrientId2}>
              <td>{nutrient.nutrientName}</td>
              <td>
                {nutrient.avgConsumed} {nutrient.unitName}
              </td>
              <td>target</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}

export default TableForNutrients;
