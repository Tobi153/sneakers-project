import IconDelete from "../assets/images/icon-delete.svg";

export default function CartContent({ loc, name, price, c, cart, setCart }) {
  function removeCart() {
    const confirmed = window.confirm(
      "Are you sure you want to delete your cart items?"
    );
    if (confirmed) setCart(false);
  }
  return (
    <>
      <img
        src={loc}
        alt="Product"
        style={{ width: "15%", borderRadius: "3px" }}
      />
      <div>
        <p>{name}</p>
        <p>
          ${price}.00 x {c} <strong>${Number(price) * Number(c)}.00</strong>
        </p>
      </div>
      <img
        src={IconDelete}
        alt="Delete icon"
        className="icon-delete"
        onClick={() => removeCart()}
      />
    </>
  );
}
