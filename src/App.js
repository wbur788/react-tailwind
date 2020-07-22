import React, { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('dogs');

  useEffect(() => {
    fetch(`https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&page=1&query=${term}`)
      .then(res => res.json())
      .then(data => {
        setImages(data.results);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [term]);
 
  return (
    <div className="container mx-auto">
      <ImageSearch searchText={(text) => setTerm(text)}/>

      {!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1>
      }

      {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> :
      <div className="grid grid-cols-3 gap-4"> 
        {images.map(image => (
          <ImageCard key={image.id} image={image}/>
        ))}
      </div>}
    </div>
  );
}

export default App;
