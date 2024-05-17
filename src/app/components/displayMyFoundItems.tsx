'use client'
import React from 'react'
import { useState } from 'react'

import Card2 from './card2'
import FoundModal from './modals/foundModal'


const DisplayMyFoundItems = ({myItems}: any) => {
    const [foundItem, setFoundItem] = useState<any>(null);
    console.log("TEHCA HERO TO", myItems)
    return (
        <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 duration-300">
                {myItems?.map((item: any, index: any) => (
                    <Card2 
                        key={index}
                        item={item}
                        openFunction={() => {
                            setFoundItem(item)
                        }}
                    />
                ))}

            </div>
            {foundItem && (
                <FoundModal onClose={() => {
                    setFoundItem(null)
                }} item={foundItem} />
            )}
        </>
    )   
}

export default DisplayMyFoundItems