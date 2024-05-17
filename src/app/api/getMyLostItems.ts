'use server';
import { sql } from '@vercel/postgres';

interface LostItem {
    id: number;
    title: string;
    postcreateddate: Date;
    description: string;
    location: string;
    lostdate: Date;
    postcreator_id: number;
    postcreator_username: string;
    itemstatus: string;
}

export default async function getUserLostItems(userId: number): Promise<LostItem[]> {
    const client = await sql.connect();

    try {
        const { rows } = await client.query<LostItem>({
            text: `
                SELECT * FROM LostItems WHERE postcreator_id = $1
            `,
            values: [userId]
        });
        return rows;
    } catch (error) {
        console.error('Error retrieving user\'s lost items:', error);
        throw error;
    } finally {
        client.release();
    }
}

// Example usage
const userId = 123; // Replace with actual user ID
getUserLostItems(userId)
    .then(lostItems => console.log('User\'s lost items:', lostItems))
    .catch(error => console.error('Error:', error));
