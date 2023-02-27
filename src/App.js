import React, { useState, useEffect } from 'react'
import './App.css';
import ImageGallery from './components/ImageGallery';
import axios from 'axios';


function App() {

  const [images, setImages] = useState([]);

  // getting random images

  useEffect(() => {
    const loadRandomeImg = async () => {
      const url = `https://api.unsplash.com/search/photos?query=random&&client_id=${process.env.REACT_APP_ACCESS_KEY}`;
      const res = await axios.get(url);
      setImages(res.data.results);
    }
    loadRandomeImg()
  }, [])
  

  // searching images with query 

  const searchImg = async (query) => {
    const url = `https://api.unsplash.com/search/photos?query=${query || "random"}&&client_id=${process.env.REACT_APP_ACCESS_KEY}`;
    const res = await axios.get(url);
    setImages(res.data.results);
  }



  return (
    <div className="App">
      <ImageGallery onSearchSubmit={searchImg} images={images} />
    </div>
  );
}

export default App;
