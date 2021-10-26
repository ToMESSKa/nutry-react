import { Row, Col } from "antd";
import React from "react";
import Table from "react-bootstrap/Table";
import "../../static/css/NutrientTable.css";
import TableForNutrients from "./TableForNutrients";


function TableNutrients({ tableData }) {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col flex={2}>
          <TableForNutrients
            data={tableData}
            filterCriteria={"General"}
          ></TableForNutrients>
          <TableForNutrients
            data={tableData}
            filterCriteria={"Vitamins"}
          ></TableForNutrients>
          <TableForNutrients
            data={tableData}
            filterCriteria={"Carbohydrates"}
          ></TableForNutrients>
        </Col>

        <Col flex={2}>
          <TableForNutrients
            data={tableData}
            filterCriteria={"Minerals"}
          ></TableForNutrients>
          <TableForNutrients
            data={tableData}
            filterCriteria={"Lipids"}
          ></TableForNutrients>
          <TableForNutrients
            data={tableData}
            filterCriteria={"Others"}
          ></TableForNutrients>
        </Col>
      </Row>
    </div>
  );
}

export default TableNutrients;
