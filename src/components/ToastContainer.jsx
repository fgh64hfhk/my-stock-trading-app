/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const ToastContainer = ({ position, children }) => {
  return (
    <div
      className={position}
      style={{ zIndex: 1050 }}
    >
      {children}
    </div>
  );
};

export default ToastContainer;
