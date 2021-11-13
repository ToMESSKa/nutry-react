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
import ChartCardForBarOneLine from "../../charts/ChartCardForBarOneLine";
import BarChartAntDesign from "../../charts/BarChartAntDesign";

function Statistics({ children }) {
  const [energyHistoryData, setEnergyHistoryData] = useState([]);
  const [weightHistoryData, setWeightHistoryData] = useState([]);
  const [waterHistoryData, setWaterHistoryData] = useState([]);
  const [avgMacroNutrients, setAvgMacroNutrients] = useState({});
  const [avgNutrients, setAvgNutrients] = useState([]);
  const endpoint = process.env.REACT_APP_API_ENDPOINT;

  useEffect(() => {
    getEnergyHistoryData({ period: 7 });
    getWeightHistoryData({ period: 7 });
    getWaterHistoryData({ period: 7 });
    getAvgMacroNutrients({ period: 7 });
    getAvgNutrients({ period: 7 });
  }, []);

  const getEnergyHistoryData = (period) => {
    axios
      .post(endpoint + "/getenergyhistory", period)
      .then((response) => {
        setEnergyHistoryData([...response.data]);
      });
  };

  const getWeightHistoryData = (period) => {
    axios
      .post(endpoint + "/getweighthistory", period)
      .then((response) => {
        setWeightHistoryData([...response.data]);
      });
  };

  const getWaterHistoryData = (period) => {
    axios
      .post(endpoint + "/getwaterhistory", period)
      .then((response) => {
        setWaterHistoryData([...response.data]);
      });
  };

  const getAvgMacroNutrients = (period) => {
    const config = {headers: {Authorization:`Bearer ${localStorage.getItem("token")}`}};
    axios
      .post(endpoint + "/get-avg-macronutrients-for-period", period, config)
      .then((response) => {
        setAvgMacroNutrients({ ...response.data });
      });
  };

  const getAvgNutrients = (period) => {
    axios
      .post(endpoint + "/get-avg-nutrients-for-period", period)
      .then((response) => {
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
        <Col offset={4} span={16}>
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
          <Row gutter={[10, 20]}>
            <Col flex="25%">
              <ChartCardForBarOneLine
                chartCardData={{
                  amount: avgMacroNutrients["carbohydrate"],
                  label: "CARBOHYDRATE",
                  icon: <GiWheat/>,
                    recommended: avgMacroNutrients["carbohydrateRecommended"],
                }}
              >
                <BarChartAntDesign
                  data={{
                    color: "#FF8042",
                    amount: avgMacroNutrients["carbohydrate"],
                    recommended: avgMacroNutrients["carbohydrateRecommended"],
                  }}
                ></BarChartAntDesign>
              </ChartCardForBarOneLine>
            </Col>

            <Col flex="25%">
              <ChartCardForBarOneLine
                chartCardData={{
                  amount: avgMacroNutrients["protein"],
                  label: "PROTEIN",
                  icon: <GiBiceps />,
                    recommended: avgMacroNutrients["proteinRecommended"],
                }}
              >
                <BarChartAntDesign
                  data={{
                    color: "#00C49F",
                    amount: avgMacroNutrients["protein"],
                    recommended: avgMacroNutrients["proteinRecommended"],
                  }}
                ></BarChartAntDesign>
              </ChartCardForBarOneLine>
            </Col>

            <Col flex="25%">
              <ChartCardForBarOneLine
                chartCardData={{
                  amount: avgMacroNutrients["fat"],
                  label: "FAT",
                  icon: <ImDroplet />,
                    recommended: avgMacroNutrients["fatRecommended"],
                }}
              >
                <BarChartAntDesign
                  data={{
                    color: "#FFBB28",
                    amount: avgMacroNutrients["fat"],
                    recommended: avgMacroNutrients["fatRecommended"],
                  }}
                ></BarChartAntDesign>
              </ChartCardForBarOneLine>
            </Col>

            <Col flex="25%">
              <ChartCardForBarOneLine
                chartCardData={{
                  amount: 2,
                  label: "WATER",
                  icon: <GiGlassShot />,
                    color: "#0088FE",
                }}
              >
                <BarChartAntDesign
                  data={{
                    color: "#0088FE",
                    amount: 2,
                    recommended: 3,
                  }}
                ></BarChartAntDesign>
              </ChartCardForBarOneLine>
            </Col>
          </Row>
          <p></p>

          <Row></Row>

          <Row gutter={[10, 20]}>
            <Col flex="33%" align="middle">
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

            <Col flex="33%" align="middle">
              <CardForCharts
                cardData={{
                  label: "Weight Change (kg)",
                }}
              >
                <ChartSimpleLine simpleLineChartData={weightHistoryData} />
              </CardForCharts>
            </Col>

            <Col flex="33%" align="middle">
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
        </Col>
      </DividedLayout>
    </Col>
  );
}

export default Statistics;
