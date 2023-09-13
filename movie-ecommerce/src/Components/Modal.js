import React from "react";
import "./Modal.css";
import CountdownTimer from "./CountdownTimer";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">{children}</div>
        <CountdownTimer initialTime={60} />
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
