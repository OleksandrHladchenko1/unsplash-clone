import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from 'react-router-dom';

export const client_id = 'rg7MdRgBIDIorh8dhiC1DTpsYOxrJtomnNG6PBtQ1e0';
const UnsplashContext = React.createContext();

const rootUrl = "https://api.unsplash.com";
const searchUrl = `${rootUrl}/search/photos`;
const getPhotosUrl = `${rootUrl}/photos/random/?count=50&client_id=${client_id}`;

const ImageProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const { search } = useLocation();

  const getImages = async () => {
    await axios
      .get(getPhotosUrl)
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => console.log(error));
  };

  const searchImages = async (term) => {
    await axios
      .get(searchUrl + term + `&client_id=${client_id}`)
      .then((response) => setImages(response.data.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    search ? searchImages(search) : getImages();
  }, [search]);

  return (
    <UnsplashContext.Provider
      value={{
        images,
        search,
        getImages,
        searchImages,
      }}
    >
      {children}
    </UnsplashContext.Provider>
  );
};

export { UnsplashContext, ImageProvider };