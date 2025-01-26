/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useState, useEffect } from "react";

const MarketDataContext = createContext();

const initialIndices = [
  {
    indexName: "指數 A",
    indexValue: 1000,
    change: 10,
    changePercentage: 1.0,
    volume: 5000,
    volumeChangePercentage: 2.0,
  },
  {
    indexName: "指數 B",
    indexValue: 2000,
    change: -20,
    changePercentage: -1.0,
    volume: 3000,
    volumeChangePercentage: -1.5,
  },
  {
    indexName: "指數 C",
    indexValue: 3000,
    change: 30,
    changePercentage: 1.5,
    volume: 7000,
    volumeChangePercentage: 3.0,
  },
];

const MarketDataProvider = ({ children }) => {
  const [indices, setIndices] = useState(initialIndices);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlashing, setIsFlashing] = useState(false);

  // 輪播狀態
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % indices.length);
      setIsFlashing(true);
      setTimeout(() => {
        setIsFlashing(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [indices.length]);

  // 指數更新
  useEffect(() => {
    const updateInterval = setInterval(() => {
      setIndices((prevIndices) =>
        prevIndices.map((index) => {
          const change = (Math.random() - 0.5) * 20; // 隨機變動範圍 -10 到 10
          const newValue = parseFloat(index.indexValue) + change;
          const changePercentage = (change / index.indexValue) * 100;

          const volumeChange = (Math.random() - 0.5) * 1000; // 隨機變動範圍 -500 到 500
          const newVolume = parseInt(index.volume) + volumeChange;
          const volumeChangePercentage = (volumeChange / index.volume) * 100;
          return {
            ...index,
            indexValue: newValue.toFixed(2),
            change: change.toFixed(2),
            changePercentage: changePercentage.toFixed(2),
            volume: newVolume.toFixed(2),
            volumeChangePercentage: volumeChangePercentage.toFixed(2),
          };
        })
      );
    }, 1000);

    return () => clearInterval(updateInterval);
  }, []);

  return (
    <MarketDataContext.Provider
      value={{
        indices,
        currentIndex,
        isFlashing,
      }}
    >
      {children}
    </MarketDataContext.Provider>
  );
};

export { MarketDataContext, MarketDataProvider };
