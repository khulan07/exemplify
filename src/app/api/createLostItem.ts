'use server'
import { sql } from '@vercel/postgres';

export default async function createLostItem(lostItemData: any) {
    const client = await sql.connect();
    try {
        const { rows } = await client.sql`SELECT * FROM lost_items WHERE lost_item_image_url = ${lostItemData.lostItemImageUrl}`;

        if (rows.length === 0) {
            await client.sql`
                INSERT INTO lost_items (title, description, created_at, location, lost_date, author_id, author_username, item_status, lost_item_image_url, author_avatar_url)
                VALUES (${lostItemData.title}, ${lostItemData.description}, ${lostItemData.createdAt}, ${lostItemData.location}, ${lostItemData.lostDate}, ${lostItemData.authorId}, ${lostItemData.authorUsername}, ${lostItemData.itemStatus}, ${lostItemData.lostItemImageUrl}, ${lostItemData.authorAvatarUrl})
            `;
            console.log("Successfully saved the lost item.");
        } else {
            console.log("Item already exists in the database.");
        }
    } catch (error) {
        console.error('Error saving the lost item:', error);
    } finally {
        client.release();
    }
}

