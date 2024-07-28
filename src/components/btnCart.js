export default function BtnCart({ addToCart, shadow, children }) {
  return (
    <div className={`btn-big ${shadow}`} onClick={addToCart}>
      {children}
    </div>
  );
}
