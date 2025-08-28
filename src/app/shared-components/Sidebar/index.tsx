import Link from 'next/link';
const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen p-4 sticky top-0">
      <nav className="flex flex-col space-y-4">
        <h3 className="font-bold text-lg mb-4">Categories</h3>
        <Link href="/category/phones" className="text-gray-700 hover:text-red-600 transition">
          Phones
        </Link>
        <Link href="/category/computers" className="text-gray-700 hover:text-red-600 transition">
          Computers
        </Link>
        <Link href="/category/smartwatches" className="text-gray-700 hover:text-red-600 transition">
          Smartwatches
        </Link>
        <Link href="/category/cameras" className="text-gray-700 hover:text-red-600 transition">
          Cameras
        </Link>
        <Link href="/category/headphones" className="text-gray-700 hover:text-red-600 transition">
          Headphones
        </Link>
        <Link href="/category/gaming" className="text-gray-700 hover:text-red-600 transition">
          Gaming
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
