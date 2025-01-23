/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function TableHeader({ onSort }) {
  const [sortField, setSortField] = useState("symbol");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = (field) => {
    const newSortOrder = sortField === field && sortOrder === "asc" ? "desc" : "asc";
    setSortField(field);
    setSortOrder(newSortOrder);

    onSort(field, newSortOrder);
  };

  return (
    <thead>
      <tr>
        <th onClick={() => handleSort("symbol")}>股票代號</th>
        <th onClick={() => handleSort("name")}>股票名稱</th>
        <th onClick={() => handleSort("price")}>現價</th>
        <th onClick={() => handleSort("change")}>漲跌</th>
        <th onClick={() => handleSort("changePercentage")}>漲跌幅</th>
        <th onClick={() => handleSort("volume")}>成交量</th>
        <th onClick={() => handleSort("buySellPrice")}>買賣價</th>
      </tr>
    </thead>
  );
}

export default TableHeader;
