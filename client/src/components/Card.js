import React from 'react'
import { useState } from 'react'
import './Card.css'
import more from './more.png'
import { Link } from 'react-router-dom'


const Card = (props) =>  {

  const [count, setCount] = useState(0)
  const updateCount = () => {
    setCount((count) => count + 1);
  }

  return (
    <div className="Card">
        <Link to={'edit/'+ props.id}><img className="moreButton" alt="edit button" src={more} /></Link>
        <Link to={`/post/${props.id}`}><h2>{props.title}</h2></Link>
        <h3 className="author">{"by " + props.author}</h3>
        <p className="description">{props.description}</p>
        <p className="imageUrl">{props.imageUrl && <img src={props.imageUrl} alt="Post" style={{ width: '200px', height: 'auto' }} />}</p>
        <p className="createdAt">created at: {props.createdAt}</p> 
        <button className="betButton" onClick={updateCount} >❤️ Likes: {count}</button>
    </div>
);
};
export default Card;