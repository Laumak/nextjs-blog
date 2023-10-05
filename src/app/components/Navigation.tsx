'use client';

import React, { useState } from 'react';
import { Bars3Icon, XCircleIcon } from '@heroicons/react/24/outline';

const Navigation = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <nav role="navigation" className="absolute top-0 left-0 right-0">
      <div className="h-20 flex items-center justify-end border-b-text-gray-500 border-b-2 px-5">
        {mobileNavOpen ? (
          <XCircleIcon
            className="w-12 h-12 text-gray-500 md:hidden z-20"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
          />
        ) : (
          <Bars3Icon
            className="w-10 h-10 text-gray-500 md:hidden"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
          />
        )}
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
      </div>
    </nav>
  );
};

export default Navigation;
