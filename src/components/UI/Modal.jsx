import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const Modal = ({ onClick }) => {
  return (
    <>
      {createPortal(
        <div>
          <Card>
            <h1>I did Modal Page</h1>
            <StyledButton onClick={onClick}>Close Modal</StyledButton>
          </Card>
        </div>,
        document.getElementById("modal")
      )}
    </>
  );
};

export default Modal;

const Card = styled.div`
  position: fixed;
  top: 152px;
  left: 390px;
  height: 550px;
  width: 60%;
  background-color: #cbaddc;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 5px 10px;
  animation: slide-down 300ms ease-out forwards;
  width: 40rem;
  left: calc(50% - 20rem);
  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const StyledButton = styled.button`
  padding: 20px 40px;
  background-color: #19ae9f;
  border-radius: 20px;
  text-decoration: none;
  color: black;
  border: 0;
  margin-top: 170px;
  font-size: 25px;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 5px 10px;
    background-color: green;
  }
`;
