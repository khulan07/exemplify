import React from 'react'
import Link from 'next/link';
import { UserButton, SignedIn, SignedOut } from '@clerk/nextjs';
//Components
const NavBar = () => {
  return (
    <>
      {/* component */}
      <nav className="flex justify-between px-20 py-10 items-center bg-white">
        <Link href='/'>
          <button className="text-xl text-gray-800 font-bold">Exemplify</button>
        </Link>
        <div className="flex items-center">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 pt-0.5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              className="ml-2 outline-none bg-transparent font-"
              type="text"
              name="search"
              id="search"
              placeholder="Search..."
            />
          </div>
          <ul className="flex items-center space-x-6">
            <Link href='/explore' >
              <li className="font-semibold text-gray-700 cursor-pointer hover:text-black">Explore</li>
            </Link>
            <Link href='/dashboard' >
              <li className="font-semibold text-gray-700 cursor-pointer hover:text-black">Dashboard</li>
            </Link>
            <SignedOut>
              <Link href='/login' >
                <li className="font-semibold text-gray-700 cursor-pointer hover:text-black">Sign in</li>
              </Link>
            </SignedOut>
            <SignedIn>
              <UserButton appearance={{}} userProfileMode='modal' showName={true} />
            </SignedIn>
          </ul>
        </div>
      </nav>
    </>

  )
}

export default NavBar