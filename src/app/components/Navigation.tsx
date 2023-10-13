'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XCircleIcon } from '@heroicons/react/24/outline';

// Hide body overflow when modal is open. This way the page can't be scrolled
// while mobile navigation is open.
const toggleBodyOverflow = (nextVisibilityState: Boolean) => {
  const bodyClassList = document.getElementsByTagName('body')[0].classList;

  if (nextVisibilityState === true) {
    bodyClassList.add('overflow-hidden');
  } else {
    bodyClassList.remove('overflow-hidden');
  }
};

const Navigation = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState<Boolean>(false);

  const handleOnMobileNavClick = (nextVisibilityState: Boolean) => {
    setMobileNavOpen(nextVisibilityState);

    toggleBodyOverflow(nextVisibilityState);
  };

  return (
    <nav
      role="navigation"
      className="mx-4 h-12 flex justify-between border-b-black border-b items-center"
    >
      <Link href="/">
        <h1 className="text-3xl">Blog</h1>
      </Link>

      <button
        aria-controls="main-navigation"
        className="z-20"
        aria-label={mobileNavOpen ? 'Close menu' : 'Open menu'}
        type="button"
        onClick={() => handleOnMobileNavClick(!mobileNavOpen)}
      >
        {mobileNavOpen ? (
          <span className="flex justify-center items-center md:hidden">
            <XCircleIcon className="w-6 h-6 mr-1" />
            Close
          </span>
        ) : (
          <span className="flex justify-center items-center md:hidden">
            <Bars3Icon className="w-6 h-6 mr-2" />
            Menu
          </span>
        )}
      </button>

      <div
        className={`${
          mobileNavOpen ? '' : 'hidden '
        }h-screen w-screen z-10 absolute bg-white top-0 bottom-0 left-0 right-0 flex justify-center`}
      >
        <ul className="text-4xl self-center text-center" id="main-navigation">
          <li className="mb-10" onClick={() => handleOnMobileNavClick(false)}>
            <Link href="/" className="focus:underline">
              Front page
            </Link>
          </li>
          <li className="mb-10" onClick={() => handleOnMobileNavClick(false)}>
            <Link href="/blog/test" className="focus:underline">
              Blog test
            </Link>
          </li>
          <li className="mb-10" onClick={() => handleOnMobileNavClick(false)}>
            <Link href="/not-found" className="focus:underline">
              Not found
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
