import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const STUDENTS_NAME = [
  {
    name: "Student Name 1",
    id: 1,
  },
  {
    name: "Student Name 2",
    id: 2,
  },
];

const Students = () => {
  return (
    <>
      <Container>
        {STUDENTS_NAME.map((student) => (
          <StyledLi key={student.id}>
            {student.name}
            <StyledNavLink to={`${student.id}/details`}>Details</StyledNavLink>
          </StyledLi>
        ))}
      </Container>
    </>
  );
};

export default Students;

const Container = styled.ul`
  margin-top: 80px;
  margin-left: 90px;
`;
const StyledLi = styled.li`
  width: 70%;
  padding: 35px;
  border: 5px solid;
  margin-bottom: 30px;
  list-style: none;
  font-size: 30px;
  display: flex;
  justify-content: space-between;
`;

const StyledNavLink = styled(NavLink)`
  padding: 10px 30px;
  background-color: #19ae9f;
  border-radius: 20px;
  text-decoration: none;
  color: black;
`;
