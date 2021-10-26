import React, { PureComponent, useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";


function BarChartOneLine({ data }) {
  const data1 = [
    {
      name: "Page A",
      uv: data.amount,
      pv: 100-data.amount,
    },
  ];


  return (
    <ResponsiveContainer width="100%" height="40%" aspect={4}>
      <BarChart
        width={600}
        height={200}
        data={data1}
        maxBarSize={20}
        layout={"vertical"}
      >
        <XAxis
          type={"number"}
          orientation={"center"}
          tick={false}
          axisLine={false}
          width={0}
        />
        <YAxis
          type={"category"}
          orientation={"center"}
          dataKey={"name"}
          tick={false}
          axisLine={true}
          width={0}
        />
        <Bar
          dataKey="uv"
          stackId="a"
          fill={data.color}
          radius={[20, 0, 0, 20]}
        />
        <Bar
          dataKey="pv"
          stackId="a"
          fill="#efefef"
          radius={[0, 20, 20, 0]}
          isAnimationActive={false}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default BarChartOneLine;
