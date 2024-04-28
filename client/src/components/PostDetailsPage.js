import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';
import Card from './Card'; // Import your Card component

const PostDetailsPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [newComment, setNewComment] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        // Fetch post details
        const { data: post } = await supabase.from('posts').select().eq('id', id).single();
        setPost(post);        
      } catch (error) {
        console.error('Error fetching post details:', error);
      }
    };

    fetchPostDetails();
  }, [id]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      // Save the new comment to the database
      await supabase.from('comments').insert({
        post_id: id,
        content: newComment,
        
      });
      // Clear the input field and hide the comment form
      setNewComment('');
    } catch (error) {
      console.error('Error submitting comment:', error.message);
      setError('Error submitting comment');
    }
  };


  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Card
        id={post.id}
        title={post.title}
        author={post.author}
        description={post.description}
        imageUrl={post.imageUrl}
        createdAt={post.createdAt}
      />
    <p>comment: so cute!</p>
    {/* Display error message if there is an error */}
    {error && <div>Error: {error}</div>}
      {/* Comment form */}
      <form onSubmit={handleCommentSubmit}>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Enter your comment..."
          required
        />
        <button type="submit">Submit Comment</button>
      </form>
    </div>
  );
};

export default PostDetailsPage;
