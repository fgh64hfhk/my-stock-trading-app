/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext } from "react";
import { MarketDataContext } from "../context/MarketDataContext";
import ToastContainer from "./ToastContainer";
import Toast from "./Toast";

function SystemInfo({ title, message }) {
  const [showToast, setShowToast] = useState(false);

  const { indices } = useContext(MarketDataContext);
  // 每當指數變化時，檢查是否有需要顯示 Toast
  // 這裡假設只有指數 A 達到 1000 點時才顯示 Toast
  // 首先取得目前指數 A 的資料
  const currentIndexA = indices.find((index) => index.indexName === "指數 A");
  // 取得目前指數 A 的點數
  const currentPoint = currentIndexA.indexValue;
  // 判斷是否顯示 Toast
  useEffect(() => {
    if (currentPoint >= 1000) {
      setShowToast(true);
    } else {
      setShowToast(false);
    }
  }, [currentPoint]);

  // 顯示 Toast
  return (
    showToast && (
      <ToastContainer position={"top-end"}>
        <Toast onClose={() => setShowToast(false)}>
          <div className="toast-header">
            <strong className="me-auto">Price Alert</strong>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
            ></button>
          </div>
          <div className="toast-body">
            <strong>{title}</strong>
            <br />
            <span>{message}</span>
            <br />
            Price has reached {currentPoint} points!
          </div>
        </Toast>
      </ToastContainer>
    )
  );
}

export default SystemInfo;
