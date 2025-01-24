/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function TableHeader({ sortField, sortOrder, onSort }) {
  const handleSort = (field) => {
    let newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    onSort(field, newSortOrder);
  };

  const renderSortIcon = (field) => {
    if (sortField !== field) {
      return null;
    }
    return sortOrder === "asc" ? "🔼" : "🔽";
  };

  return (
    <thead>
      <tr>
        <th onClick={() => handleSort("symbol")}>
          股票代號 {renderSortIcon("symbol")}
        </th>
        <th onClick={() => handleSort("name")}>
          股票名稱 {renderSortIcon("name")}
        </th>
        <th onClick={() => handleSort("price")}>
          現價 {renderSortIcon("price")}
        </th>
        <th onClick={() => handleSort("change")}>
          漲跌 {renderSortIcon("change")}
        </th>
        <th onClick={() => handleSort("changePercentage")}>
          漲跌幅 {renderSortIcon("changePercentage")}
        </th>
        <th onClick={() => handleSort("volume")}>
          成交量 {renderSortIcon("volume")}
        </th>
        <th onClick={() => handleSort("buySellPrice")}>
          買賣價 {renderSortIcon("buySellPrice")}
        </th>
      </tr>
    </thead>
  );
}

export default TableHeader;
