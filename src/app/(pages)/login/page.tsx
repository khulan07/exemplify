import React from 'react'
import { SignIn, SignUp } from '@clerk/nextjs'

const Login = () => {
  return (
    <>
    {/* Hero */}
    <div className="overflow-hidden">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="relative mx-auto max-w-4xl grid space-y-5 sm:space-y-10">
                {/* Title */}
                <div className="text-center">
                <p className="text-xs font-semibold text-gray-500 tracking-wide uppercase mb-3">
                    Small business solutions
                </p>
                <h1 className="text-3xl text-gray-800 font-bold sm:text-5xl lg:text-6xl lg:leading-tight">
                    Turn online shoppers into{" "}
                    <span className="text-blue-500">lifetime customers</span>
                </h1>
                </div>
                {/* End Title */}
                <div className='flex mx-auto flex-row gap-8'>
                    <SignIn routing='hash' />
                    <SignUp routing='hash' />
                </div>
            </div>
        </div>
    </div>
    {/* End Hero */}
    </>
  )
}

export default Login