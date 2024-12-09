import React from "react";

const Navbar = () => {
  return (
    <nav>
      {/* Top Purple Section */}
      <div className="w-full bg-purple-600 text-white py-3">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <span>shaheerahmed.0206@gmail.com</span>
          <span>(12345) 67890</span>
          <div className="flex items-center gap-4 text-sm">
          <span>English</span>
          <span>USD</span>
          <span>Login</span>
          <span>Wishlist</span>
          <span>
            <i className="fas fa-shopping-cart"></i>
          </span>
        </div>
        </div>
      </div>

      {/* Lower White Section */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-3xl font-bold text-black-600">Hekto</h1>

          {/* Navigation Links */}
          <ul className="flex gap-8 text-sm text-purple-600">
            <li className="hover:text-pink-500">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-pink-500">
              <a href="#">Pages</a>
            </li>
            <li className="hover:text-pink-500">
              <a href="#">Products</a>
            </li>
            <li className="hover:text-pink-500">
              <a href="#">Blog</a>
            </li>
            <li className="hover:text-pink-500">
              <a href="#">Shop</a>
            </li>
            <li className="hover:text-pink-500">
              <a href="#">Contact</a>
            </li>
          </ul>
          

          {/* Search Bar */}
          <div className="flex items-center border-2 border-pink-500 rounded-md overflow-hidden">
            <input
              type="text"
              className="px-2 py-1 outline-none"
              placeholder="Search..."
            />
            <button className="bg-pink-500 px-4 py-1 text-white">Search</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
