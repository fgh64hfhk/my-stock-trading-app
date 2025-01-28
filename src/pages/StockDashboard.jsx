/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import SystemTime from "../components/SystemTime";
import IndexInfo from "../components/IndexInfo";
import MarketVolume from "../components/MarketVolume";
import SystemInfo from "../components/SystemInfo";
import SearchBar from "../components/SearchBar";
import TableHeader from "../components/TableHeader";
import TableBody from "../components/TableBody";
import StockInfo from "../components/StockInfo";
import Pagination from "../components/Pagination";
import SelectedStockInfo from "../components/SelectedStockInfo";
import TradeForm from "../components/TradeForm";
import RecentTrades from "../components/RecentTrades";
import AssetOverview from "../components/AssetOverview";
import HoldingsList from "../components/HoldingsList";
import PerformanceAnalysis from "../components/PerformanceAnalysis";
import InvestmentAdvice from "../components/InvestmentAdvice";

import generateUniqueStocks from "../assets/stocks";

import { MarketDataProvider } from "../context/MarketDataContext";

function StockDashboard() {
  // 系統時間狀態
  const [currentTime, setCurrentTime] = useState(new Date());

  // 股票列表狀態
  const [initialstocks] = useState(generateUniqueStocks(30));

  const [recentTrades] = useState([
    // 假設的交易紀錄數據
    {
      time: "2023-10-01 10:00",
      stock: "台積電",
      type: "buy",
      price: 600,
      quantity: 10,
      status: "成交",
    },
    {
      time: "2023-10-01 10:05",
      stock: "鴻海",
      type: "sell",
      price: 100,
      quantity: 20,
      status: "成交",
    },
    {
      time: "2023-10-01 10:10",
      stock: "台積電",
      type: "buy",
      price: 605,
      quantity: 15,
      status: "成交",
    },
    {
      time: "2023-10-01 10:15",
      stock: "鴻海",
      type: "sell",
      price: 98,
      quantity: 25,
      status: "成交",
    },
    {
      time: "2023-10-01 10:20",
      stock: "台積電",
      type: "buy",
      price: 610,
      quantity: 5,
      status: "成交",
    },
    // 更多交易紀錄數據...
  ]);

  const [totalAssetValue] = useState(1000000);
  const [cashBalance] = useState(500000);
  const [securitiesValue] = useState(450000);
  const [unrealizedPL] = useState(50000);
  const [dailyPL] = useState(2000);

  const [holdings] = useState([
    // 假設的持股數據
    {
      symbol: "2330",
      name: "台積電",
      quantity: 100,
      averageCost: 580,
      currentValue: 600,
      profitLoss: 2000,
      returnRate: 3.45,
    },
    {
      symbol: "2317",
      name: "鴻海",
      quantity: 200,
      averageCost: 95,
      currentValue: 100,
      profitLoss: 1000,
      returnRate: 5.26,
    },
    // 更多持股數據...
  ]);

  const performance = {
    overallReturnRate: 4.35,
    maxProfit: 2000,
    maxLoss: -500,
  };

  // 搜尋條件
  const [category, setCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // 排序狀態
  const [sortField, setSortField] = useState("symbol");
  const [sortOrder, setSortOrder] = useState("asc");

  // 搜尋結果
  const [searchResults, setSearchResults] = useState(initialstocks);

  const handleSearch = (category, searchTerm) => {
    setCategory(category);
    setSearchTerm(searchTerm);

    let results = initialstocks.filter(
      (stock) =>
        stock.name.includes(searchTerm) || stock.symbol.includes(searchTerm)
    );
    if (category !== "all") {
      results = results.filter((stock) => stock.category === category);
    }

    // Apply sorting based on current sortField and sortOrder
    if (sortOrder === "asc") {
      results.sort((a, b) => (a[sortField] > b[sortField] ? 1 : -1));
    } else {
      results.sort((a, b) => (a[sortField] < b[sortField] ? 1 : -1));
    }

    setSearchResults(results);
  };

  const handleSort = (field, order) => {
    setSortField(field);
    setSortOrder(order);

    let results = [...searchResults];
    if (order === "asc") {
      results.sort((a, b) => (a[field] > b[field] ? 1 : -1));
    } else {
      results.sort((a, b) => (a[field] < b[field] ? 1 : -1));
    }
    setSearchResults(results);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const [selectedStock, setSelectedStock] = useState(
    initialstocks.length > 0 ? initialstocks[0] : null
  );
  const handleSelectedStock = (stock) => {
    setSelectedStock(stock);
  };

  // 實作分頁功能
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(searchResults.length / itemsPerPage);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const paginatedResults = searchResults.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="container-fluid h-100 d-flex flex-column">
      {/* Top Container */}
      <div className="row mb-3">
        <div className="col-md-3 block">
          <SystemTime currentTime={currentTime} />
        </div>
        <MarketDataProvider>
          <div className="col-md-3 block">
            <IndexInfo />
          </div>
          <div className="col-md-3 block">
            <MarketVolume />
          </div>
          <div className="col-md-3 block">
            <SystemInfo title="系統資訊一" message="加權指數提示" />
            {/* <SystemInfo title="系統資訊二" message="加權指數成交量提示" />
            <SystemInfo title="系統資訊三" message="年後交易時間提醒" /> */}
          </div>
        </MarketDataProvider>
      </div>

      {/* Main Container */}
      <div className="row flex-grow-1">
        {/* 股票列表區 */}
        <div className="col-md-4 d-flex flex-column">
          <div className="block">
            <SearchBar
              category={category}
              searchTerm={searchTerm}
              onSearch={handleSearch}
            />
          </div>
          <div className="block flex-grow-1 overflow-auto">
            <table className="table">
              <TableHeader
                sortField={sortField}
                sortOrder={sortOrder}
                onSort={handleSort}
              />
              <TableBody
                stocks={paginatedResults}
                onSelect={handleSelectedStock}
              />
            </table>
          </div>
          <div className="block">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
          <div className="block">
            <StockInfo stock={selectedStock} />
          </div>
        </div>

        {/* 交易操作區 */}
        <div className="col-md-4 d-flex flex-column">
          <div className="block">
            <SelectedStockInfo stock={selectedStock} />
          </div>
          <div className="block-light flex-grow-1">
            <TradeForm stock={selectedStock} />
          </div>
          <div className="block-light">交易預估與確認</div>
          <div className="block">
            <RecentTrades trades={recentTrades} />
          </div>
        </div>

        {/* 資產概況區 */}
        <div className="col-md-4 d-flex flex-column">
          <div className="block">
            <AssetOverview
              totalAssetValue={totalAssetValue}
              cashBalance={cashBalance}
              securitiesValue={securitiesValue}
              unrealizedPL={unrealizedPL}
              dailyPL={dailyPL}
            />
          </div>
          <div className="block flex-grow-1 overflow-auto">
            <HoldingsList holdings={holdings} />
          </div>
          <div className="block">
            <PerformanceAnalysis
              holdings={holdings}
              performance={performance}
            />
          </div>
          <div className="block">
            <InvestmentAdvice />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StockDashboard;
