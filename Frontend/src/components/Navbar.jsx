import React from "react";

export default function Header() {
  return (
    <>
      <header className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-2">
        <h1 className="w-3/12">
          <a href="/" aria-label="Home">
            <h1 className="text-2xl font-bold p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              Shopsy
            </h1>
          </a>
        </h1>

        <nav className="nav font-semibold text-lg">
          <ul className="flex items-center">
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <a href="/" aria-current="page">
                Home
              </a>
            </li>
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <a href="/products">Products</a>
            </li>
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <a href="/collections">About Us</a>
            </li>
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="w-3/12 flex justify-end">
          <input
            type="text"
            placeholder="Search..."
            className="border-2 shadow-md border-brown rounded-full p-2 text-mg outline-none bg-white focus:ring-2 focus:ring-sky-500 shadow-sm transition duration-200"
          ></input>
          <a href="/search" aria-label="Search">
            <button className="border-2 border-gray rounded-full bg-black text-white hover:bg-green-500 hover:shadow-md hover:text-black transition-all duration-200 p-2 flex items-center justify-center">
              <svg
                className="h-8 p-1 duration-200"
                aria-hidden="true"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
                ></path>
              </svg>
            </button>
          </a>
        </div>
      </header>
    </>
  );
}
