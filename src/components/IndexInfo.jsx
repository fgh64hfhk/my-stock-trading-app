/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

function IndexInfo({ indexName, indexValue, changePercentage }) {
    return (
        <div className="index-info">
            <h4>{indexName}</h4>
            <p>指數：{indexValue}</p>
            <p>漲跌幅度：{changePercentage}</p>
        </div>
    )
}

export default IndexInfo;