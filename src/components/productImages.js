// import React, { useState } from "react";
import img1 from "../assets/images/image-product-1.jpg";
import img2 from "../assets/images/image-product-2.jpg";
import img3 from "../assets/images/image-product-3.jpg";
import img4 from "../assets/images/image-product-4.jpg";
import img1t from "../assets/images/image-product-1-thumbnail.jpg";
import img2t from "../assets/images/image-product-2-thumbnail.jpg";
import img3t from "../assets/images/image-product-3-thumbnail.jpg";
import img4t from "../assets/images/image-product-4-thumbnail.jpg";
import { ReactComponent as IconNext } from "../assets/images/icon-next.svg";
import { ReactComponent as IconPrev } from "../assets/images/icon-previous.svg";

function ProductImages({
  customClass,
  custom,
  custom2,
  activeImage,
  setActiveImage,
  handleOverlayVisibility,
  isOverlayVisible,
  isSmallScreen,
}) {
  const images = [img1, img2, img3, img4];
  const thumbnails = [img1t, img2t, img3t, img4t];
  const handleThumbnailClick = (image) => {
    if (!custom) {
      setActiveImage(image);
      handleOverlayVisibility();
    }
  };
  const handleNextImage = () => {
    const currentIndex = images.indexOf(activeImage);
    const nextIndex =
      currentIndex < images.length - 1 ? currentIndex + 1 : currentIndex;
    setActiveImage(images[nextIndex]);
  };

  const handlePrevImage = () => {
    const currentIndex = images.indexOf(activeImage);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : currentIndex;
    setActiveImage(images[prevIndex]);
  };
  return (
    <div className={`left-col ${custom2}`}>
      {isSmallScreen && (
        <div
          className={`btn-arrows btn-prev small-s small-s-p ${
            images.indexOf(activeImage) === 0 ? `display-none` : null
          }`}
          onClick={() => handlePrevImage()}
        >
          <IconPrev className="icon-arrows icon-prev " />
        </div>
      )}
      <div className="imgBox">
        <img
          src={customClass || isSmallScreen ? activeImage : img1}
          alt="Shoes collection"
          className={`img-1 ${customClass}`}
        />
      </div>
      {isSmallScreen && (
        <div
          className={`btn-arrows btn-next small-s small-s-n ${
            images.length - 1 === images.indexOf(activeImage)
              ? `display-none`
              : null
          }`}
          onClick={() => handleNextImage()}
        >
          <IconNext
            className="icon-arrows icon-next"
            onClick={() => setActiveImage(activeImage)}
          />
        </div>
      )}
      <div className={`grid--4-cols thumbnail ${custom}`}>
        {thumbnails.map((thumbnail, index) => (
          <div
            key={index}
            className={`img-container ${
              activeImage === images[index] ? "img-active" : ""
            }`}
            onClick={() => handleThumbnailClick(images[index])}
          >
            <img
              src={thumbnail}
              alt={`Shoes collection ${index + 1}`}
              className="prod-img"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductImages;
