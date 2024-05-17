'use client'
import React from 'react'
import { useState } from 'react'

import Card from './card'
import FoundModal from './modals/foundModal'


const DisplayMyLostItems = ({myItems}: any) => {
    const [foundItem, setFoundItem] = useState<any>(null);
    console.log(myItems)
    return (
        <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 duration-300">
                {myItems?.map((item: any, index: any) => (
                    <Card
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

export default DisplayMyLostItems