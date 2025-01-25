/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function SelectedStockInfo({ stock }) {
  if (!stock) {
    return (
      <div className="stock-info">
        <h4>請選擇一支股票</h4>
      </div>
    );
  }
  const renderOrderBook = () => {
    // 假設的買賣價十檔數據
    const orderBook = [
      { price: 600, volume: 100 },
      { price: 599, volume: 200 },
      { price: 598, volume: 300 },
      { price: 597, volume: 400 },
      { price: 596, volume: 500 },
      { price: 595, volume: 600 },
      { price: 594, volume: 700 },
      { price: 593, volume: 800 },
      { price: 592, volume: 900 },
      { price: 591, volume: 1000 },
    ];
    return (
      <div className="order-book">
        <h5>買賣價十檔顯示</h5>
        <table className="table">
          <thead>
            <tr>
              <th>價格</th>
              <th>成交量</th>
            </tr>
          </thead>
          <tbody>
            {orderBook.map((order, index) => (
              <tr key={index}>
                <td>{order.price}</td>
                <td>{order.volume}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const renderRSIAnalysis = () => {
    // 假設的 RSI 數據
    const rsi = 70;

    return (
      <div className="rsi-analysis">
        <h5>股票 RSI 分析</h5>
        <div className="card">
          <div className="card-body">
            <h6 className="card-title">RSI：{rsi}</h6>
            <p className="card-text">
              {rsi > 70
                ? "股票被超買"
                : rsi < 30
                ? "股票被超賣"
                : "股票處於正常範圍"}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="selectd-stock-info">
      {renderOrderBook()}
      {renderRSIAnalysis()}
    </div>
  );
}

export default SelectedStockInfo;
