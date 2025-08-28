// src/components/ProductCard/index.tsx

import Image from 'next/image';

type ProductCardProps = {
  imageUrl: string;
  title: string;
  price: number;
  oldPrice?: number;
  rating: number; // e.g., 4 (out of 5)
};

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  title,
  price,
  oldPrice,
  rating,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-4 flex flex-col">
      <div className="relative w-full h-48 mb-4">
        <Image src={imageUrl} alt={title} fill style={{ objectFit: 'cover' }} className="rounded" />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">{title}</h3>

      <div className="flex items-center space-x-2 mb-2">
        <span className="text-red-600 font-bold">${price.toFixed(2)}</span>
        {oldPrice && (
          <span className="line-through text-gray-400 text-sm">${oldPrice.toFixed(2)}</span>
        )}
      </div>

      <div className="flex text-yellow-400 mb-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${index < rating ? 'fill-current' : 'fill-gray-300'}`}
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.561-.955L10 0l2.949 5.955 6.561.955-4.755 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>

      <button className="mt-auto bg-red-600 text-white py-2 rounded hover:bg-red-700 transition">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
