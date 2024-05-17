'use client'
import React from 'react'
import { useState } from 'react'

import Card from './card'
import PostModal from './modals/postModal'

type LostItem = {
    title: string;
    description: string;
    created_at: Date;
    location: string;
    lost_date: string
    item_status: string;
    author_id: string;
    author_username: string;
    lost_item_image_url: string;
};

type LostItemsDisplayProps = {
    lostItems: LostItem[];
};


const LostItemsDisplay = ({lostItems}: any) => {
    const [lostItem, setLostItem] = useState<any>(null);
    return (
        <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 duration-300">
                {lostItems.map((item: any, index: any) => (
                    <Card 
                        key={index}
                        item={item}
                        openFunction={() => {
                            setLostItem(item)
                            console.log("WHY")
                        }}
                    />
                ))}

            </div>
            {lostItem && (
                <PostModal onClose={() => {
                    setLostItem(null)
                }} item={lostItem} />
            )}
        </>
    )   
}

export default LostItemsDisplay