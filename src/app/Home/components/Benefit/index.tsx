import { FiTruck, FiHeadphones, FiRefreshCw  } from 'react-icons/fi';

const benefits = [
  {
    icon: <FiTruck size={36} className="text-red-600" />,
    title: 'Free and Fast Delivery',
    description: 'Free delivery for all orders over $140',
  },
  {
    icon: <FiHeadphones size={36} className="text-red-600" />,
    title: '24/7 Customer Service',
    description: 'Friendly 24/7 customer support',
  },
  {
    icon: <FiRefreshCw  size={36} className="text-red-600" />,
    title: 'Money Back Guarantee',
    description: 'We return money within 30 days',
  },
];

const Benefit = () => {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4 flex justify-around bg-gray-50 rounded-md shadow-sm space-x-8">
      {benefits.map(({ icon, title, description }, index) => (
        <div key={index} className="flex flex-col items-center text-center max-w-xs">
          <div className="mb-3">{icon}</div>
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      ))}
    </section>
  );
};

export default Benefit;
