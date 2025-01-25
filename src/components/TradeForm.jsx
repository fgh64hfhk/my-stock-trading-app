/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function TradeForm({ stock }) {
  const [tradeType, setTradeType] = useState("buy");
  const [orderType, setOrderType] = useState("market");

  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(stock ? stock.price : 0);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleTradeTypeChange = (type) => {
    setTradeType(type);
  };

  const handleOrderTypeChange = (e) => {
    setOrderType(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value), 10);
  };

  const handlePriceChange = (e) => {
    setPrice(parseFloat(e.target.value));
  };

  const handleQuantityIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleQuantityDecrement = () => {
    setQuantity(quantity - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const estimatedAmount =
    orderType === "market" ? stock?.price * quantity : price * quantity;

  return (
    <div className="trade-form">
      <h4>交易操作</h4>
      <div className="trade-type-tabs mb-3">
        <button
          className={`btn ${
            tradeType === "buy" ? "btn-primary" : "btn-secondary"
          }`}
          disabled={tradeType === "buy"}
          onClick={() => handleTradeTypeChange("buy")}
        >
          買入
        </button>
        <button
          className={`btn ${
            tradeType === "sell" ? "btn-primary" : "btn-secondary"
          }`}
          disabled={tradeType === "sell"}
          onClick={() => handleTradeTypeChange("sell")}
        >
          賣出
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label className="form-label">交易類型</label>
          <select
            className="form-control"
            value={orderType}
            onChange={handleOrderTypeChange}
          >
            <option value="market">市價</option>
            <option value="limit">限價</option>
          </select>
        </div>

        <div className="form-group mb-3">
          <label className="form-label">交易數量</label>
          <div className="input-group">
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={handleQuantityDecrement}
            >
              -
            </button>
            <input
              type="number"
              className="form-control"
              value={quantity}
              min={1}
              onChange={handleQuantityChange}
            />
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={handleQuantityIncrement}
            >
              +
            </button>
          </div>
        </div>

        {orderType === "limit" && (
          <div className="form-group mb-3">
            <label className="form-label">交易價格</label>
            <input
              type="number"
              className="form-control"
              value={price}
              step={0.01}
              onChange={handlePriceChange}
            />
          </div>
        )}

        <div className="form-group mb-3">
          <label className="form-label">預估交易金額</label>
          <input
            type="text"
            className="form-control"
            value={estimatedAmount.toFixed(2)}
            readOnly
          />
        </div>

        <button type="submit" className="btn btn-success">
          下單
        </button>
      </form>
      <hr />
      {showConfirmation && (
        <div className="confirmation-modal modal-content">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">交易表單確認</h5>

              <p className="card-text">
                交易類型：{tradeType === "buy" ? "買入" : "賣出"}
              </p>
              <p className="card-text">
                交易方式：{orderType === "market" ? "市價" : "限價"}
              </p>
              <p className="card-text">交易數量：{quantity}</p>
              {orderType === "limit" && (
                <p className="card-text">價格：{price}</p>
              )}
              <p className="card-text">
                預估交易金額：{estimatedAmount.toFixed(2)}
              </p>
              <button
                className="btn btn-primary"
                onClick={() => setShowConfirmation(false)}
              >
                確定
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => setShowConfirmation(false)}
              >
                取消
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TradeForm;
