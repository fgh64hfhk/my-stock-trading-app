/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { MarketDataContext } from "../context/MarketDataContext";

function MarketVolume() {
  const { indices, currentIndex, isFlashing } = useContext(MarketDataContext);
  const { indexName, volume, volumeChangePercentage } = indices[currentIndex];
  const changeClass = volumeChangePercentage >= 0 ? "positive" : "negative";
  return (
    <div className={`market-volume ${isFlashing ? "flashing" : ""}`}>
      <h4>{indexName}</h4>
      <p>成交量：{volume}</p>
      <p className={changeClass}>交易量增減幅：{volumeChangePercentage}%</p>
    </div>
  );
}

export default MarketVolume;
