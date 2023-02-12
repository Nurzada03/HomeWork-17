import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NotificationsPage = () => {
  const navigate = useNavigate();

  const goMaterialsPage = () => navigate("/course/material", { replace: true });

  return (
    <Container>
      <h1> Notifications Page</h1>
      <StyledButton onClick={goMaterialsPage}>
        Go to Materials page
      </StyledButton>
    </Container>
  );
};

export default NotificationsPage

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
