import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const Courses = () => {
  return (
    <StyledCourses>
      <StyledHeader>
        <StyledNavLink to="material">Materials</StyledNavLink>
        <StyledNavLink to="students">Students</StyledNavLink>
        <StyledNavLink to="ratings">Ratings</StyledNavLink>
      </StyledHeader>
      <Outlet />
    </StyledCourses>
  );
};

export default Courses;

const StyledCourses = styled.div`
  width: 100%;
`;

const StyledHeader = styled.header`
  width: 100%;
  background-color: #2c88d9;
  height: 150px;
  display: flex;
  gap: 30px;
  align-items: center;
  padding-left: 50px;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  font-size: 45px;
  text-decoration: none;
  font-family: "Courier New", Courier, monospace;
  &.active {
    color: black;
    text-decoration: underline gold;
  }
`;
