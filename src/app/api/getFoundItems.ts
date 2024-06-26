"use server";
import { sql } from "@vercel/postgres";

export default async function getFoundItems() {
    console.log("INVOKED")
    const client = await sql.connect();
    try {
        const { rows } = await client.sql`
        SELECT * FROM found_items;
        `;
        console.log("THE FUNCTIO  INCOED!")
        console.log("returning: ", rows)
        return rows; // Return the array of found item data
    } catch (error) {
        console.error("Error fetching found items:", error);
        // Optionally, re-throw or return a custom error object
        throw error; // or return { error: "Failed to fetch found items" }
    } finally {
        client.release();
    }
}
