/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function SearchBar({ category, searchTerm, onCategoryChange, onSearchTermChange }) {
  // const [category, setCategory] = useState("all");
  // const [searchTerm, setSearchTerm] = useState("");

  // const handleCategoryChange = (e) => {
  //   setCategory(e.target.value);
  //   onSearch(e.target.value, searchTerm, sortOrder);
  // };

  // const handleSearchChange = (e) => {
  //   setSearchTerm(e.target.value);
  //   onSearch(category, e.target.value, sortOrder);
  // };

  return (
    <div className="search-bar d-flex">
      <select
        className="form-select me-2"
        id="category"
        value={category}
        onChange={onCategoryChange}
      >
        <option value="all">所有分類</option>
        <option value="tech">科技類</option>
        <option value="finance">金融類</option>
        <option value="manufacturing">製造類</option>
      </select>
      <input
        className="form-control me-2"
        id="search"
        type="text"
        placeholder="搜尋股票名稱"
        value={searchTerm}
        onChange={onSearchTermChange}
      />
    </div>
  );
}

export default SearchBar;
