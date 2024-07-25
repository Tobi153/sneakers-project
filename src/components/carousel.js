import React, { useEffect } from "react";
import ProductImages from "./productImages";
import { ReactComponent as IconNext } from "../assets/images/icon-next.svg";
import { ReactComponent as IconPrev } from "../assets/images/icon-previous.svg";
import { ReactComponent as IconClose } from "../assets/images/icon-close.svg";
import img1 from "../assets/images/image-product-1.jpg";
import img2 from "../assets/images/image-product-2.jpg";
import img3 from "../assets/images/image-product-3.jpg";
import img4 from "../assets/images/image-product-4.jpg";

function Carousel({
  isOverlayVisible,
  handleOverlayVisibility,
  activeImage,
  setActiveImage,
}) {
  const images = [img1, img2, img3, img4];

  useEffect(() => {
    // Preload images
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

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
    <>
      {isOverlayVisible && (
        <div className="carousel-container">
          <IconClose className="icon-close" onClick={handleOverlayVisibility} />
          <div className="btn-arrows btn-prev" onClick={handlePrevImage}>
            <IconPrev className="icon-arrows icon-prev" />
          </div>
          <ProductImages
            customClass="carousel-img-1"
            custom="custom"
            custom2="custom2"
            activeImage={activeImage}
          />
          <div className="btn-arrows btn-next" onClick={handleNextImage}>
            <IconNext className="icon-arrows icon-next" />
          </div>
        </div>
      )}
    </>
  );
}

export default Carousel;
