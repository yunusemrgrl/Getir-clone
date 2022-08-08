import React from 'react';

function Menu({ title, items }) {
  return (
    <section className='flex flex-col gap-y-4'>
      <h6 className='text-lg text-primary-brand-color inline'>{title}</h6>
      <nav>
        <ul className='grid gap-y-2'>
          {items.map((item, index) => (
            <li key={index} className='group'>
              <a
                href='/#'
                onClick={(e) => e.preventDefault()}
                className='text-sm text-gray-600 group-hover:text-primary-brand-color'
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}

export default Menu;
