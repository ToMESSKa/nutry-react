import React, { } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';



function ChartSimpleArea({simpleAreaChartData}) {

    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={simpleAreaChartData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="actual" stroke="#87CEFA" fill="#87CEFA" />
          <Area type="monotone" dataKey="target" stroke="#4682B4" fillOpacity="0%" />

        </AreaChart>
      </ResponsiveContainer>
    );
}

export default ChartSimpleArea;
