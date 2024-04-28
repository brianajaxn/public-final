import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { supabase } from '../client'
import SearchBar from '../components/SearchBar';

const ReadPosts = (props) => {

    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [sortBy, setSortBy] = useState('recent'); // Default sorting order

    useEffect(() => {
        const fetchPosts = async () => {
            const {data} = await supabase
            .from('posts')
            .select()
            .order('created_at', { ascending: sortBy === 'recent' })
          // set state of posts
          setPosts(data);
          setFilteredPosts(data); // Initialize filtered posts with all posts
        }
        fetchPosts();
    }, [props, sortBy]);

    const handleSearch = (query) => {
        const filtered = posts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()));
        setFilteredPosts(filtered);
      };

      const handleSortChange = (event) => {
        setSortBy(event.target.value);
      };
    
    
    return (
        <div className="ReadPostsContainer">
      <div className="SearchAndSortContainer">
        <SearchBar onSearch={handleSearch} />
        <label htmlFor="sortBy">Sort by:</label>
        <select id="sortBy" value={sortBy} onChange={handleSortChange}>
          <option value="recent">Oldest</option>
          <option value="oldest">Recent</option>
        </select>
      </div>
      <br></br>
      <div className="PostsContainer">
        {filteredPosts && filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Card
              key={post.id}
              id={post.id}
              title={post.title}
              author={post.author}
              description={post.description}
              imageUrl={post.imageUrl}
              createdAt={new Date(post.created_at).toLocaleString()}
            />
          ))
        ) : (
          <h2>{'No Posts Found 😞'}</h2>
        )}
      </div>
    </div>
  );
};


export default ReadPosts;