/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { MarketDataContext } from "../context/MarketDataContext";
import "./IndexInfo.css";

function IndexInfo() {
  const { indices, currentIndex, isFlashing } = useContext(MarketDataContext);

  const { indexName, indexValue, change, changePercentage } =
    indices[currentIndex];
  const changeClass = change >= 0 ? "positive" : "negative";

  return (
    <div className={`index-info ${isFlashing ? "flashing" : ""}`}>
      <h4>{indexName}</h4>
      <p>指數：{indexValue}</p>
      <p className={changeClass}>漲跌點數：{change}</p>
      <p className={changeClass}>漲跌幅度：{changePercentage}%</p>
    </div>
  );
}

export default IndexInfo;
