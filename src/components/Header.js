import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import { ReactComponent as IconMenu } from "../assets/images/icon-menu.svg";
import { ReactComponent as IconClose } from "../assets/images/icon-close.svg";
import { ReactComponent as IconCart } from "../assets/images/icon-cart.svg";
import avatar from "../assets/images/image-avatar.png";
import ImgProd1t from "../assets/images/image-product-1-thumbnail.jpg";
import Cart from "./cart";

function Header({
  count,
  product,
  cart,
  setCart,
  isNavVisible,
  setIsNavVisible,
  isSmallScreen,
}) {
  const [isCartVisible, setIsCartVisible] = useState(false);
  function handleVisibility() {
    setIsCartVisible((isCartVisible) => !isCartVisible);
  }

  function handleNavVisibility() {
    setIsNavVisible(!isNavVisible);
  }
  document.addEventListener("click", isCartVisible ? handleVisibility : null);
  // let menuRef = useRef()
  //   useEffect(() => {
  //     let handler = (e) => {
  //       if (e.target) {
  //         setIsCartVisible(false);
  //       }
  //     };

  //     document.addEventListener("mousedown", handler);
  //   });
  return (
    <header>
      <nav className="navBar">
        {/* {!isCartVisible && (
          <IconMenu onClick={handleNavVisibility} className="icon-menu" />
        )}
        {!isNavVisible && (
          <IconClose className="icon-close2" onClick={handleNavVisibility} />
        )} */}
        {!isNavVisible && isSmallScreen ? (
          <IconMenu onClick={handleNavVisibility} className="icon-menu" />
        ) : (
          <IconClose className="icon-close2" onClick={handleNavVisibility} />
        )}
        <div className="logo">
          <a href="App.js">
            <img src={logo} alt="App logo" />
          </a>
        </div>

        <>
          <div
            className={`nav-overlay ${!isNavVisible ? `display-none` : null}`}
            onClick={handleNavVisibility}
          ></div>
          <ul
            className={`navLinks ${isSmallScreen ? `navLinks-mobile` : null} ${
              !isNavVisible ? `display-none` : null
            }`}
          >
            <li>
              <a href="collections.js">Collections</a>
            </li>
            <li>
              <a href="men.js">Men</a>
            </li>
            <li>
              <a href="women.js">Women</a>
            </li>
            <li>
              <a href="about.js">About</a>
            </li>
            <li>
              <a href="contact.js">Contact</a>
            </li>
          </ul>
        </>
        <div className="userProfile">
          <IconCart className="cart" onClick={() => handleVisibility()} />
          {count && cart ? <div className="counter">{count}</div> : ""}

          <img src={avatar} alt="User avatar" className="avatar" />
        </div>
      </nav>
      {isCartVisible && (
        <Cart
          product={product}
          count={count}
          src={ImgProd1t}
          cart={cart}
          setCart={setCart}
        />
      )}
    </header>
  );
}

export default Header;
