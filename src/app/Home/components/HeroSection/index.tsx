// src/components/HeroSection/index.tsx

import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="max-w-7xl mx-auto mt-10 px-4 flex flex-col md:flex-row items-center gap-6">
      <div className="flex-1 relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
        <Image
          src="/hero/playstation-sale.jpg" // Replace with your hero image path
          alt="PlayStation 5 Sale"
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-lg"
        />
      </div>

      <div className="flex-1 space-y-6">
        <h1 className="text-4xl font-extrabold text-gray-900">
          PlayStation 5 <br /> Amazing Price Discount 2023
        </h1>

        <p className="text-gray-700 max-w-md">
          A curated gaming console that delivers a next-gen gaming experience.
          Shop now and get exclusive offers before stocks run out.
        </p>

        <button className="bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
