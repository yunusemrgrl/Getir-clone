import React from 'react';

function Category({ category: { title, id, image } }) {
  return (
    <a
      href='/#'
      onClick={(e) => e.preventDefault()}
      className='flex flex-col items-center text-center justify-center transition hover:bg-purple-50 cursor-pointer group p-2 gap-y-2'
    >
      <img
        src={image}
        alt={title}
        className='items-center w-12 h-12 rounded border border-gray-200'
      />
      <span className='font-semibold whitespace-nowrap  text-gray-500 group-hover:text-primary-brand-color tracking-tighter '>
        {title}
      </span>
    </a>
  );
}

export default Category;
