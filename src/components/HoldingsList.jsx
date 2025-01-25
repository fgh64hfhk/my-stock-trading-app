/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

function HoldingsList({ holdings }) {
  const [updatedHoldings, setUpdatedHoldings] = useState(holdings);

  useEffect(() => {
    const interval = setInterval(() => {
      // 模擬即時更新機制
      const newHoldings = updatedHoldings.map(holding => ({
        ...holding,
        currentValue: holding.currentValue + (Math.random() - 0.5) * 10, // 模擬價格波動
        profitLoss: (holding.currentValue + (Math.random() - 0.5) * 10 - holding.averageCost) * holding.quantity,
        returnRate: ((holding.currentValue + (Math.random() - 0.5) * 10 - holding.averageCost) / holding.averageCost) * 100,
      }));
      setUpdatedHoldings(newHoldings);
    }, 5000); // 每5秒更新一次
    return () => clearInterval(interval);
  }, [updatedHoldings]);

  return (
    <div className="holdings-list">
      <h5>持股部位列表</h5>
      <table className="table">
        <thead>
          <tr>
            <th>股票代號</th>
            <th>股票名稱</th>
            <th>持有數量</th>
            <th>平均成本</th>
            <th>現值</th>
            <th>損益金額</th>
            <th>報酬率</th>
          </tr>
        </thead>
        <tbody>
          {updatedHoldings.map((holding, index) => (
            <tr key={index}>
              <td>{holding.symbol}</td>
              <td>{holding.name}</td>
              <td>{holding.quantity}</td>
              <td>{holding.averageCost.toFixed(2)}</td>
              <td>{holding.currentValue.toFixed(2)}</td>
              <td>{holding.profitLoss.toFixed(2)}</td>
              <td>{holding.returnRate.toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HoldingsList;