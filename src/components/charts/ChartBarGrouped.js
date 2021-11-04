import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";


function ChartBarGrouped({ simpleBarData, simpleBarStyle }) {
  return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={simpleBarData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="recommended" fill={simpleBarStyle.color} />
          <Bar dataKey="consumed" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
  );
}

export default ChartBarGrouped;
