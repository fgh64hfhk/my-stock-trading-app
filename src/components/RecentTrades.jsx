/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function RecentTrades({ trades }) {
  return (
    <div className="recent-trades">
      <h5>近期交易紀錄</h5>
      <table className="table">
        <thead>
          <tr>
            <th>時間</th>
            <th>股票代碼</th>
            <th>買賣別</th>
            <th>價格</th>
            <th>數量</th>
            <th>狀態</th>
          </tr>
        </thead>
        <tbody>
          {trades.slice(0, 5).map((trade, index) => (
            <tr key={index}>
              <td>{trade.time}</td>
              <td>{trade.stock}</td>
              <td>{trade.type === "buy" ? "買入" : "賣出"}</td>
              <td>{trade.price}</td>
              <td>{trade.quantity}</td>
              <td>{trade.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentTrades;
