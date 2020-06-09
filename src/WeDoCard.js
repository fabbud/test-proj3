import React from 'react';
import './WeDoCard.css';

function WeDoCard(props) {
  const card = props;
  return (
    <div className={`wedocard ${card.backgroundColor}`}>
      <img className="wedocard-img" src={card.image} alt={card.title} />
      <div className="wedocard-body">
        <h3>{card.title}</h3>
        <p>{card.description}</p>
        <button className={`wedocard-button ${card.backgroundColor}`}>
          {card.button}
        </button>
      </div>
    </div>
  );
}

export default WeDoCard;
