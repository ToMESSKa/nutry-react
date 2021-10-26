import { Col, Row, Radio } from "antd";
import { React, useState, useEffect } from "react";
import {} from "react-router-dom";
import DividedLayout from "../../common/DivivedLayout";
import LeftColumn from "../../common/LeftColumn";
import RightColumn from "../../common/RightColumn ";
import CardForChartBarSingle from "../../common/CardForChartBarSingle";
import { GiWheat, GiGlassShot, GiBiceps } from "react-icons/gi";
import { ImDroplet } from "react-icons/im";
import ChartBarSingle from "../../charts/ChartBarSingle";
import CardForCharts from "../../common/CardForCharts";
import ChartBarGrouped from "../../charts/ChartBarGrouped";
import ChartSimpleLine from "../../charts/ChartSimpleLine";
import ChartSimpleArea from "../../charts/ChartSimpleArea";
import axios from "axios";
import TableNutrients from "../../tables/TableNutrients";

function Statistics({ children }) {
  //const [chartCardData, setChartCardData] = useState({});
  const [energyHistoryData, setEnergyHistoryData] = useState([]);
  const [weightHistoryData, setWeightHistoryData] = useState([]);
  const [waterHistoryData, setWaterHistoryData] = useState([]);
  const [avgMacroNutrients, setAvgMacroNutrients] = useState({});
  const [avgNutrients, setAvgNutrients] = useState([]);

  useEffect(() => {
    getEnergyHistoryData({ period: 7 });
    getWeightHistoryData({ period: 7 });
    getWaterHistoryData({ period: 7 });
    getAvgMacroNutrients({ period: 7 });
    getAvgNutrients({ period: 7 });
  }, []);

  const getEnergyHistoryData = (period) => {
    axios
      .post("http://localhost:8080/getenergyhistory", period)
      .then((response) => {
        setEnergyHistoryData([...response.data]);
      });
  };

  const getWeightHistoryData = (period) => {
    axios
      .post("http://localhost:8080/getweighthistory", period)
      .then((response) => {
        setWeightHistoryData([...response.data]);
      });
  };

  const getWaterHistoryData = (period) => {
    axios
      .post("http://localhost:8080/getwaterhistory", period)
      .then((response) => {
        setWaterHistoryData([...response.data]);
      });
  };

  const getAvgMacroNutrients = (period) => {
    axios
      .post("http://localhost:8080/get-avg-macronutrients-for-period", period)
      .then((response) => {
        setAvgMacroNutrients({ ...response.data });
      });
  };

  const getAvgNutrients = (period) => {
    axios
      .post("http://localhost:8080/get-avg-nutrients-for-period", period)
      .then((response) => {
        console.log(response.data)
        setAvgNutrients([ ...response.data ]);
      });
  };

  const handlePeriodChange = (event) => {
    event.preventDefault();
    const period = event.target.dataset.period;
    getAvgMacroNutrients({ period: period });
    getAvgNutrients({ period: period });
    getEnergyHistoryData({ period: period });
    getWeightHistoryData({ period: period });
    getWaterHistoryData({ period: period });
    
  };

  return (
    <Col>
      <DividedLayout>
        <LeftColumn></LeftColumn>
        <RightColumn>
          <Row>
            <Radio.Group value={"large"}>
              <Radio.Button
                data-period={30}
                onClick={handlePeriodChange}
                value="default"
              >
                Last Month
              </Radio.Button>
              <Radio.Button
                data-period={14}
                onClick={handlePeriodChange}
                value="default"
              >
                Last 14 Days
              </Radio.Button>
              <Radio.Button
                data-period={7}
                onClick={handlePeriodChange}
                value="default"
              >
                Last 7 Days
              </Radio.Button>
            </Radio.Group>
          </Row>
          <Row>
            <p></p>
          </Row>
          <Row gutter={[16, 16]}>
            <Col>
              <CardForChartBarSingle
                chartCardData={{
                  amount: avgMacroNutrients["carbohydrate"],
                  label: "CARBOHYDRATE",
                  icon: <GiWheat size={40} />,
                }}
              >
                <ChartBarSingle
                  data={{
                    color: "#FF8042",
                    amount: avgMacroNutrients["carbohydrate"],
                  }}
                ></ChartBarSingle>
              </CardForChartBarSingle>
            </Col>

            <Col>
              <CardForChartBarSingle
                chartCardData={{
                  amount: avgMacroNutrients["protein"],
                  label: "PROTEIN",
                  icon: <GiBiceps size={40} />,
                }}
              >
                <ChartBarSingle
                  data={{
                    color: "#00C49F",
                    amount: avgMacroNutrients["protein"],
                  }}
                ></ChartBarSingle>
              </CardForChartBarSingle>
            </Col>

            <Col>
              <CardForChartBarSingle
                chartCardData={{
                  amount: avgMacroNutrients["fat"],
                  label: "FAT",
                  icon: <ImDroplet size={40} />,
                }}
              >
                <ChartBarSingle
                  data={{
                    color: "#FFBB28",
                    amount: 100,
                  }}
                ></ChartBarSingle>
              </CardForChartBarSingle>
            </Col>

            <Col>
              <CardForChartBarSingle
                chartCardData={{
                  amount: 100,
                  label: "WATER",
                  icon: <GiGlassShot size={40} />,
                }}
              >
                <ChartBarSingle
                  data={{
                    color: "#0088FE",
                    amount: 100,
                  }}
                ></ChartBarSingle>
              </CardForChartBarSingle>
            </Col>
          </Row>
          <p></p>

          <Row></Row>

          <Row gutter={[16, 16]}>
            <Col>
              <CardForCharts
                cardData={{
                  label: "Energy History (kcal)",
                }}
              >
                <ChartBarGrouped
                  simpleBarData={energyHistoryData}
                  simpleBarStyle={{ color: "grey" }}
                />
              </CardForCharts>
            </Col>

            <Col>
              <CardForCharts
                cardData={{
                  label: "Weight Change (kg)",
                }}
              >
                <ChartSimpleLine simpleLineChartData={weightHistoryData} />
              </CardForCharts>
            </Col>

            <Col>
              <CardForCharts
                cardData={{
                  label: "Water Consumption (l)",
                }}
              >
                <ChartSimpleArea simpleAreaChartData={waterHistoryData} />
              </CardForCharts>
            </Col>
          </Row>

          <Row>
            <p></p>
          </Row>

          <Row>
            <TableNutrients tableData={avgNutrients}></TableNutrients>
          </Row>
        </RightColumn>
      </DividedLayout>
    </Col>
  );
}

export default Statistics;
