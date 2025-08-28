// src/components/NewArrival/index.tsx

import React from 'react';
import ProductCard from '../ProductCard';

const newArrivalProducts = [
  {
    id: 1,
    imageUrl: '/products/ps5.jpg',
    title: 'PlayStation 5',
    price: 500,
    rating: 5,
  },
  {
    id: 2,
    imageUrl: '/products/speaker.jpg',
    title: 'Bluetooth Speaker',
    price: 99,
    rating: 4,
  },
  {
    id: 3,
    imageUrl: '/products/perfume.jpg',
    title: 'Luxury Perfume',
    price: 150,
    rating: 4,
  },
  {
    id: 4,
    imageUrl: '/products/hat.jpg',
    title: "Women's Stylish Hat",
    price: 70,
    rating: 3,
  },
];

const NewArrival = () => {
  return (
    <section className="max-w-7xl mx-auto mt-16 px-4">
      <h2 className="text-2xl font-bold mb-6">New Arrival</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {newArrivalProducts.map(product => (
          <ProductCard
            key={product.id}
            imageUrl={product.imageUrl}
            title={product.title}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </div>
    </section>
  );
};

export default NewArrival;
