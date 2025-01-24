/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const [inputPage, setInputPage] = useState(currentPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handleInputChange = (e) => {
    setInputPage(e.target.value);
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    const page = Math.min(Math.max(parseInt(inputPage, 10), 1), totalPages);
    onPageChange(page);
  };

  return (
    <div className="pagination-container">
      <nav className="Page navigation">
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <a
              className="page-link"
              onClick={handlePreviousPage}
              aria-label="Previous"
            >
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          {Array.from({ length: totalPages }).map((_, index) => (
            <li
              key={index}
              className={`page-item ${
                currentPage === index + 1 ? "acitive" : ""
              }`}
            >
              <a className="page-link" onClick={() => onPageChange(index + 1)}>
                {index + 1}
              </a>
            </li>
          ))}
          <li
            className={`page-item ${
              currentPage === totalPages ? "disabled" : ""
            }`}
          >
            <a className="page-link" onClick={handleNextPage} aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
      <form className="input-group mb-3" onSubmit={handleInputSubmit}>
        <input
          type="number"
          className="form-control"
          placeholder="跳轉頁碼"
          aria-label="PageNumber"
          value={inputPage}
          onChange={handleInputChange}
          min={1}
          max={totalPages}
        />
        <button className="btn btn-primary" type="submit">
          跳轉
        </button>
      </form>
    </div>
  );
}

export default Pagination;
