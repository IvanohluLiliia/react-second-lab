import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: #ffffff38;
  border-radius: 12px;
  overflow: hidden;
  width: 300px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

const CardName = styled.h3`
  font-size: 1.7rem;
  margin-top: 15px;
  color: #000000;
  font-weight: bold;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #000000;
  margin: 10px 0;
  font-style: italic;
`;

const CardButton = styled.button`
  background-color: #3e0a31;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 50px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 15px 0;

  &:hover {
    background-color: #865a7f;
  }

  &:focus {
    outline: none;
  }
`;


const Card = ({ name, description, image }) => {
  const handleClick = () => {
    console.log(name);
    alert(name);
  };

  return (
    <CardContainer>
      <CardImage src={image} alt={name} />
      <CardName>{name}</CardName>
      <CardDescription>{description}</CardDescription>
      <CardButton onClick={handleClick}>Дізнатися більше</CardButton>
    </CardContainer>
  );
};

export default Card;