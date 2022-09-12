import React from "react";
import "../styles/Modal.scss";

const Modal = ({ active, setActive, children }) => {
  return (
    <div
      className={active ? "modal modal_active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={
          active ? "modal_content modal_content_active" : "modal_content"
        }
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
