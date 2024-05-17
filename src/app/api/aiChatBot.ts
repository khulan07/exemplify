'use server';

// export default async function handleAitChatBot() {
//     null
// }

// Api key : AIzaSyAtq19ULgGw74dQWWVejxrEEao8jzsUZSM

// import { GenerateResponseRequest, GenerateResponse } from '@google/generative-ai';

// async function callGeminiAPI(prompt: string): Promise<string> {
//   // Replace with your actual project ID and location
//   const projectId = 'your-project-id';
//   const location = 'your-location';

//   // Create the request object
//   const request: GenerateResponseRequest = {
//     prompt: prompt,
//     projectId: projectId,
//     location: location,
//   };

//   try {
//     // Import the Generative AI client
//     const { GenerateResponse } = require('@google/generative-ai');

//     // Create a client instance
//     const client = new GenerateResponse(projectId, location);

//     // Send the request and wait for the response
//     const [response] = await client.generateResponse(request);

//     // Return the generated text from the response
//     return response.text;
//   } catch (error) {
//     console.error('Error calling Gemini API:', error);
//     throw error; // Re-throw the error for handling at the call site
//   }
// }




// Replace "YOUR_API_KEY" with your actual OpenAI API key

import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: 'sk-proj-Hz6mQTAB0w0Y8LwfohoRT3BlbkFJMDVprNSTqz0MmyaFwm55' });


async function generateSQLQuery(searchTerm: string, tableName: string, searchColumn: string): Promise<string> {
    const stream = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: `Generate SQL query for searching "${searchTerm}" in "${tableName}.${searchColumn}"` }],
        stream: true,
    });

    let sqlQuery = "";

    for await (const chunk of stream) {
        const completion = chunk.choices[0]?.delta?.content || "";
        sqlQuery += completion;
    }

    return sqlQuery.trim();
}

async function printOutput() {
    const searchTerm = "your_search_term";
    const tableName = "your_table_name";
    const searchColumn = "your_column_name";

    const sqlQuery = await generateSQLQuery(searchTerm, tableName, searchColumn);

    console.log("Generated SQL Query:");
    console.log(sqlQuery);
}

printOutput();
