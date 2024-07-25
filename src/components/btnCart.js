import { ReactComponent as IconCart } from "../assets/images/icon-cart.svg";

export default function BtnCart({ addToCart, text, customGap, shadow }) {
  return (
    <div className={`btn-big ${customGap} ${shadow}`} onClick={addToCart}>
      {!customGap ? <IconCart /> : null}
      <p className="img-text">{text}</p>
    </div>
  );
}
