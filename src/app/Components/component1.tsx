"use client"
import Link from "next/link";

export default function Header() {
  return (
    <div>

<header className="bg-purple-600 text-white">
  {/* Top Bar */}
  <div className="flex flex-wrap justify-between items-center px-4 py-2 text-sm">
    <div className="flex items-center space-x-4">
      <span>📧 mhhasanul@gmail.com</span>
      <span>📞 (123) 456-7890</span>
      <Link href="/hdemo"><button className="hover:text-gray-200">Demo</button></Link>
    </div>
    <div className="flex items-center space-x-4 mt-2 sm:mt-0">
      <div>Currency:USD</div>
      <div>Pakistan</div>
      <Link href="/cart"><button className="hover:text-gray-200">Cart</button></Link>
      <Link href="/login"><button className="hover:text-gray-200">Login</button></Link>
      <button className="hover:text-gray-200">Wishlist</button>
     
    </div>
  </div>

  {/* Navbar */}
  <div className="bg-white shadow">
    <div className="container mx-auto flex flex-wrap justify-between items-center px-4 py-3">
      {/* Logo */}
      <Link href="/">
        <div className="text-2xl font-bold text-gray-950">Hekto</div>
      </Link>

      {/* small menu for Mobile */}
      <button 
        id="menu-toggle"
        className="lg:hidden block text-gray-800 focus:outline-none "
        onClick={() => document.getElementById('menu')?.classList.toggle('hidden')}
      >
        ☰
      </button>

      {/* Navbar Links */}
      <nav
        id="menu"
        className="hidden lg:flex flex-wrap items-center space-x-6 w-full lg:w-auto mt-3 lg:mt-0"
      >
        <Link href="/">
          <div className="text-sm text-gray-700 hover:text-purple-600">Home</div>
        </Link>
        <Link href="/products">
          <div className="text-sm text-gray-700 hover:text-purple-600">Products</div>
        </Link>
        <Link href="/blog">
          <div className="text-sm text-gray-700 hover:text-purple-600">Blog</div>
        </Link>
        <Link href="/shop">
          <div className="text-sm text-gray-700 hover:text-purple-600">Shop</div>
        </Link>
        <Link href="/contact">
          <div className="text-sm text-gray-700 hover:text-purple-600">Contact</div>
        </Link>

        <div className="relative group">
          <button className="text-sm text-gray-700 hover:text-purple-600">
            Pages
          </button>
          {/* Dropdown */}
          <div className="absolute left-0 hidden group-hover:block bg-white border mt-2 shadow-lg">
            <Link href="/about">
              <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                About Us
              </div>
            </Link>
            <Link href="/faq">
              <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                FAQ
              </div>
            </Link>
          </div>
        </div>
   
      </nav>

      {/* Search Bar */}
      <div className="flex items-center space-x-3 mt-3 lg:mt-0 w-full lg:w-auto">
        <input
          type="text"
          placeholder="Search"
          className="flex-grow lg:flex-grow-0 px-3 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-fuchsia-600"
        />
        <button className="px-4 py-1 bg-fuchsia-500 text-white rounded hover:bg-fuchsia-600">
          🔍
        </button>
      </div>
    </div>
  </div>
</header>
</div>
)}