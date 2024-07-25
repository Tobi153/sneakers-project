import React from "react";
import BtnCart from "./btnCart";
// import ImgProd1t from "../assets/images/image-product-1-thumbnail.jpg";
import CartContent from "./cartContent";
function Cart({ cart, product, count, src, setCart, ref, cartRef }) {
  return (
    <div className="cart-container" ref={cartRef}>
      <div className="cart-cover">
        <h3 className="cart-title">Cart</h3>
        <div className="cover">
          <div className="cart-content">
            {count && cart ? (
              <CartContent
                loc={src}
                name={product.name}
                price={product.price}
                c={count}
                cart={cart}
                setCart={setCart}
              />
            ) : (
              <p className="empty-cart">Your cart is empty.</p>
            )}
          </div>
          {count && cart ? (
            <BtnCart text="Checkout" customGap="customGap" />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Cart;
