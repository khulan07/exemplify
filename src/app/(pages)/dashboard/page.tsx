'use server'
import React from 'react'
import { currentUser } from '@clerk/nextjs/server';

import getMyFoundItems from '@/app/api/getMyFoundItems'
import getMyLostItems from '@/app/api/getMyLostItems'

import DisplayMyFoundItems from '@/app/components/displayMyFoundItems'
import DisplayMyLostItems from '@/app/components/displayMyLostItems'

const Dashboard = async () => {
    const user = await currentUser();
    const myFoundItems = await getMyFoundItems(user?.id ?? "");
    const myLostitems = await getMyLostItems(user?.id ?? "");
    console.log("what", myLostitems)
  return (
    <>
        {/* Card Blog */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            {/* Title */}
            <div className="max-w-2xl mx-auto text-center my-24 lg:mb-14">
                <h2 className="text-2xl text-neutral-200 font-bold md:text-4xl md:leading-tight">
                    My listings
                </h2>
            </div>
            <DisplayMyFoundItems myItems={myFoundItems} />
            <DisplayMyLostItems myItems={myLostitems} />
        </div>
    </>
  )
}

export default Dashboard