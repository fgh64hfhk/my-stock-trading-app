/* eslint-disable no-unused-vars */
import React from "react";
import ReactDom from "react-dom";

function Modal({ title, children, onConfirm }) {
  return ReactDom.createPortal(
    // Modal
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              {title}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={onConfirm}
              data-bs-dismiss="modal"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body // 將模態框渲染到 body
  );
}

export default Modal;
