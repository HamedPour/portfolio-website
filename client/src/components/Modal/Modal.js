import React from "react";

// styled components
import ModalContainer from "./styledComponent/ModalContainer";

function Modal({ title, details }) {
  return (
    <ModalContainer>
      <h3>{title}</h3>
      <p>{details}</p>
    </ModalContainer>
  );
}

export default Modal;
