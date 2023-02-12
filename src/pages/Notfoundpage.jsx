import React from "react";

import styled from "styled-components";
const Notfoundpage = () => {
  return <StyledText>Welcome in My Course</StyledText>;
};

export default Notfoundpage;

const StyledText = styled.h1`
  margin-top: 30px;
  margin-left: 20px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 70vh;
  margin-right: 70px;
  font-size: 60px;
  padding: 50px;
  text-shadow: 1px 1px 1px red, 2px 2px 1px red;
  color: #b7225b;
  -webkit-box-shadow: 7px -12px 8px 7px rgba(34, 60, 80, 0.26);
  -moz-box-shadow: 7px -12px 8px 7px rgba(34, 60, 80, 0.26);
  box-shadow: 7px -12px 8px 7px rgba(34, 60, 80, 0.26);
`;
