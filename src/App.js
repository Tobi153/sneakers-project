import React from "react";
import { useState, useEffect } from "react";
import "./assets/css/App.css";
import Header from "./components/Header";
import ProductImages from "./components/productImages";
import ProductDetails from "./components/productDetails";
import Carousel from "./components/carousel";

import img1 from "./assets/images/image-product-1.jpg";
import img2 from "./assets/images/image-product-2.jpg";
import img3 from "./assets/images/image-product-3.jpg";
import img4 from "./assets/images/image-product-4.jpg";
import img1t from "./assets/images/image-product-1-thumbnail.jpg";
import img2t from "./assets/images/image-product-2-thumbnail.jpg";
import img3t from "./assets/images/image-product-3-thumbnail.jpg";
import img4t from "./assets/images/image-product-4-thumbnail.jpg";

function App() {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(false);
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [activeImage, setActiveImage] = useState(img1);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  function handleOverlayVisibility() {
    setOverlayVisible(!isOverlayVisible);
  }
  const product = {
    id: 1,
    name: "Fall Limited Edition Sneakers",
    quantity: 0,
    price: 125,
    img: "../assets/images/image-product-1-thumbnail.jpg",
  };

  const images = [img1, img2, img3, img4];
  const thumbnails = [img1t, img2t, img3t, img4t];
  return (
    <div className="App">
      <Carousel
        isOverlayVisible={isOverlayVisible}
        setOverlayVisible={setOverlayVisible}
        handleOverlayVisibility={handleOverlayVisibility}
        activeImage={activeImage}
        setActiveImage={setActiveImage}
      />
      <div className="container">
        <Header
          count={count}
          setCount={setCount}
          product={product}
          cart={cart}
          setCart={setCart}
          isNavVisible={isNavVisible}
          setIsNavVisible={setIsNavVisible}
          isSmallScreen={isSmallScreen}
        />
        {/* <Sidebar /> */}

        {/* <Cart product={product} count={count} /> */}
        <div className="grid--2-cols product-display">
          <ProductImages
            isOverlayVisible={isOverlayVisible}
            setOverlayVisible={setOverlayVisible}
            handleOverlayVisibility={handleOverlayVisibility}
            thumbnails={thumbnails}
            images={images}
            activeImage={activeImage}
            setActiveImage={setActiveImage}
            isSmallScreen={isSmallScreen}
          />
          <ProductDetails
            count={count}
            setCount={setCount}
            cart={cart}
            setCart={setCart}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
