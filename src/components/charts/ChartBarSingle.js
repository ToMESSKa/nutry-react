import React, {} from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";


function ChartBarSingle({ data }) {
  console.log(typeof data.recommended);
  console.log(data.recommended)
  console.log(typeof data.consumed);
  console.log(data.consumed);
  const data1 = [
    {
      name: "Page A",
      consumed: (data.consumed === null || data.consumed === 0.0) ? 0.0 : (data.consumed > data.recommended || data.consumed === data.recommended) ? 100.0 : data.consumed < data.recommended ? data.consumed/data.recommended*100.0 : 0.0,
      max:  (data.recommended === 0 || data.recommended === null || data.consumed > data.recommended) ? 0 : (data.recommended-data.consumed)/data.recommended*100.0, //data.consumed>data.crecommended?data.recommended:(data.recommended-data.consumed)/100,  // TODO calc recommended
    },
  ];

  return (

    // <div>
    //   {isLoggedIn        
    //   ? <LogoutButton onClick={this.handleLogoutClick} />
    //   : <LoginButton onClick={this.handleLoginClick} />      }
    // </div>

     <ResponsiveContainer width={data.width} height="40%" aspect={4}>


      <BarChart
        width={600}
        height={400}
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
          dataKey="consumed"
          stackId="a"
          fill={data.color}
          radius={[0, 0, 0, 0]}
          stroke={data.stroke}
          paddingAngle={0} 
        />
        <Bar
          dataKey="max"
          stackId="a"
          fill="#efefef"
          radius={[0, 0, 0, 0]}
          isAnimationActive={false}
          stroke={data.stroke}
          paddingAngle={0} 
        />
      </BarChart>

      
    </ResponsiveContainer> 
  
  
  
    );
}

export default ChartBarSingle;
