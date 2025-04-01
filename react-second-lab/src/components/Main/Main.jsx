import React from 'react';
import Card from '../Card/Card';
import styled from 'styled-components';

const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  max-width: 1200px;
  padding: 20px;
`;

const Title = styled.h1`
  font-family: "Pacifico", cursive;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  font-style: italic;
`;

const MainWrap = styled.main `

`;

const Main = ({ cards }) => {
  return (
    <MainWrap>
      <Title>Наші користувачі</Title>
      <CardList>
        {cards.map((card) => (
          <Card
            key={card.id}
            name={card.name}
            description={card.description}
            image={card.image}
          />
        ))}
      </CardList>
    </MainWrap>
  );
};

export default Main;