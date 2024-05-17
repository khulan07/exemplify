'use server'
import { sql } from '@vercel/postgres';

export default async function createFoundItem(foundItemData: any) {
    const client = await sql.connect();
    try {
        const { rows } = await client.sql`SELECT * FROM found_items WHERE found_item_image_url = ${foundItemData.lostItemImageUrl}`;
        console.log("GOT THE ROWS!!!")

        if (rows.length === 0) {
            console.log("Item not found. Saving the found item...");

            await client.sql`
                INSERT INTO found_items (title, description, created_at, location, found_date, author_id, author_username, item_status, found_item_image_url, author_avatar_url)
                VALUES (${foundItemData.title}, ${foundItemData.description}, ${foundItemData.createdAt}, ${foundItemData.location}, ${foundItemData.foundDate}, ${foundItemData.authorId}, ${foundItemData.authorUsername}, ${foundItemData.itemStatus}, ${foundItemData.lostItemImageUrl}, ${foundItemData.authorAvatarUrl})
            `;

            console.log("Successfully saved the found item.");
        } else {
            console.log("Item already exists in the database.");
        }
    } catch (error) {
        console.error('Error saving the lost item:', error);
    } finally {
        client.release();
    }
}

