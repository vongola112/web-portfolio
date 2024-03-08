import React from "react";
import "./Portraits.css";
import { useState } from "react";
import { PhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import slides from "./images.js";

const Travel = () => {
  const [index, setIndex] = useState(-1);

  const images = [];

  for (let index = 0; index < slides.length; index++) {
    if (slides[index].tags === "travel") {
      images.push(slides[index]);
    }
  }
  const handleClose = () => setIndex(-1);
  const handleClick = (index) => {
    setIndex(index);
  };

  return (
    <div className="photo-album-container">
      <PhotoAlbum
        layout="masonry"
        photos={images}
        targetRowHeight={150}
        onClick={({ index: current }) => handleClick(current)}
      />

      <Lightbox
        index={index}
        slides={images}
        open={index >= 0}
        close={handleClose}
      />
    </div>
  );
};

export default Travel;
