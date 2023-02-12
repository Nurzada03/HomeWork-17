import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Anouncements = () => {
  const navigate = useNavigate()
  const goStudentsalsPage = () => navigate("/course/students", { replace: true });

  return (
    <Container>
      <h1> Anouncements Page</h1>
      <StyledButton onClick={goStudentsalsPage}>
        Go to Students page
      </StyledButton>
    </Container>
  );
};

export default Anouncements;

const Container = styled.div`
  margin-top: 30px;
  margin-left: 20px;
  background-color: white;
  width: 90%;
  height: 70vh;
  margin-right: 70px;
  padding: 50px;
`;

const StyledButton = styled.button`
  width: 280px;
  color: white;
  background-color: #19ae9f;
  border-radius: 22px;
  border: 0;
  padding: 15px;
  font-size: 20px;
  margin-top: 40px;
`;
