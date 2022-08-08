import React, { useEffect, useState } from 'react';
import categoriesData from '../data/Categories.json';
import Category from '../ui/Category';

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(categoriesData);
  }, []);
  return (
    <div className='py-3 '>
      <div className='container mx-auto'>
        <h3 className='text-sm mb-3 font-semibold text-gray-700'>
          {' '}
          Kategoriler
        </h3>
        <div className='grid grid-cols-10 gap-4'>
          {categories.map((category, index) => (
            <Category key={index} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
