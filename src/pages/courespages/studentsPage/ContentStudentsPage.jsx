import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
const ContentStudentsPage = () => {
    const {id} = useParams()
  return (
    <Container>
      <h1>Student Details page</h1>
      <h1>Student name {id}</h1>
    </Container>
  )
}

export default ContentStudentsPage
const Container = styled.div`
  margin-top: 30px;
  margin-left: 20px;
  background-color: white;
  width: 90%;
  height: 70vh;
  margin-right: 70px;
  padding: 50px;
`;
