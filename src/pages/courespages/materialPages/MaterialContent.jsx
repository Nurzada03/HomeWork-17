import React from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import Modal from "../../../components/UI/Modal";

const MaterialContent = ({ MATERIALS }) => {

  const [searchParams, setSearchParams] = useSearchParams();

  const showModalHandler = () => {
    searchParams.set("modal", "addNewMaterial");
    setSearchParams(searchParams);
  };

  const closeModalhandler = () => {
    searchParams.delete("modal");
    setSearchParams(searchParams);
  };

  return (
    <Container>
      {searchParams.has("modal") ? (
        <ModalContainer>
          <Modal onClick={closeModalhandler} />
        </ModalContainer>
      ) : null}
      <ContainerButton>
        <StyledButton onClick={showModalHandler}>Add new material</StyledButton>
      </ContainerButton>
      <ul>
        {MATERIALS.map((material) => (
         
            <StyledLi key={material.id}>
              {material.title}

              <StyledNavLink to={`${material.id}/details`}>
                Details
              </StyledNavLink>
            </StyledLi>
          
        ))}
      </ul>
    </Container>
  );
};

export default MaterialContent;

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 15;
  left: 300px;
`;

const Container = styled.div`
  margin: 50px;
  margin-left: 90px;
`;

const StyledButton = styled.button`
  width: 280px;
  color: white;
  background-color: orange;
  border-radius: 22px;
  border: 0;
  padding: 15px;
  font-size: 20px;
  cursor: pointer;
`;
const StyledLi = styled.li`
  width: 90%;
  padding: 30px;
  background-color: white;
  list-style: none;
  margin-bottom: 20px;
  font-size: 30px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const StyledNavLink = styled(NavLink)`
  padding: 10px 30px;
  background-color: #19ae9f;
  border-radius: 20px;
  text-decoration: none;
  color: black;
`;

const ContainerButton = styled.div`
  display: flex;
  justify-content: end;
  margin-right: 80px;
`;
