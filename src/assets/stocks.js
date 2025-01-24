function generateUniqueStocks(count) {
  const stocks = [];
  const seenKeys = new Set();

  while (stocks.length < count) {
    const symbol = Math.floor(1000 + Math.random() * 9000).toString(); // 生成隨機 symbol

    let name = "";
    for (let i = 0; i < 2; i++) {
      let char = String.fromCharCode(97 + Math.floor(Math.random() * 26)); // 生成隨機字母名稱

      name += char;
    }

    const key = `${symbol}-${name}`;
    if (!seenKeys.has(key)) {
      stocks.push({
        symbol: symbol.toString(),
        name: name,
        price: Math.floor(Math.random() * 1000) + 1, // 隨機價格
        change: (Math.random() * 10).toFixed(2), // 隨機變動
        changePercentage: (Math.random() * 10).toFixed(2), // 隨機變動百分比
        volume: Math.floor(Math.random() * 100000), // 隨機成交量
        buySellPrice: `${Math.floor(Math.random() * 100)}/${Math.floor(
          Math.random() * 100
        )}`, // 隨機買賣價
        category: ["tech", "finance", "manufacturing"][
          Math.floor(Math.random() * 3)
        ], // 隨機分類
      });
      seenKeys.add(key);
    }
  }

  stocks.sort((a, b) => (a.symbol > b.symbol ? 1 : -1));

  return stocks;
}

// 生成 30 筆資料
// const randomStocks = generateUniqueStocks(5);
// console.log(randomStocks);

export default generateUniqueStocks;
