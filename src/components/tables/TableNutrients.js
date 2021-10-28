import { Row, Col } from "antd";
import React from "react";
import "../../static/css/NutrientTable.css";
import TableForNutrients from "./TableForNutrients";

function TableNutrients({ tableData, recommendedNutrients }) {
  return (
    <div>
      <Row gutter={[40, 40]}>
        <Col>
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

        <Col>
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
