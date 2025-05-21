import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="w-full bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          [Your Salsa Brand Name]
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/about" className="hover:text-gray-300">
              Our Story
            </Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-gray-300">
              Our Salsas
            </Link>
          </li>
          <li>
            <Link href="/shops" className="hover:text-gray-300">
              Find Locally
            </Link>
          </li>
          {/* Add a link for online orders when ready */}
          {/* <li>
            <Link href="/order" className="hover:text-gray-300">
              Order Online
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}
