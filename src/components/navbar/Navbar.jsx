import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const mobileToggle = () => {
    setIsOpen(!isOpen);
    console.log("working");
  };
  return (
    <div className="py-9 lg:py-12">
      <nav className="fixed top-0 z-10 lg:fixed py-2 lg:py-4 lg:top-0 w-full bg-white border-gray-200 dark:bg-gray-900">
<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <Link
    to="/"
    className="font-bold flex items-center space-x-1  lg:space-x-3 rtl:space-x-reverse"
  >
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDoj97-5su6HrT1xzKjYae7pWq4_-zpqelg&usqp=CAU"
      className="h-8 lg:h-14"
      alt="Logo"
    />
    <span className=" text-xl lg:text-3xl whitespace-nowrap dark:text-white">
      RKD
    </span>
  </Link>
  <button
    onClick={mobileToggle}
    data-collapse-toggle="navbar-default"
    type="button"
    class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    aria-controls="navbar-default"
    aria-expanded="false"
  >
    <span class="sr-only">Open main menu</span>
    <svg
      class="w-5 h-5"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 17 14"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M1 1h15M1 7h15M1 13h15"
      />
    </svg>
  </button>

  <div
    className={isOpen ? "md:block text-2xl w-full  md:w-auto" :  "hidden md:block text-2xl w-full  md:w-auto"}
    id="navbar-default"
  >
    <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <Link
          to="/"
          className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:active:bg-indigo-700 md:active:text-white md:active:px-2"
          aria-current="page"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:active:bg-indigo-700 md:active:text-white md:active:px-2"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="/project"
          className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:active:bg-indigo-700 md:active:text-white md:active:px-2"
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          to="/projects"
          className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:active:bg-indigo-700 md:active:text-white md:active:px-2"
          aria-active="page"
        >
          UI Designs
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
          className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:active:bg-indigo-700 md:active:text-white md:active:px-2"
          aria-active="page"
        >
          Contact
        </Link>
      </li>
      
      <li>
        {/* <Link
          to="/projects-details"
          className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:active:bg-indigo-700 md:active:text-white md:active:px-2"
          aria-active="page"
        >
          Projects-details
        </Link> */}
      </li>
    </ul>
  </div>
</div>
</nav>
    </div>
  );
};

export default Navbar;
{
  /* <div
className={isOpen ? "md:block text-2xl w-full  md:w-auto" :  "hidden md:block text-2xl w-full  md:w-auto"}
id="navbar-default"
> */
}

//import { Navbar } from "flowbite-react";

