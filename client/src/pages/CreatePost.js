import React, { useState } from 'react';
import './CreatePost.css';
import { supabase } from '../client';

const CreatePost = () => {
  const [post, setPost] = useState({ title: '', author: '', description: '', imageUrl: '' });

  const createPost = async (event) => {
    event.preventDefault();

    await supabase.from('posts').insert(post);

    // Redirect to the home page after creating the post
    window.location = '/';
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <form onSubmit={createPost}>
        <label htmlFor="title">Title</label> <br />
        <input type="text" id="title" name="title" onChange={handleChange} />
        <br />
        <br />

        <label htmlFor="author">Author</label>
        <br />
        <input type="text" id="author" name="author" onChange={handleChange} />
        <br />
        <br />

        <label htmlFor="description">Description</label>
        <br />
        <textarea rows="5" cols="50" id="description" name="description" onChange={handleChange}></textarea>
        <br />
        <br />

        <label htmlFor="imageUrl">Image URL</label>
        <br />
        <input type="url" id="imageUrl" name="imageUrl" onChange={handleChange} />
        <br />
        <br />

        {/* Display the image preview if an image URL is provided */}
        {post.imageUrl && <img src={post.imageUrl} alt="Post" style={{ width: '200px', height: 'auto' }} />}
        <br />
        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default CreatePost;
