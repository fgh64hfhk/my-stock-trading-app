/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

function PerformanceAnalysis({ holdings, performance }) {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const pieData = holdings.map((holding, index) => ({
    name: holding.name,
    value: holding.currentValue,
    fill: COLORS[index % COLORS.length],
  }));

  const barData = holdings.map((holding) => ({
    name: holding.name,
    profitLoss: holding.profitLoss,
  }));

  return (
    <div className="performance-analysis">
      <h4>投資組合績效分析</h4>
      <div className="charts">
        <div className="pie-chart">
          <h5>投資佔比</h5>
          <PieChart width={400} height={400}>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={150}
              fill="#8884d8"
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
      </div>
      <div className="bar-chart">
        <h5>損益分布</h5>
        <BarChart
          width={500}
          height={300}
          data={barData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value) => value.toFixed(2)} />
          <Legend />
          <Bar dataKey="profitLoss" fill="#82ca9d" />
        </BarChart>
      </div>
      <div className="performance-metrics">
        <h5>績效指標</h5>
        <div className="metrics">
          <div className="metric">
            <span>整體報酬率：</span>
            <span>{performance.overallReturnRate.toFixed(2)}%</span>
          </div>
          <div className="metric">
            <span>最大單筆獲利：</span>
            <span>{performance.maxProfit.toFixed(2)}</span>
          </div>
          <div className="metric">
            <span>最大單筆損失：</span>
            <span>{performance.maxLoss.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerformanceAnalysis;
