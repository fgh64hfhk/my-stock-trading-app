import "./App.css";
import { useState, useEffect } from "react";
import SystemTime from "./components/SystemTime";
import IndexInfo from "./components/IndexInfo";
import MarketVolume from "./components/MarketVolume";
import SystemInfo from "./components/SystemInfo";
import SearchBar from "./components/SearchBar";
import TableHeader from "./components/TableHeader";
import TableBody from "./components/TableBody";
import StockInfo from "./components/StockInfo";
import Pagination from "./components/Pagination";

import generateUniqueStocks from "./assets/stocks";

function App() {
  // 系統時間狀態
  const [currentTime, setCurrentTime] = useState(new Date());

  // 股票列表狀態
  const [initialstocks] = useState(generateUniqueStocks(30));

  // 搜尋條件
  // const [category, setCategory] = useState("all");
  // const [searchTerm, setSearchTerm] = useState("TSMC");
  // const [sortOrder, setSortOrder] = useState("asc");

  // const handleCategoryChange = (e) => {
  //   setCategory(e.target.value);
  //   handleSearch(e.target.value, searchTerm);
  // };
  // const handleSearchTermChange = (e) => {
  //   setSearchTerm(e.target.value);
  //   handleSearch(category, e.target.value);
  // };

  // 排序狀態
  const [sortField, setSortField] = useState('symbol');
  const [sortOrder, setSortOrder] = useState("asc");

  // 搜尋結果
  const [searchResults, setSearchResults] = useState(initialstocks);

  const handleSearch = (category, searchTerm) => {
    let results = initialstocks.filter(
      (stock) =>
        stock.name.includes(searchTerm) || stock.symbol.includes(searchTerm)
    );
    if (category !== "all") {
      results = results.filter((stock) => stock.category === category);
    }

    results.sort((a, b) => (a.symbol > b.symbol ? 1 : -1));

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

  const [selectedstock, setSelectedStock] = useState(
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
    <>
      <div className="container-fluid vh-100 d-flex flex-column">
        {/* Top Container */}
        <div className="row mb-3">
          <div className="col-md-3 block">
            <SystemTime currentTime={currentTime} />
          </div>
          <div className="col-md-3 block">
            <IndexInfo
              indexName="台灣加權指數"
              indexValue={17345.67}
              changePercentage={-0.45}
            />
          </div>
          <div className="col-md-3 block">
            <MarketVolume volume={123456789} changePercentage={+1234567} />
          </div>
          <div className="col-md-3 block">
            <SystemInfo title="系統資訊一" message="加權成交量新高" />
            <SystemInfo title="系統資訊二" message="提醒新年交易時間" />
          </div>
        </div>

        {/* Main Container */}
        <div className="row flex-grow-1">
          {/* 股票列表區 */}
          <div className="col-md-4 d-flex flex-column">
            <div className="block">
              <SearchBar
                onSearch={handleSearch}
              />
            </div>
            <div className="block">
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
              <StockInfo stock={selectedstock} />
            </div>
          </div>

          {/* 交易操作區 */}
          <div className="col-md-4 d-flex flex-column">
            <div className="block">所選股票資訊</div>
            <div className="block-light">交易類型與表單</div>
            <div className="block-light">交易預估與確認</div>
            <div className="block">近期交易紀錄</div>
          </div>

          {/* 資產概況區 */}
          <div className="col-md-4 d-flex flex-column">
            <div className="block">資產總覽區</div>
            <div className="block">持股部位列表</div>
            <div className="block">績效分析區</div>
            <div className="block">操作建議區</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
