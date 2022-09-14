import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const PieChartComp = () => {
  const data = [
    { name: "Group A", value: 100 },
    { name: "Group B", value: 500 },
    { name: "Group C", value: 200 },
  ];

  const colors = ["#EE8484", "#98D89E", "#F6DC7D"];

  return (
    <PieChart width={150} height={150}>
      <Pie data={data} cx="50%" cy="50%" outerRadius={60}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default PieChartComp;
