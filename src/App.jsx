import "./App.css";
import { useState, useEffect } from "react";
import SystemTime from "./components/SystemTime";
import IndexInfo from "./components/IndexInfo";
import MarketVolume from "./components/MarketVolume";
import SystemInfo from "./components/SystemInfo";
import SearchBar from "./components/SearchBar";
import TableHeader from "./components/TableHeader";

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  // 股票列表狀態
  const stocks = [
    {
      symbol: "1111",
      name: "a",
      price: 100,
      change: 1,
      changePercentage: 1.83,
      volume: 10000,
      buySellPrice: "100/1000",
      category: "tech",
    },
    {
      symbol: "2222",
      name: "b",
      price: 200,
      change: 2,
      changePercentage: 2.96,
      volume: 20000,
      buySellPrice: "200/2000",
      category: "tech",
    },
    {
      symbol: "3333",
      name: "c",
      price: 300,
      change: 3,
      changePercentage: 3.96,
      volume: 30000,
      buySellPrice: "300/3000",
      category: "finance",
    },
    {
      symbol: "4444",
      name: "d",
      price: 400,
      change: 4,
      changePercentage: 4.96,
      volume: 40000,
      buySellPrice: "400/4000",
      category: "finance",
    },
    {
      symbol: "5555",
      name: "e",
      price: 500,
      change: 5,
      changePercentage: 5.96,
      volume: 50000,
      buySellPrice: "500/5000",
      category: "manufacturing",
    },
    {
      symbol: "6666",
      name: "f",
      price: 600,
      change: 6,
      changePercentage: 6.96,
      volume: 60000,
      buySellPrice: "600/6000",
      category: "manufacturing",
    },
  ];

  // 搜尋結果
  const [searchResults, setSearchResults] = useState(stocks);

  const handleSearch = (category, searchTerm, sortOrder) => {
    let results = stocks.filter(
      (stock) =>
        stock.name.includes(searchTerm) || stock.symbol.includes(searchTerm)
    );
    if (category !== "all") {
      results = results.filter((stock) => stock.category === category);
    }
    if (sortOrder === "asc") {
      results.sort((a, b) => (a.symbol > b.symbol ? 1 : -1));
    } else {
      results.sort((a, b) => (a.symbol < b.symbol ? 1 : -1));
    }
    setSearchResults(results);
  };

  const handleSort = (field, order) => {
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
              <SearchBar onSearch={handleSearch} />
            </div>
            <div className="block">
              <table className="table">
                <TableHeader onSort={handleSort}/>
                <tbody>
                  {searchResults.map((stock) => (
                    <tr key={stock.symbol}>
                      <td>{stock.symbol}</td>
                      <td>{stock.name}</td>
                      <td>{stock.price}</td>
                      <td>{stock.change}</td>
                      <td>{stock.changePercentage}%</td>
                      <td>{stock.volume}</td>
                      <td>{stock.buySellPrice}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="block">股票資訊列</div>
            <div className="block">分頁功能列</div>
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
