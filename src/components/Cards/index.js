import { useState, useEffect } from 'react';
import CardData from '../data/Card.json';
import Card from '../ui/Card';

function Cards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(CardData);
  }, [cards]);
  return (
    <div className='bg-gray-50'>
      <div className='py-8 pb-16'>
        <div className='container mx-auto grid grid-cols-3 gap-x-4 text-center '>
          {cards.map((card, index) => (
            <Card card={card} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards;
