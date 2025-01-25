/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function AssetOverview({
  totalAssetValue,
  cashBalance,
  securitiesValue,
  unrealizedPL,
  dailyPL,
}) {
  return (
    <div className="asset-overview">
      <h5>資產總覽區</h5>
      <table className="table">
        <tbody>
          <tr>
            <th>總資產現值</th>
            <td>{totalAssetValue}</td>
          </tr>
          <tr>
            <th>現金餘額</th>
            <td>{cashBalance}</td>
          </tr>
          <tr>
            <th>證券市值</th>
            <td>{securitiesValue}</td>
          </tr>
          <tr>
            <th>未實現損益</th>
            <td>{unrealizedPL}</td>
          </tr>
          <tr>
            <th>當日損益</th>
            <td>{dailyPL}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AssetOverview;
