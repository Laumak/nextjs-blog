'use client';

import React, { useState, MouseEventHandler } from 'react';
import { XCircleIcon } from '@heroicons/react/24/outline';

const Navigation = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(true);

  return (
    <nav role="navigation">
      <div className="h-20 flex items-center justify-between border-b-text-gray-500 border-b-2 px-5">
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
      </div>

      <div
        className={`${
          mobileNavOpen ? '' : 'hidden '
        }h-screen w-screen z-10 absolute bg-white top-0 bottom-0 left-0 right-0 flex justify-center`}
      >
        <ul className="text-4xl self-center" id="navbar-default">
          <li className="p-5">Nav 1</li>
          <li className="p-5">Nav 2</li>
          <li className="p-5">Nav 3</li>
        </ul>

        <XCircleIcon
          className="w-12 h-12 absolute top-2 right-2 text-slate-500"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        />
      </div>
    </nav>
  );
};

export default Navigation;
