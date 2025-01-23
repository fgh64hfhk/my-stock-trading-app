import './App.css'

function App() {

  return (
    <>
      <div className="container-fluid vh-100 d-flex flex-column">
        {/* Top Container */}
        <div className="row mb-3">
            <div className="col-md-3 block">時間區</div>
            <div className="col-md-3 block">指數區</div>
            <div className="col-md-3 block">交易量區</div>
            <div className="col-md-3 block">系統訊息區</div>
        </div>

        {/* Main Container */}
        <div className="row flex-grow-1">
            {/* 股票列表區 */}
            <div className="col-md-4 d-flex flex-column">
                <div className="block">頂部搜尋列</div>
                <div className="block">表格標題列</div>
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
  )
}

export default App
