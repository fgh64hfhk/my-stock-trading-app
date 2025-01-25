/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function InvestmentAdvice() {
  const [riskPreference, setRiskPreference] = useState("medium");
  const [annualReturn, setAnnualReturn] = useState(8.5);
  const [volatility, setVolatility] = useState(10);

  const handleRiskPreferenceChange = (e) => {
    setRiskPreference(e.target.value);
  };

  const calculateUtility = () => {
    // 假設的效用函數 U = E(R) - 0.005 * A * σ^2
    // 其中 E(R) 是期望報酬率，A 是風險厭惡係數，σ 是波動度
    // 常数 0.005 是用于标准化方差对效用的贡献，使其与收益的贡献具有一致的量纲或量级
    const riskAversionCoefficient =
      riskPreference === "low" ? 1 : riskPreference === "medium" ? 3 : 5;
    const utility =
      annualReturn - 0.005 * riskAversionCoefficient * Math.pow(volatility, 2);
    return utility.toFixed(2);
  };

  return (
    <div className="investment-advice">
      <h5>操作建議區</h5>
      <div className="form-group">
        <label className="form-label">風險偏好程度</label>
        <select
          className="form-control"
          value={riskPreference}
          onChange={handleRiskPreferenceChange}
        >
          <option value="low">低</option>
          <option value="medium">中</option>
          <option value="high">高</option>
        </select>
      </div>
      <div className="form-group">
        <label className="form-label">年報酬 (%)</label>
        <input
          type="number"
          className="form-control"
          value={annualReturn}
          onChange={(e) => setAnnualReturn(parseFloat(e.target.value))}
        />
      </div>
      <div className="form-group">
        <label className="form-label">波動度 (%)</label>
        <input
          type="number"
          className="form-control"
          value={volatility}
          onChange={(e) => setVolatility(parseFloat(e.target.value))}
        />
      </div>
      <div className="form-group">
        <label className="form-label">效用等級</label>
        <input
          type="text"
          className="form-control"
          value={calculateUtility()}
          readOnly
        />
      </div>
    </div>
  );
}

export default InvestmentAdvice;
