// src/components/Categories/index.tsx

import React from 'react';
import CategoryCard from '../CartegoryCard';

const categoriesData = [
  { title: 'Phones', imageUrl: '/Images/phones.jpg' },
  { title: 'Computers', imageUrl: 'Images/laptop' },
  { title: 'Smartwatch', imageUrl: '/images/categories/smartwatch.jpg' },
  { title: 'Camera', imageUrl: '/images/categories/camera.jpg' },
  { title: 'Headphones', imageUrl: '/images/categories/headphones.jpg' },
  { title: 'Gaming', imageUrl: '/images/categories/gaming.jpg' },
];

const Categories = () => {
  return (
    <section className="max-w-7xl mx-auto mt-10 px-4">
      <h2 className="text-2xl font-bold mb-6">Browse By Category</h2>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
        {categoriesData.map(({ title, imageUrl }) => (
          <CategoryCard key={title} title={title} imageUrl={imageUrl} />
        ))}
      </div>
    </section>
  );
};

export default Categories;
