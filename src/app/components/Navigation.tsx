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

      <React.Fragment>
        {mobileNavOpen ? (
          <XCircleIcon
            className="w-6 h-6 md:hidden z-20"
            onClick={() => handleOnMobileNavClick(!mobileNavOpen)}
          />
        ) : (
          <div
            className="flex justify-center items-center md:hidden"
            onClick={() => handleOnMobileNavClick(!mobileNavOpen)}
          >
            <Bars3Icon className="w-6 h-6 mr-2" />
            Menu
          </div>
        )}
      </React.Fragment>

      <div
        className={`${
          mobileNavOpen ? '' : 'hidden '
        }h-screen w-screen z-10 absolute bg-white top-0 bottom-0 left-0 right-0 flex justify-center`}
      >
        <ul className="text-4xl self-center text-center" id="navbar-default">
          <li className="mb-10" onClick={() => handleOnMobileNavClick(false)}>
            <Link href="/">Front page</Link>
          </li>
          <li className="mb-10" onClick={() => handleOnMobileNavClick(false)}>
            <Link href="/blog/test">Blog test</Link>
          </li>
          <li className="mb-10" onClick={() => handleOnMobileNavClick(false)}>
            <Link href="/not-found">Not found</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
