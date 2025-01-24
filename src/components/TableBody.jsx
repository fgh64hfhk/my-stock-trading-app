/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

function TableBody({ stocks, onSelect }) {
  const handleSelectedStock = (stock) => {
    onSelect(stock);
  };
  return (
    <tbody>
      {stocks.map((stock) => (
        <tr key={stock.symbol} onClick={() => handleSelectedStock(stock)}>
          <td>{stock.symbol}</td>
          <td>{stock.name} - {stock.category}</td>
          <td>{stock.price}</td>
          <td>{stock.change}</td>
          <td>{stock.changePercentage}%</td>
          <td>{stock.volume}</td>
          <td>{stock.buySellPrice}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
