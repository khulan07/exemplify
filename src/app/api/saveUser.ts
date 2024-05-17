'use server';
import { sql } from '@vercel/postgres';

export default async function saveUser(userData: any) {
  const client = await sql.connect();
  try {
    // Check if user exists (more efficient than using COUNT)
    const { rows } = await client.sql`
      SELECT 1 FROM users WHERE user_id = ${userData.id};
    `;

    if (rows.length === 0) {
      // User doesn't exist, insert a new record
      console.log("User doesn't have the data and saving the data...");
      await client.sql`
        INSERT INTO users (user_id, username, first_name, last_name, image_url, email)
        VALUES (
          ${userData.id}, 
          ${userData.username ?? 'Anonymous'}, 
          ${userData.firstName ?? ''},
          ${userData.lastName ?? ''}, 
          ${userData.imageUrl},
          ${userData.email ?? null} 
        )
      `;
      console.log("Successfully saved the data");
    } else {
      console.log("User already exists, not saving in the database");
    }
  } catch (error) {
    console.error("Error checking and saving user:", error);
    // Potentially re-throw the error to propagate it to the caller
    throw error; // Or handle the error differently (e.g., return an error response)
  } finally {
    // Ensure the client is released, even if an error occurs
    client.release();
  }
}
