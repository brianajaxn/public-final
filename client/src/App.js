import './App.css';
import React, {useState} from 'react';
import { useRoutes } from 'react-router-dom'
import ReadPosts from './pages/ReadPosts'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import { Link } from 'react-router-dom'
import PostDetailsPage from './components/PostDetailsPage'; // Import the PostDetailsPage component



const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('lightpink');

  const handleBackgroundColorChange = (color) => {
    setBackgroundColor(color);
  };

  const descr = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'

  const posts = [
      {'id':'1', 
      'title': 'Cartwheel in Chelsea 🤸🏽‍♀️',
      'author':'Harvey Milian', 
      'description': descr},
      {'id':'2', 
      'title': 'Love Lock in Paris 🔒',
      'author':'Beauford Delaney', 
      'description':descr},
      {'id':'3', 
      'title': 'Wear Pink on Fridays 🎀',
      'author':'Onika Tonya', 
      'description':descr},
      {'id':'4', 
      'title': 'Adopt a Dog 🐶',
      'author':'Denise Michelle', 
      'description':descr},
  ]
 

  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element:<ReadPosts data={posts}/>
    },
    {
      path:"/edit/:id",
      element: <EditPost data={posts} />
    },
    {
      path:"/new",
      element: <CreatePost />
    },
    {
      path:"/post/:id",
      element: <PostDetailsPage />
    },
  ]);

  return ( 

    <div className="App" style={{ backgroundColor }}>

      <div className="header">
        <h1>🐈 CatHub 🐈</h1>
        <Link to="/"><button className="headerBtn"> Explore Posts 🔍  </button></Link>
        <Link to="/new"><button className="headerBtn"> Create Post 📷 </button></Link>
        <div className="colorSelector">
        <p>Select your preferred background color:</p>
        <div className="buttonContainer">
      <button className="colorButton" onClick={() => handleBackgroundColorChange('lightpink')}>Light Pink</button>
      <button className="colorButton" onClick={() => handleBackgroundColorChange('lavender')}>Lavender</button>
      </div>
      </div>
      </div>
        {element}
    </div>

  );
}

export default App;