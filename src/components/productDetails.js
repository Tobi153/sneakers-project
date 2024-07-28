import { ReactComponent as IconMinus } from "../assets/images/icon-minus.svg";
import { ReactComponent as IconPlus } from "../assets/images/icon-plus.svg";
import BtnCart from "./btnCart";
import { ReactComponent as IconCart } from "../assets/images/icon-cart.svg";
function ProductDetails({ count, setCount, cart, setCart }) {
  const product = {
    id: 1,
    name: "Fall Limited Edition Sneakers",
    quantity: 0,
    price: 125,
  };
  function handlePlusCounter() {
    setCount((c) => c + 1);
  }
  function handleMinusCounter() {
    setCount((c) => (c > 0 ? c - 1 : 0));
  }
  const addToCart = () => {
    setCart((cart) => !cart);
    // setCount(0);
  };

  return (
    <div className="right-col">
      <h1 className="company">Sneaker Company</h1>
      <h2 className="title">{product.name}</h2>
      <p className="text">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="price">
        <div className="price-tag">
          <p className="new-price">
            $
            {product.quantity > 1
              ? product.price * product.quantity
              : product.price}
            .00
          </p>
          <p className="discount">50%</p>
        </div>
        <p className="old-price">$250.00</p>
      </div>
      <div className="btns-container">
        <div className="btnCounter">
          <IconMinus
            className="icon-counter icon-minus"
            onClick={() => handleMinusCounter()}
          />

          <p className="count">{count}</p>

          <IconPlus
            className="icon-counter icon-plus"
            onClick={() => handlePlusCounter()}
          />
        </div>
        <BtnCart
          addToCart={() => (count ? addToCart() : null)}
          text=""
          shadow="shadow"
        >
          <span>
            <IconCart />
          </span>{" "}
          Add to cart
        </BtnCart>
      </div>
    </div>
  );
}

export default ProductDetails;
