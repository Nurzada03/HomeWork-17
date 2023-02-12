import React from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import styled from "styled-components";
const ContentDetails = () => {
  const { id } = useParams();
  return (
    <>
      <Container>
        <h1>Material Details page:</h1>
        <h1>Material{id}</h1>
      </Container>

      <Content>
        <Header>
          <StyledNavLink to="submitted">Submitted</StyledNavLink>
          <StyledNavLink to="waiting">Waiting</StyledNavLink>
          <StyledNavLink to="late">Late</StyledNavLink>
        </Header>
        <StyledOutlet>
          <Outlet />
        </StyledOutlet>
      </Content>
    </>
  );
};

export default ContentDetails;

const Container = styled.div`
  width: 90%;
  margin: 50px 50px 0 50px;
  background-color: white;
  height: 300px;
  padding: 40px;
`;

const Content = styled.div`
  width: 90%;
  margin: 0px 50px 0 50px;
  background-color: #d0efec;
  height: 300px;
`;

const Header = styled.header`
  display: flex;
  gap: 50px;
  align-items: center;
  padding-left: 40px;
  width: 100%;
  height: 90px;
  background-color: #19ae9f;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  font-size: 35px;
  text-decoration: none;
  font-family: "Courier New", Courier, monospace;
  &.active {
    color: black;
    text-decoration: underline gold;
    font-weight: bold;
  }
`;

const StyledOutlet = styled.div`
  padding: 20px 0 0 80px;
`;
