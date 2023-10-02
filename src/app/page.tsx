"use client";

import React, { useState } from "react";

export default function Home() {
  const [mobileNavOpen, setMobileNavOpen] = useState(true);

  return (
    <div>
      <nav className="h-20 flex items-center justify-between border-b-white border-b px-5">
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 justify-self-end"
          aria-controls="navbar-default"
          aria-expanded="false"
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
          <div id="navbar-default" className="">
            <ul className="">
              <li className="">Nav 1</li>
              <li className="">Nav 2</li>
              <li className="">Nav 3</li>
            </ul>
          </div>
        )}
      </nav>

      <main>
        <div className="flex items-center justify-center h-screen">
          <h1 className="text-6xl">Hello world!</h1>
        </div>
      </main>
    </div>
  );
}
