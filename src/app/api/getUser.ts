'use server';
import { sql } from '@vercel/postgres';

export default async function getUser(userId: string) {
  const client = await sql.connect();
  console.log("userId: ", userId)

  try {
    // Correct the query to use the userId parameter
    const { rows } = await client.sql`
        SELECT * FROM users WHERE user_id = ${userId};
      `;
    console.log("rows: ", rows)

    if (rows.length > 0) {
      // User found, return the existing data
      return rows[0];
    } else {
      return null; // User not found, return null
    }
  } catch (error) {
    console.error("Error fetching or saving user:", error);
    throw error; // Rethrow to handle at a higher level
  } finally {
    client.release();
  }
}
