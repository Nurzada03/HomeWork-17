import React from "react";
import {  NavLink, Outlet } from "react-router-dom";

import styled from "styled-components";
const MainLayout = () => {
  return (
    <StyledMainLayout>
      <NavBar>
        <StyledLogo>LOGO</StyledLogo>
        <Container>
          <StyledNavLink to="/course">Courses </StyledNavLink>
          <StyledNavLink to="/anouncements">Anouncements</StyledNavLink>
          <StyledNavLink to="/notifications">Notifications</StyledNavLink>
          <StyledNavLink to="/schedule">Schedule</StyledNavLink>
        </Container>
      </NavBar>

      <Outlet />
    </StyledMainLayout>
  );
};

export default MainLayout;

const NavBar = styled.nav`
  background-color: #b9b1b1;
  width: 20%;
  height: 100vh;
`;

const StyledMainLayout = styled.div`
  display: flex;
`;

const StyledLogo = styled.h1`
  color: #7526b2;
  margin: 65px;
  font-size: 60px;
`;

const Container = styled.div`
  width: 100%;
  height: 300px;
  background-color: white;
  margin-top: 150px;
`;

const StyledNavLink = styled(NavLink)`
  color: #5151c2;
  font-size: 40px;
  font-family: Georgia, "Times New Roman", Times, serif;
  text-decoration: none;
  display: flex;
  flex-wrap: wrap;
  padding: 10px 50px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  &.active {
    color: black;
    background-color: #986698;
  }
`;
