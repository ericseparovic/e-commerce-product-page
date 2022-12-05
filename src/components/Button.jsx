import IconCart from "./Icons/IconCart";

function Button({ value, icon, handleAddToCart }) {
  if (icon === true) {
    return (
      <button onClick={handleAddToCart} className="btn-cart">
        <IconCart />
        {value}
      </button>
    );
  }

  return <button className="btn-cart">{value}</button>;
}

export default Button;
