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
    const timeout = setTimeout(() => {
      const currentToastRef = toastRef.current;
      if (!currentToastRef) return;

      const bsToast = new BSToast(currentToastRef, {
        autohide,
        delay,
        animation,
      });

      if (!currentToastRef.classList.contains("toast")) {
        currentToastRef.classList.add("toast");
      }

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      );
      if (prefersReducedMotion.matches) {
        bsToast._config.animation = false;
      }

      bsToast.show();

      const handleHidden = () => {
        if (onClose) onClose();
      };
      currentToastRef.addEventListener("hidden.bs.toast", handleHidden);

      return () => {
        currentToastRef?.removeEventListener("hidden.bs.toast", handleHidden);
        bsToast.dispose();
      };
    }, 0); // 讓 React 先渲染 DOM

    return () => clearTimeout(timeout);
  }, [autohide, delay, animation, onClose]);

  return (
    <div ref={toastRef} className="toast" {...props}>
      {children}
    </div>
  );
};

export default Toast;
