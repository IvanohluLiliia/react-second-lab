// src/components/CardList/CardList.jsx
import React from 'react';
import Card from '../Card/Card';
import './Main.css';

const Main = ({ cards }) => {
  return (
    <div className="card-list">
      {cards.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          image={card.image}
        />
      ))}
    </div>
  );
};

export default Main;
