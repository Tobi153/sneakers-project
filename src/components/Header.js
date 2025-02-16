import React, { useState, useRef, useEffect } from "react";
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
  const cartRef = useRef(null);

  function handleVisibility() {
    setIsCartVisible((prevIsCartVisible) => !prevIsCartVisible);
  }

  function handleNavVisibility() {
    setIsNavVisible((prevIsNavVisible) => !prevIsNavVisible);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartVisible(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cartRef]);

  return (
    <header>
      <nav className="navBar">
        {!isNavVisible && isSmallScreen ? (
          <IconMenu onClick={handleNavVisibility} className="icon-menu" />
        ) : (
          <IconClose className="icon-close2" onClick={handleNavVisibility} />
        )}
        <div className="logo">
          <a href="/">
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
              <a href="/">Collections</a>
            </li>
            <li>
              <a href="/">Men</a>
            </li>
            <li>
              <a href="/">Women</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </>
        <div className="userProfile">
          <IconCart className="cart" onClick={handleVisibility} />
          {count && cart ? <div className="counter">{count}</div> : ""}

          <img src={avatar} alt="User avatar" className="avatar" />
        </div>
      </nav>
      {isCartVisible && (
        <div ref={cartRef}>
          <Cart
            product={product}
            count={count}
            src={ImgProd1t}
            cart={cart}
            setCart={setCart}
          />
        </div>
      )}
    </header>
  );
}

export default Header;
