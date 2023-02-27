import React, { useState } from "react"
import ImageCard from './ImageCard'
import '../css/ImageGallery.css'

const ImageGallery = ({ onSearchSubmit, images }) => {

  const [query, setQuery] = useState("");


  // searching for images   
  const onFormSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(query);
    setQuery("");
  };

  return (
    <>
      <div className="main">
        <section className="hero">
          <h1>Search Images</h1>
          <form className="search" onSubmit={onFormSubmit}>
            <input
              type="text"
              onChange={(e) => setQuery(e.target.value.toLowerCase())}
              value={query}
            />
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </section>
        
        <section id="gallery">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </section>
      </div>
    </>
  );
};

export default ImageGallery;
