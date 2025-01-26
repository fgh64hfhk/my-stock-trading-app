/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function Backdrop({ show, onClick }) {
  if (!show) {
    return null;
  }

  return <div className="modal-backdrop show" onClick={onClick}></div>;
}

export default Backdrop;
