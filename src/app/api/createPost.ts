
// interface Post {
//     id?: number;
//     username: string
//     title: string;
//     content: string;
//     author: string;
//     created_at?: Date;
// }


import { sql } from '@vercel/postgres';

export default async function savePost(post: any) {
    const client = await sql.connect();
    try {
        const { rows } = await client.sql`
            SELECT * FROM posts WHERE id = ${post.id};
        `;
        
        if (rows.length === 0) {
            console.log("Post doesn't exist. Saving the new post...");

            await client.sql`
                INSERT INTO posts (id, username,title, content, author, created_at)
                VALUES (${post.title}, ${post.content}, ${post.author}, ${post.created_at || new Date()});
            `;
            
            console.log("Successfully saved the post.");
        } else {
            console.log("Post already exists, not saving in the database.");
        }
    } catch (error) {
        console.error('Error saving the post:', error);
    } finally {
        client.release();
    }
}

// Example usage
const newPost: any = {
    title: 'My First Post',
    content: 'This is the content of my first post.',
    author: 'John Doe'
};

savePost(newPost)
    .then(() => console.log('Post has been stored'))
    .catch(error => console.error('Error:', error));
