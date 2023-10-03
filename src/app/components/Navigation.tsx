'use client';

import React, { useState } from 'react';

const Navigation = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <nav
      className="h-20 flex items-center justify-between border-b-text-gray-500 border-b-2 px-5"
      role="navigation"
    >
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden justify-self-end"
        aria-controls="navbar-default"
        aria-expanded={!!mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>

      {!!mobileNavOpen && (
        <ul className="" id="navbar-default">
          <li className="">Nav 1</li>
          <li className="">Nav 2</li>
          <li className="">Nav 3</li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
