import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

import { VisuallyHidden } from "components/VisuallyHidden";
import "./Modal.scss";

type ModalType = {
  isOpen: boolean;
  closeModal: () => any;
  children: React.ReactChild;
};

export const Modal = ({ isOpen, children, closeModal }: ModalType) => {
  const [el] = useState<HTMLDivElement>(document.createElement("div"));

  useEffect(() => {
    const modalRoot =
      document.getElementById("modal-root") ||
      document.getElementById("root") ||
      document.body;

    modalRoot.appendChild(el);

    return () => {
      modalRoot.removeChild(el);
    };
  }, [el]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return isOpen
    ? createPortal(
        <div className="modal">
          <div className="modal__shadow" onClick={closeModal}></div>
          <div className="modal__body">
            {children}
            <button className="modal__close-button" onClick={closeModal}>
              <VisuallyHidden>Закрыть модальное окно</VisuallyHidden>
            </button>
          </div>
        </div>,
        el
      )
    : null;
};
