'use server';
import { sql } from '@vercel/postgres';

interface FoundItem {
    id: number;
    title: string;
    postcreateddate: Date;
    description: string;
    location: string;
    founddate: Date;
    postcreator_id: number;
    postcreator_username: string;
    itemstatus: string;
}

export default async function getUserFoundItems(userId: number): Promise<FoundItem[]> {
    const client = await sql.connect();

    try {
        const { rows } = await client.query<FoundItem>({
            text: `
                SELECT * FROM FoundItems WHERE postcreator_id = $1
            `,
            values: [userId]
        });
        return rows;
    } catch (error) {
        console.error('Error retrieving user\'s found items:', error);
        throw error;
    } finally {
        client.release();
    }
}

// Example usage
const userId = 123; // Replace with actual user ID
getUserFoundItems(userId)
    .then(foundItems => console.log('User\'s found items:', foundItems))
    .catch(error => console.error('Error:', error));
