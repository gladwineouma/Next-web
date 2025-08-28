"use client";
import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard';

type Product = {
  id: number;
  imageUrl: string;
  title: string;
  price: number;
  oldPrice?: number;
  rating: number;
};

const flashSaleProducts: Product[] = [
  {
    id: 1,
    imageUrl: '/products/keyboard.jpg',
    title: 'RGB Wired Keyboard',
    price: 950,
    oldPrice: 1200,
    rating: 4.5,
  },
  {
    id: 2,
    imageUrl: '/products/gamepad.jpg',
    title: 'Havit HG-006 Gamepad',
    price: 120,
    oldPrice: 160,
    rating: 4.7,
  },
  {
    id: 3,
    imageUrl: '/products/monitor.jpg',
    title: 'IPS LCD Gaming Monitor',
    price: 370,
    oldPrice: 400,
    rating: 4.3,
  },
  // Add more products as needed
];

const FlashSale = () => {
  const [countdown, setCountdown] = useState({
    hours: 3,
    minutes: 23,
    seconds: 19,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          clearInterval(timer);
        }
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="max-w-7xl mx-auto my-10 px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-red-600">Flash Sales</h2>
        <div className="flex space-x-4 font-semibold text-gray-700">
          <div>{countdown.hours}h</div>
          <div>{countdown.minutes}m</div>
          <div>{countdown.seconds}s</div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {flashSaleProducts.map(product => (
          <ProductCard
            key={product.id}
            imageUrl={product.imageUrl}
            title={product.title}
            price={product.price}
            oldPrice={product.oldPrice}
            rating={product.rating}
          />
        ))}
      </div>
    </section>
  );
};

export default FlashSale;
