import Link from 'next/link';

const TopHeader = () => {
  return (
    <div className="bg-black text-gray-300 text-sm flex justify-between items-center px-6 py-2">
      <div>
        <span>Summer Sale for All Swim Suits And Free Express Delivery - OFF 50%</span>
      </div>
      <div className="flex items-center space-x-4">
        <select className="bg-black text-gray-300 border-none outline-none cursor-pointer">
          <option>English</option>
          <option>Spanish</option>
          <option>French</option>
        </select>
        <Link href="/signup" className="hover:text-white">
          Sign Up
        </Link>
        <Link href="/login" className="hover:text-white">
          Login
        </Link>
      </div>
    </div>
  );
};

export default TopHeader;
