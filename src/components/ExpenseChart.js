// components/ExpenseChart.js
import React, { useContext } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { GlobalContext } from "../context/GlobalState";

const COLORS = ["#2ecc71", "#e74c3c"]; // green for income, red for expense

const ExpenseChart = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(t => t.amount);

  const income = amounts.filter(a => a > 0).reduce((acc, val) => acc + val, 0);
  const expense = amounts.filter(a => a < 0).reduce((acc, val) => acc + val, 0) * -1;

  const data = [
    { name: "Income", value: income },
    { name: "Expense", value: expense }
  ];

  return (
    <PieChart width={300} height={300}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={100}
        dataKey="value"
        label
      >
        {data.map((entry, index) => (
          <Cell key={index} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default ExpenseChart;
