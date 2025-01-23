/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

function SystemTime({ currentTime }) {

  const isTradingTime = () => {
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const start = 9 * 60; // 09:00 AM in minutes
    const end = 15 * 60 + 30; // 03:30 PM in minutes
    const current = hours * 60 + minutes;
    return current >= start && current <= end;
  };

  return (
    <div className="system-time">
      <h4>系統時間</h4>
      <p>{currentTime.toLocaleString()} - {isTradingTime() ? "交易中" : "休息中"}{" "}</p>
      <p>交易時間：09:00 AM - 03:30 PM</p>
    </div>
  );
}

export default SystemTime;
