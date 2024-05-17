"use server";
import { sql } from "@vercel/postgres";

export default async function getLostItems() {
    console.log("INVOKED")
    const client = await sql.connect();
    try {
        const { rows } = await client.sql`
        SELECT * FROM lost_items;
        `;
        console.log("THE FUNCTIO  INCOED!")
        console.log("returning: ", rows)
        return rows; // Return the array of lost item data
    } catch (error) {
        console.error("Error fetching lost items:", error);
        // Optionally, re-throw or return a custom error object
        throw error; // or return { error: "Failed to fetch lost items" }
    } finally {
        client.release();
    }
}
