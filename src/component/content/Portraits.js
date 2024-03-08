import React from "react";
import "./Portraits.css";
import { useState } from "react";
import { PhotoAlbum } from "react-photo-album";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import slides from "./images.js";

const Portraits = () => {
  const [index, setIndex] = useState(-1);

  const images = [];

  for (let index = 0; index < slides.length; index++) {
    if (slides[index].tags === "portrait") {
      images.push(slides[index]);
    }
  }

  //   const slides = CustomImage.map(({ original }) => ({
  //     src: original
  //   }));

  //   const currentImage = CustomImage[index];
  //   const nextIndex = (index + 1) % CustomImage.length;
  //   const nextImage = CustomImage[nextIndex] || currentImage;
  //   const prevIndex = (index + CustomImage.length - 1) % CustomImage.length;
  //   const prevImage = CustomImage[prevIndex] || currentImage;

  const handleClick = (index) => {
    setIndex(index);
  };

  const handleClose = () => setIndex(-1);
  //   const handleMovePrev = () => setIndex(prevIndex);
  //   const handleMoveNext = () => setIndex(nextIndex);

  return (
    <div className="photo-album-container">
      <PhotoAlbum
        layout="masonry"
        photos={images}
        targetRowHeight={150}
        // onClick={({ index: current }) => setIndex(current)}
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

export default Portraits;
