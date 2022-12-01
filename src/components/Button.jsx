import IconCart from "./Icons/IconCart";

function Button({ value, icon }) {
  if (icon === true) {
    return (
      <button className="btn-cart">
        <IconCart />
        {value}
      </button>
    );
  }

  return <button className="btn-cart">{value}</button>;
}

export default Button;
