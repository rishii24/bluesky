import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const LineChartComp = () => {
  const data = [
    {
      name: "Week 1",
      guest: 7000,
      user: 5400,
      amt: 2400,
    },
    {
      name: "Week 2",
      guest: 4500,
      user: 1658,
      amt: 2210,
    },
    {
      name: "Week 3",
      guest: 7500,
      user: 9800,
      amt: 2290,
    },
    {
      name: "Week 4",
      guest: 2780,
      user: 3908,
      amt: 2000,
    },
  ];
  return (
    <LineChart width={900} height={200} data={data} className="text-sm mt-4">
      <CartesianGrid vertical={false} />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="guest" stroke="#E9A0A0" strokeWidth={3} />
      <Line type="monotone" dataKey="user" stroke="#9BDD7C" strokeWidth={3} />
    </LineChart>
  );
};

export default LineChartComp;
