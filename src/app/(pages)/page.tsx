'use client'
import React from 'react'
import { useUser } from '@clerk/nextjs';
import { sql } from "@vercel/postgres";
import { useEffect } from 'react';

//Components
import Header from "../components/homeHeader"
import HomeBody from '../components/homeBody'
import HomeStories from '../components/homeStories'

// Last edited by Ene
const HomePage = async () => {
  const client = await sql.connect();
  const { isSignedIn, isLoaded, user } = useUser();
  useEffect(() => {
    async () => {
      if (isSignedIn && isLoaded) {
        console.log("user id: ", user.primaryEmailAddressId)
        try {
          const { rows } = await client.sql`SELECT * FROM users WHERE user_id = ${user.primaryEmailAddressId};`;
          if (rows.length === 0) {
            console.log("user doeesn't have the data and saving the data...")
            // [Modify]
            // Need to implement logic that in the case where any of the user attributes is not accessible, assign dummy values.
            await client.sql`INSERT INTO users (user_id, username, first_name, last_name)
            VALUES (${user.primaryEmailAddressId}, ${user.username}, ${user.firstName}, ${user.lastName})`;
            console.log("sucessfully saved the data")
            client.release();
          } else {
            console.log("THe user is already in the db")
          }
        } catch (error) {
          console.error("Error checking and saving user:", error);
        }
      } else {
        console.log("The user is not logged in!")
      }
    }
  })
  return (
    <div>
        <Header />
        <HomeBody />
        <HomeStories />
    </div>
  )
}

export default HomePage