import { sql } from '@vercel/postgres';

interface FoundItem {
    id?: number;
    itemName: string;
    description: string;
    location: string;
    foundDate: Date;
    contactInfo: string;
}

export default async function postFoundItem(foundItem: FoundItem): Promise<void> {
    const client = await sql.connect();
    try {
        const { rows } = await client.query({
            text: `
                SELECT * FROM found_items WHERE itemName = $1 AND location = $2
            `,
            values: [foundItem.itemName, foundItem.location]
        });

        if (rows.length === 0) {
            console.log("Item not found. Saving the found item...");

            await client.query({
                text: `
                    INSERT INTO found_items (itemName, description, location, foundDate, contactInfo)
                    VALUES ($1, $2, $3, $4, $5)
                `,
                values: [foundItem.itemName, foundItem.description, foundItem.location, foundItem.foundDate, foundItem.contactInfo]
            });
            
            console.log("Successfully saved the found item.");
        } else {
            console.log("Item already exists in the database.");
        }
    } catch (error) {
        console.error('Error posting the found item:', error);
    } finally {
        client.release();
    }
}

// Example usage
const foundItem: FoundItem = {
    itemName: 'Laptop',
    description: 'Silver MacBook Pro',
    location: 'Coffee Shop',
    foundDate: new Date('2024-05-15'),
    contactInfo: 'John Doe - john@example.com'
};

postFoundItem(foundItem)
    .then(() => console.log('Found item has been posted'))
    .catch(error => console.error('Error:', error));
