/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

function MarketVolume({ volume, changePercentage }) {
    return (
        <div className="market-volume">
            <h4>交易量</h4>
            <p>成交量：{volume}</p>
            <p>漲跌幅度：{changePercentage}</p>
        </div>
    )
}

export default MarketVolume;