import React from "react";
import Table from "react-bootstrap/Table";
import "../../static/css/NutrientTable.css";
import ChartBarSingle from '../charts/ChartBarSingle';



const tableHeaderStyle = {
  background: "rgb(139, 224, 181)",
};

function TableForNutrients({ data, filterCriteria }) {
  
  return (
    <div className="nutrient-table">
    <Table  bordered hover >
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
          .sort((a,b) => (a.nutrientName > b.nutrientName) ? 1 : ((b.nutrientName > a.nutrientName) ? -1 : 0))
          .map((nutrient) => (
            <tr key={nutrient.nutrientId2}>
              <td>{nutrient.nutrientName}</td>
              <td>
                {nutrient.avgConsumed.toFixed(1)} / {nutrient.recommended} {nutrient.unitName}
              </td>
              <td><ChartBarSingle data={{recommended: nutrient.recommended, consumed: nutrient.avgConsumed, color: "#fddd5c", width: "90%",stroke: "black",}}></ChartBarSingle></td>
            </tr>
          ))}
      </tbody>
    </Table>
    </div>
  );
}

export default TableForNutrients;
