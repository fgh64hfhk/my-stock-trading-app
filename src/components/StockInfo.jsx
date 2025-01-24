/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

function StockInfo({ stock }) {
  if (!stock) {
    return (
      <div className="stock-info">
        <h5>請選擇一張股票</h5>
      </div>
    )
  }
  return (
    <div className="stock-info">
      <h4>
        {stock.symbol} - {stock.name}
      </h4>
      <div className="stock-details">
        <div className="stock-chart">
          <img
            src={`https://dummyimage.com/450x450/000/fff&text=${stock.symbol}`}
            alt={`${stock.name} chart`}
          />
        </div>
        <div className="stock-indicators">
          <table>
            <thead>
              <tr>
                <th>周報酬</th>
                <th>月報酬</th>
                <th>季報酬</th>
                <th>年報酬</th>
                <th>三年報酬</th>
                <th>五年報酬</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>5%</td>
                <td>5%</td>
                <td>5%</td>
                <td>5%</td>
                <td>5%</td>
                <td>5%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default StockInfo;