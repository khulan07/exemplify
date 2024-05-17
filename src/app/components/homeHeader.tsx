import React from 'react'
import Spline from '@splinetool/react-spline';

const componentHeader = () => {
  return (
    <>
    <main id="content">
        {/* Hero */}
        <div className="bg-neutral-900">
        <div className="max-w-5xl mx-auto px-4 xl:px-0 pt-24 lg:pt-32 pb-24">
            <h1 className="font-semibold text-white text-5xl md:text-6xl">
            <span className="text-neutral-300 animte duration-500 animate-pulse">WhitBox:</span> Your Lost and Found Connection
            </h1>
            <div className="max-w-4xl">
            <p className="mt-5 text-neutral-400 text-lg">
                Whitbox connects your community, making it simple to find and return lost items. Search for missing belongings or report found items quickly and easily.
            </p>
            </div>
        </div>
        </div>
        {/* End Hero */}

        {/* Approach */}
        <div className="bg-neutral-900">
        {/* Approach */}
        <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20  mx-auto">
            {/* Title */}
            <div className="max-w-3xl mb-10 lg:mb-14">
            <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
                We feature
            </h2>
            <p className="mt-1 text-neutral-400">
                This profound insight guides our comprehensive strategy — from
                meticulous research and strategic planning to the seamless execution
                of brand development and website or product deployment.
            </p>
            </div>
            {/* End Title */}
            {/* Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
            <div className="aspect-w-16 h-[500px] lg:aspect-none">
                <Spline className="h-full" scene="https://prod.spline.design/a391BKABeH7aXmwH/scene.splinecode" />
            </div>
            {/* End Col */}
            {/* Timeline */}
            <div>
                {/* Heading */}
                <div className="mb-4">
                <h3 className="text-xs font-medium uppercase text-neutral-200">
                    Steps
                </h3>
                </div>
                {/* End Heading */}
                {/* Item */}
                <div className="flex gap-x-5 ms-1">
                {/* Icon */}
                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-white font-semibold text-xs uppercase rounded-full">
                        1
                    </span>
                    </div>
                </div>
                {/* End Icon */}
                {/* Right Content */}
                <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-sm lg:text-base text-neutral-400">
                    <span className="text-white">Easy Item Listings: </span>
                    Quickly create detailed listings for lost or found items with just a few clicks. Include photos, descriptions, and location details to help reunite items with their owners.
                    </p>
                </div>
                {/* End Right Content */}
                </div>
                {/* End Item */}
                {/* Item */}
                <div className="flex gap-x-5 ms-1">
                {/* Icon */}
                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-white font-semibold text-xs uppercase rounded-full">
                        2
                    </span>
                    </div>
                </div>
                {/* End Icon */}
                {/* Right Content */}
                <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-sm lg:text-base text-neutral-400">
                    <span className="text-white">Smart Search: </span>
                        Find lost items effortlessly using our powerful search filters. Refine your search by category, keywords, location, and date to increase your chances of finding what you're looking for.
                    </p>
                </div>
                {/* End Right Content */}
                </div>
                {/* End Item */}
                {/* Item */}
                <div className="flex gap-x-5 ms-1">
                {/* Icon */}
                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-white font-semibold text-xs uppercase rounded-full">
                        3
                    </span>
                    </div>
                </div>
                {/* End Icon */}
                {/* Right Content */}
                <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-sm md:text-base text-neutral-400">
                    <span className="text-white">Community Collaboration: </span>
                    Join a supportive community of users dedicated to helping each other. Share leads, offer advice, and spread the word about lost items.
                    </p>
                </div>
                {/* End Right Content */}
                </div>
                {/* End Item */}
                {/* Item */}
                <div className="flex gap-x-5 ms-1">
                {/* Icon */}
                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-white font-semibold text-xs uppercase rounded-full">
                        4
                    </span>
                    </div>
                </div>
                {/* End Icon */}
                {/* Right Content */}
                <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-sm md:text-base text-neutral-400">
                    <span className="text-white">Secure Messaging: </span>
                    Communicate directly and securely with other users through our built-in messaging system. Verify ownership and arrange for the safe return of found items.
                    </p>
                </div>
                {/* End Right Content */}
                </div>
                {/* End Item */}
            </div>
            {/* End Timeline */}
            </div>
            {/* End Grid */}
        </div>
        </div>
        {/* End Approach */}
        {/* Contact */}
        <div className="bg-neutral-900">
        <div className="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
            {/* Title */}
            <div className="max-w-3xl mb-10 lg:mb-14">
            <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
                Contact us
            </h2>
            <p className="mt-1 text-neutral-400">
            Have questions, feedback, or need help with Whitbox? We're here to assist you!
            </p>
            </div>
            {/* End Title */}
            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">
            <div className="md:order-2 border-b border-neutral-800 pb-10 mb-10 md:border-b-0 md:pb-0 md:mb-0">
                <form>
                <div className="space-y-4">
                    {/* Input */}
                    <div className="relative">
                    <input
                        type="text"
                        id="hs-tac-input-name"
                        className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                focus:pt-6
                focus:pb-2
                [&:not(:placeholder-shown)]:pt-6
                [&:not(:placeholder-shown)]:pb-2
                autofill:pt-6
                autofill:pb-2"
                        placeholder="Name"
                    />
                    <label
                        htmlFor="hs-tac-input-name"
                        className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                peer-focus:text-xs
                peer-focus:-translate-y-1.5
                peer-focus:text-neutral-400
                peer-[:not(:placeholder-shown)]:text-xs
                peer-[:not(:placeholder-shown)]:-translate-y-1.5
                peer-[:not(:placeholder-shown)]:text-neutral-400"
                    >
                        Name
                    </label>
                    </div>
                    {/* End Input */}
                    {/* Input */}
                    <div className="relative">
                    <input
                        type="email"
                        id="hs-tac-input-email"
                        className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                focus:pt-6
                focus:pb-2
                [&:not(:placeholder-shown)]:pt-6
                [&:not(:placeholder-shown)]:pb-2
                autofill:pt-6
                autofill:pb-2"
                        placeholder="Email"
                    />
                    <label
                        htmlFor="hs-tac-input-email"
                        className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                peer-focus:text-xs
                peer-focus:-translate-y-1.5
                peer-focus:text-neutral-400
                peer-[:not(:placeholder-shown)]:text-xs
                peer-[:not(:placeholder-shown)]:-translate-y-1.5
                peer-[:not(:placeholder-shown)]:text-neutral-400"
                    >
                        Email
                    </label>
                    </div>
                    {/* End Input */}
                    {/* Input */}
                    <div className="relative">
                    <input
                        type="text"
                        id="hs-tac-input-company"
                        className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                focus:pt-6
                focus:pb-2
                [&:not(:placeholder-shown)]:pt-6
                [&:not(:placeholder-shown)]:pb-2
                autofill:pt-6
                autofill:pb-2"
                        placeholder="Company"
                    />
                    <label
                        htmlFor="hs-tac-input-company"
                        className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                peer-focus:text-xs
                peer-focus:-translate-y-1.5
                peer-focus:text-neutral-400
                peer-[:not(:placeholder-shown)]:text-xs
                peer-[:not(:placeholder-shown)]:-translate-y-1.5
                peer-[:not(:placeholder-shown)]:text-neutral-400"
                    >
                        Company
                    </label>
                    </div>
                    {/* End Input */}
                    {/* Input */}
                    <div className="relative">
                    <input
                        type="text"
                        id="hs-tac-input-phone"
                        className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                focus:pt-6
                focus:pb-2
                [&:not(:placeholder-shown)]:pt-6
                [&:not(:placeholder-shown)]:pb-2
                autofill:pt-6
                autofill:pb-2"
                        placeholder="Phone"
                    />
                    <label
                        htmlFor="hs-tac-input-phone"
                        className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                peer-focus:text-xs
                peer-focus:-translate-y-1.5
                peer-focus:text-neutral-400
                peer-[:not(:placeholder-shown)]:text-xs
                peer-[:not(:placeholder-shown)]:-translate-y-1.5
                peer-[:not(:placeholder-shown)]:text-neutral-400"
                    >
                        Phone
                    </label>
                    </div>
                    {/* End Input */}
                    {/* Textarea */}
                    <div className="relative">
                    <textarea
                        id="hs-tac-message"
                        className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                focus:pt-6
                focus:pb-2
                [&:not(:placeholder-shown)]:pt-6
                [&:not(:placeholder-shown)]:pb-2
                autofill:pt-6
                autofill:pb-2"
                        placeholder="This is a textarea placeholder"
                        defaultValue={""}
                    />
                    <label
                        htmlFor="hs-tac-message"
                        className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                peer-focus:text-xs
                peer-focus:-translate-y-1.5
                peer-focus:text-neutral-400
                peer-[:not(:placeholder-shown)]:text-xs
                peer-[:not(:placeholder-shown)]:-translate-y-1.5
                peer-[:not(:placeholder-shown)]:text-neutral-400"
                    >
                        Tell us about your project
                    </label>
                    </div>
                    {/* End Textarea */}
                </div>
                <div className="mt-2">
                    <p className="text-xs text-neutral-500">
                    All fields are required
                    </p>
                    <p className="mt-5">
                    <a
                        className="group inline-flex items-center gap-x-2 py-2 px-3 bg-gray-100 font-medium text-sm text-neutral-800 rounded-full focus:outline-none"
                        href="/"
                    >
                        Submit
                        <svg
                        className="flex-shrink-0 size-4 transition group-hover:translate-x-0.5 group-hover:translate-x-0 group-focus:translate-x-0.5 group-focus:translate-x-0"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                        </svg>
                    </a>
                    </p>
                </div>
                </form>
            </div>
            {/* End Col */}
            <div className="space-y-14">
                {/* Item */}
                <div className="flex gap-x-5">
                <svg
                    className="flex-shrink-0 size-6 text-neutral-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx={12} cy={10} r={3} />
                </svg>
                <div className="grow">
                    <h4 className="text-white font-semibold">Our address:</h4>
                    <address className="mt-1 text-neutral-400 text-sm not-italic">
                    300 W Hawthorne Rd,
                    <br />
                    Spokane, WA 99251
                    </address>
                </div>
                </div>
                {/* End Item */}
                {/* Item */}
                <div className="flex gap-x-5">
                <svg
                    className="flex-shrink-0 size-6 text-neutral-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                    <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                </svg>
                <div className="grow">
                    <h4 className="text-white font-semibold">Email us:</h4>
                    <a
                    className="mt-1 text-neutral-400 text-sm"
                    href="#mailto:example@site.co"
                    target="_blank"
                    >
                    whitbox@gmail.com
                    </a>
                </div>
                </div>
                {/* End Item */}
                {/* Item */}
                <div className="flex gap-x-5">
                <svg
                    className="flex-shrink-0 size-6 text-neutral-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="m3 11 18-5v12L3 14v-3z" />
                    <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
                </svg>
                <div className="grow">
                    <h4 className="text-white font-semibold">Let's Connect!</h4>
                    <p className="mt-1 text-neutral-400">
                    We'd love to hear from you! You can use the form to send us a message
                    </p>
                </div>
                </div>
                {/* End Item */}
            </div>
            {/* End Col */}
            </div>
            {/* End Grid */}
        </div>
        </div>
        {/* End Contact */}
    </main>
    </>    
  )
}

export default componentHeader