import React, { useState } from 'react';
import Link from 'next/link';
import Navbrand from './Navbrand';

const Searchbar = () => {
  return (
    <>
      <div class="p-8 ">
        <div class="bg-white flex items-center shadow-xl w-96">
          <input
            class="rounded-l-full w-full px-6 text-gray-700 leading-tight focus:outline-none"
            id="search"
            type="text"
            placeholder="Search..."
          />

          <div class="">
            <button class="bg-purple-500 text-white hover:bg-purple-400 focus:outline-none w-auto px-2 h-12 flex items-center justify-center">
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const MobileNav = () => {
  return (
    <>
      <div className="sm:hidden flex flex-col pt-24 pb-10 items-center text-gray-600 bg-white shadow-md">
        <Link href="/">
          <a className="font-light uppercase mr-8  mb-4 hover:text-blue-500 text-base hover:font-bold">
            Home
          </a>
        </Link>
        <Link href="#">
          <a
            href="/"
            className="font-light uppercase mr-8  mb-4 text-base hover:text-blue-500 hover:font-bold"
          >
            guide
          </a>
        </Link>
        <Link href="#">
          <a
            href="/"
            className="font-light uppercase mr-8  mb-4 text-base hover:text-blue-500 hover:font-bold"
          >
            api reference
          </a>
        </Link>
        {/* <div className="dropdown mr-8 flex relative">
          <Link href="/">
            <a className="flex items-center font-light  text-base hover:text-blue-500 hover:font-bold">
              <span>SDKs & Plugins</span>
              <svg
                width="14"
                height="11"
                viewBox="0 0 14 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 11L0.937822 0.5L13.0622 0.5L7 11Z" fill="#b7b7b7" />
              </svg>
            </a>
          </Link>
          <ul className="dropdown-menu absolute hidden text-gray-700 pt-6">
            <li className="">
              <a
                className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                href="#"
              >
                One
              </a>
            </li>
            <li className="">
              <a
                className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                href="#"
              >
                Two
              </a>
            </li>
          </ul>
        </div> */}
        <Link href="/">
          <a className="font-light  mr-8 text-base  mb-4 hover:text-blue-500 hover:font-bold">
            SDKs & Plugins ↓
          </a>
        </Link>
        <Link href="/">
          <a className="font-light uppercase mr-8 text-base  mb-4 hover:text-blue-500 hover:font-bold">
            faqs
          </a>
        </Link>
        <Link href="/">
          <a className="font-light uppercase mr-8 text-base mb-4  hover:text-blue-500 hover:font-bold">
            contact us
          </a>
        </Link>
      </div>
    </>
  );
};

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };
  return (
    <>
      <nav className="flex fixed justify-between p-5 w-screen bg-white border-b text-black z-50">
        <div className="">
          <Navbrand />
        </div>

        <div className="hidden sm:flex text-gray-600">
          <Link href="/">
            <a className="font-light uppercase mr-8 hover:text-blue-500 text-base hover:font-bold">
              Home
            </a>
          </Link>
          <Link href="#">
            <a
              href="/"
              className="font-light uppercase mr-8 text-base hover:text-blue-500 hover:font-bold"
            >
              guide
            </a>
          </Link>
          <Link href="#">
            <a
              href="/"
              className="font-light uppercase mr-8 text-base hover:text-blue-500 hover:font-bold"
            >
              api reference
            </a>
          </Link>
          {/* <div className="dropdown mr-8 flex relative">
          <Link href="/">
            <a className="flex items-center font-light  text-base hover:text-blue-500 hover:font-bold">
              <span>SDKs & Plugins</span>
              <svg
                width="14"
                height="11"
                viewBox="0 0 14 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 11L0.937822 0.5L13.0622 0.5L7 11Z" fill="#b7b7b7" />
              </svg>
            </a>
          </Link>
          <ul className="dropdown-menu absolute hidden text-gray-700 pt-6">
            <li className="">
              <a
                className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                href="#"
              >
                One
              </a>
            </li>
            <li className="">
              <a
                className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                href="#"
              >
                Two
              </a>
            </li>
          </ul>
        </div> */}
          <Link href="/">
            <a className="font-light  mr-8 text-base hover:text-blue-500 hover:font-bold">
              SDKs & Plugins ↓
            </a>
          </Link>
          <Link href="/">
            <a className="font-light uppercase mr-8 text-base hover:text-blue-500 hover:font-bold">
              faqs
            </a>
          </Link>
          <Link href="/">
            <a className="font-light uppercase mr-8 text-base hover:text-blue-500 hover:font-bold">
              contact us
            </a>
          </Link>
        </div>
        <div className="sm:hidden flex" onClick={handleShow}>
          <button
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              class="hidden h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </nav>
      {show && <MobileNav show={show} />}
    </>
  );
};

export default Navbar;
