import React from 'react';

function Card({ card }) {
  return (
    <div className=' bg-white rounded-lg' key={card.id}>
      <div className='py-16 px-4 flex flex-col items-center'>
        <img src={card.image} alt='card1.jpg' />
        <h3 className='text-primary-brand-color mt-6 text-lg font-semibold'>
          {card.title}
        </h3>
        <span className='mt-2 text-gray-500'>{card.description}</span>
      </div>
    </div>
  );
}

export default Card;
