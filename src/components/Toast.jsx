/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { Toast as BSToast } from "bootstrap";

const Toast = ({
  children,
  autohide = false,
  delay = 5000,
  animation = true,
  onClose,
  ...props
}) => {
  const toastRef = useRef(null);

  useEffect(() => {
    // 初始化 Toast
    const currentToastRef = toastRef.current;
    const bsToast = new BSToast(currentToastRef, {
      autohide,
      delay,
      animation,
    });

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    if (prefersReducedMotion.matches) {
      bsToast._config.animation = false;
    }
    bsToast.show();

    // Handle onClose event
    currentToastRef.addEventListener('hidden.bs.toast', onClose);

    // 移除 Toast 時清除 bsToast 實例
    return () => {
      bsToast.dispose();
      currentToastRef.removeEventListener('hidden.bs.toast', onClose);
    };
  }, [autohide, delay, animation, onClose]);

  return (
    <div
      ref={toastRef}
      className="toast align-items-center"
      role="alert"
      aria-live="polite"
      aria-atomic="true"
      {...props}
    >
      <div className="toast-body">{children}</div>
    </div>
  );
};

export default Toast;
