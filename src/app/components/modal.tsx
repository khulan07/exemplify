'use client'
import React from 'react'
import { SignIn } from '@clerk/nextjs'


// Last edited by Jelly
const ComponentModal = (props: any) => { 
  return (
    <>
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative"> 
                {/* Clerk's Login Component section */}
                <SignIn 
                routing="hash" 
                // [Modify]
                // This is the way Clerk allows for its components to be customezed by Tailwind CSS. 
                // I have implemented the similar logic in the layout.tsx file which can be exclusively defined in the component file rather than where it is now.
                appearance={{
                    elements: {
                    rootBox: "relative z-0",
                    },
                }}
                />
                {/* The exit button for the modal*/}
                <button onClick={props.onClose} className="absolute top-2 right-2 text-black hover:text-gray-800 bg-gray-100 hover:bg-gray-300 rounded-lg p-0.5 transfrom duration-300 z-10">
                <span className="sr-only">Close</span>
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                </button>
            </div>
        </div>
    </>
  )
}

export default ComponentModal