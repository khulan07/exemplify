import React from 'react'

const componentHeader = () => {
  return (
    <>
    <main id="content">
        {/* Hero */}
        <div className="bg-neutral-900">
        <div className="max-w-5xl mx-auto px-4 xl:px-0 pt-24 lg:pt-32 pb-24">
            <h1 className="font-semibold text-white text-5xl md:text-6xl">
            <span className="text-[#ff0]">Preline Agency:</span> Transforming
            ideas into reality
            </h1>
            <div className="max-w-4xl">
            <p className="mt-5 text-neutral-400 text-lg">
                It is a creative hub where imagination meets craftsmanship to
                transform ideas into tangible realities. At Preline Agency, we
                specialize in turning conceptual visions into concrete forms,
                whether it be through design, artistry, or technological innovation.
            </p>
            </div>
        </div>
        </div>
        {/* End Hero */}

        {/* Testimonials */}
        <div className="bg-neutral-900">
        <div className="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
            {/* Title */}
            <div className="max-w-3xl mb-10 lg:mb-14">
            <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
                Preline reviews
            </h2>
            <p className="mt-1 text-neutral-400">
                With over 30 awards, and achievements, we proudly demonstrate our
                unwavering dedication to excellence and client success.
            </p>
            </div>
            {/* End Title */}
            {/* Grid */}
            <div className="md:grid md:grid-cols-2 md:gap-10 lg:gap-16 md:items-center">
            <div>
                {/* Blockquote */}
                <blockquote>
                <p className="font-medium text-xl text-white md:text-2xl md:leading-normal xl:text-3xl xl:leading-normal">
                    To say that switching to Preline has been life-changing is an
                    understatement. My business has tripled since then.
                </p>
                <footer className="mt-6">
                    <div className="flex items-center">
                    <div className="md:hidden flex-shrink-0">
                        <img
                        className="size-12 rounded-full"
                        src="https://images.unsplash.com/photo-1671725501928-b7d85698ccd8?q=80&w=320&h=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Image Description"
                        />
                    </div>
                    <div className="ms-4 md:ms-0">
                        <div className="text-base font-semibold text-white">
                        Nicole Grazioso
                        </div>
                        <div className="text-xs text-neutral-400">
                        Director Payments &amp; Risk | Airbnb
                        </div>
                    </div>
                    </div>
                </footer>
                </blockquote>
                {/* End Blockquote */}
            </div>
            {/* End Col */}
            <div className="hidden md:block mb-24 md:mb-0">
                <img
                className="rounded-xl"
                src="https://images.unsplash.com/photo-1671725501928-b7d85698ccd8?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Image Description"
                />
            </div>
            {/* End Col */}
            </div>
            {/* End Grid */}
        </div>
        </div>
        {/* End Testimonials */}
        {/* Stats */}
        <div className="bg-neutral-900">
        <div className="max-w-5xl px-4 xl:px-0 py-10 mx-auto">
            <div className="border border-neutral-800 rounded-xl">
            <div className="p-4 lg:p-8 bg-gradient-to-bl from-neutral-800 via-neutral-900 to-neutral-950 rounded-xl">
                <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-y-20 gap-x-12">
                {/* Stats */}
                <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                    <svg
                    className="flex-shrink-0 size-6 sm:size-8 text-[#ff0] mx-auto"
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
                    <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                    <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                    <path d="m21 3 1 11h-2" />
                    <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                    <path d="M3 4h8" />
                    </svg>
                    <div className="mt-3 sm:mt-5">
                    <h3 className="text-lg sm:text-3xl font-semibold text-white">
                        2,000+
                    </h3>
                    <p className="mt-1 text-sm sm:text-base text-neutral-400">
                        Preline partners
                    </p>
                    </div>
                </div>
                {/* End Stats */}
                {/* Stats */}
                <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                    <div className="flex justify-center items-center -space-x-5">
                    <img
                        className="relative z-[2] flex-shrink-0 size-8 rounded-full border-[3px] border-neutral-800"
                        src="https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                        alt="Image Description"
                    />
                    <img
                        className="relative z-[1] flex-shrink-0 size-8 rounded-full border-[3px] border-neutral-800 -mt-7"
                        src="https://images.unsplash.com/photo-1570654639102-bdd95efeca7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                        alt="Image Description"
                    />
                    <img
                        className="relative flex-shrink-0 size-8 rounded-full border-[3px] border-neutral-800"
                        src="https://images.unsplash.com/photo-1679412330254-90cb240038c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                        alt="Image Description"
                    />
                    </div>
                    <div className="mt-3 sm:mt-5">
                    <h3 className="text-lg sm:text-3xl font-semibold text-white">
                        85%
                    </h3>
                    <p className="mt-1 text-sm sm:text-base text-neutral-400">
                        Happy customers
                    </p>
                    </div>
                </div>
                {/* End Stats */}
                {/* Stats */}
                <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                    <svg
                    className="flex-shrink-0 size-6 sm:size-8 text-[#ff0] mx-auto"
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
                    <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
                    <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
                    <path d="m2 16 6 6" />
                    <circle cx={16} cy={9} r="2.9" />
                    <circle cx={6} cy={5} r={3} />
                    </svg>
                    <div className="mt-3 sm:mt-5">
                    <h3 className="text-lg sm:text-3xl font-semibold text-white">
                        $55M+
                    </h3>
                    <p className="mt-1 text-sm sm:text-base text-neutral-400">
                        Ads managed yearly
                    </p>
                    </div>
                </div>
                {/* End Stats */}
                </div>
            </div>
            </div>
        </div>
        </div>
        {/* End Stats */}
        {/* Approach */}
        <div className="bg-neutral-900">
        {/* Approach */}
        <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20  mx-auto">
            {/* Title */}
            <div className="max-w-3xl mb-10 lg:mb-14">
            <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
                Our approach
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
            <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
                <img
                className="w-full object-cover rounded-xl"
                src="https://images.unsplash.com/photo-1587614203976-365c74645e83?q=80&w=480&h=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Image Description"
                />
            </div>
            {/* End Col */}
            {/* Timeline */}
            <div>
                {/* Heading */}
                <div className="mb-4">
                <h3 className="text-xs font-medium uppercase text-[#ff0]">
                    Steps
                </h3>
                </div>
                {/* End Heading */}
                {/* Item */}
                <div className="flex gap-x-5 ms-1">
                {/* Icon */}
                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                        1
                    </span>
                    </div>
                </div>
                {/* End Icon */}
                {/* Right Content */}
                <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-sm lg:text-base text-neutral-400">
                    <span className="text-white">
                        Market Research and Analysis:
                    </span>
                    Identify your target audience and understand their needs,
                    preferences, and behaviors.
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
                    <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                        2
                    </span>
                    </div>
                </div>
                {/* End Icon */}
                {/* Right Content */}
                <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-sm lg:text-base text-neutral-400">
                    <span className="text-white">
                        Product Development and Testing:
                    </span>
                    Develop digital products or services that address the needs
                    and preferences of your target audience.
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
                    <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                        3
                    </span>
                    </div>
                </div>
                {/* End Icon */}
                {/* Right Content */}
                <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-sm md:text-base text-neutral-400">
                    <span className="text-white">Marketing and Promotion:</span>
                    Develop a comprehensive marketing strategy to promote your
                    digital products or services.
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
                    <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                        4
                    </span>
                    </div>
                </div>
                {/* End Icon */}
                {/* Right Content */}
                <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-sm md:text-base text-neutral-400">
                    <span className="text-white">Launch and Optimization:</span>
                    Launch your digital products or services to the market,
                    closely monitoring their performance and user feedback.
                    </p>
                </div>
                {/* End Right Content */}
                </div>
                {/* End Item */}
                <a
                className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-full focus:outline-none"
                href="#"
                >
                <svg
                    className="flex-shrink-0 size-4"
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
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    <path
                    className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-hover:delay-100 transition"
                    d="M14.05 2a9 9 0 0 1 8 7.94"
                    />
                    <path
                    className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition"
                    d="M14.05 6A5 5 0 0 1 18 10"
                    />
                </svg>
                Schedule a call
                </a>
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
                Whatever your goal - we will get you there.
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
                        className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-full focus:outline-none"
                        href="#"
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
                    300 Bath Street, Tay House
                    <br />
                    Glasgow G2 4JR, United Kingdom
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
                    hello@example.so
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
                    <h4 className="text-white font-semibold">We're hiring</h4>
                    <p className="mt-1 text-neutral-400">
                    We're thrilled to announce that we're expanding our team and
                    looking for talented individuals like you to join us.
                    </p>
                    <p className="mt-2">
                    <a
                        className="group inline-flex items-center gap-x-2 font-medium text-sm text-[#ff0] decoration-2 hover:underline focus:outline-none focus:underline"
                        href="#"
                    >
                        Job openings
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
    {/* ========== END MAIN CONTENT ========== */}
    
    <div className="fixed bottom-2 sm:bottom-4 end-2 sm:end-4 ms-2 z-[70] bg-neutral-900 border border-neutral-800 rounded-lg dark:bg-neutral-800">
        {/* Button Group */}
        <div className="flex items-center gap-px">
        <p className="inline-flex gap-x-2 text-xs text-white py-1 px-2 relative before:absolute before:top-1/2 before:-start-0.5 before:z-10 before:w-px before:h-4 before:bg-white/20 before:-translate-y-1/2 first:before:hidden">
            <svg
            className="flex-shrink-0 size-3.5"
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
            <circle cx={12} cy={12} r={10} />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
            </svg>
            This is the Preline UI template preview mode.
        </p>
        {/* Templates Dropdown */}
        <div className="hs-dropdown relative inline-flex [--strategy:absolute] [--placement:bottom-right] before:absolute before:top-1/2 before:-start-px before:z-10 before:w-px before:h-4 before:bg-white/20 before:-translate-y-1/2 first:before:hidden">
            <button
            type="button"
            className="hs-dropdown-toggle py-2.5 sm:py-1.5 px-2 inline-flex justify-center items-center gap-x-2 text-xs rounded-e-lg border border-transparent bg-neutral-900 text-white hover:bg-neutral-950 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-neutral-900 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            >
            Templates
            <svg
                className="hs-dropdown-open:rotate-180 flex-shrink-0 size-3.5"
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
                <path d="m18 15-6-6-6 6" />
            </svg>
            </button>
            {/* Dropdown */}
            <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-48 transition-[opacity,margin] duration opacity-0 hidden z-10 border border-neutral-800 bg-neutral-900 rounded-lg shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:bg-neutral-800 dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)]">
            <div className="p-1 space-y-0.5">
                <span className="block p-2 pb-1 text-[11px] uppercase text-gray-400 dark:text-neutral-400">
                Main Pages
                </span>
                <a
                className="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-200 hover:bg-neutral-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 "
                href="../../index.html"
                >
                Preline UI
                <svg
                    className="flex-shrink-0 size-3.5 ms-auto opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition"
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
                <a
                className="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-200 hover:bg-neutral-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 "
                href="../../docs/index.html"
                >
                Components (570+)
                <svg
                    className="flex-shrink-0 size-3.5 ms-auto opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition"
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
                <a
                className="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-200 hover:bg-neutral-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 "
                href="../../examples.html"
                >
                Examples (185+)
                <svg
                    className="flex-shrink-0 size-3.5 ms-auto opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition"
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
                <a
                className="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-200 hover:bg-neutral-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 "
                href="../../templates.html"
                >
                Templates (2)
                <svg
                    className="flex-shrink-0 size-3.5 ms-auto opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition"
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
                <a
                className="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-200 hover:bg-neutral-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 "
                href="../../plugins.html"
                >
                Plugins (19)
                <svg
                    className="flex-shrink-0 size-3.5 ms-auto opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition"
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
                <a
                className="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-200 hover:bg-neutral-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 "
                href="../../figma.html"
                >
                Figma
                <svg
                    className="flex-shrink-0 size-3.5 ms-auto opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition"
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
                <a
                className="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-200 hover:bg-neutral-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 "
                href="../../pro/index.html"
                >
                Preline Pro
                <svg
                    className="flex-shrink-0 size-3.5 ms-auto opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition"
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
                <div className="border-b border-gray-800 dark:border-neutral-700 pt-1" />
                <span className="block p-2 pb-1 text-[11px] uppercase text-gray-400 dark:text-neutral-400">
                Template Previews
                </span>
                <div className="space-y-0.5 max-h-96 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-neutral-800 [&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                <a
                    className="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-200 hover:bg-neutral-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 active-link bg-neutral-800 dark:bg-neutral-700"
                    href="../../templates/agency/index.html"
                >
                    Agency
                    <svg
                    className="flex-shrink-0 size-3.5 ms-auto opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition"
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
                <a
                    className="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-200 hover:bg-neutral-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 "
                    href="../../templates/creative-agency/index.html"
                >
                    Creative Agency
                    <svg
                    className="flex-shrink-0 size-3.5 ms-auto opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition"
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
                </div>
            </div>
            </div>
            {/* End Dropdown */}
        </div>
        {/* End Templates Dropdown */}
        </div>
        {/* End Button Group */}
    </div>
    {/* JS Implementing Plugins */}
    {/* JS PLUGINS */}
    {/* Required plugins */}
    {/* JS INITIALIZATIONS */}
    </>
  )
}

export default componentHeader