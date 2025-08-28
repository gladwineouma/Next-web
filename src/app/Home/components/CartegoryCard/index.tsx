// src/components/CategoryCard/index.tsx

import React from 'react';

type CategoryCardProps = {
  imageUrl: string;
  title: string;
  onClick?: () => void;
};

const CategoryCard: React.FC<CategoryCardProps> = ({ imageUrl, title, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-white"
    >
      <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
      </div>
    </div>
  );
};

export default CategoryCard;
