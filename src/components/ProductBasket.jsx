import IconDelete from "../components/Icons/IconDelete";

function ProductBasket({ productInfo, handleDelete }) {
  const { title, cost, count, img } = productInfo;

  return (
    <div className="header__cart-product">
      <div className="header__cart-product-item">
        <div>
          <img className="header__cart-img" src={img} alt="icon-product" />
        </div>
        <div className="header__cart-info">
          <p className="header__cart-p">{title}</p>
          <div className="header__cart-info-cost">
            <p className="header__cart-cost">${cost}</p>
            <p className="header__cart-count">x {count}</p>
            <p className="header__cart-total">
              ${Number(cost) * Number(count)}
            </p>
          </div>
        </div>
      </div>
      <IconDelete handleDelete={handleDelete} />
    </div>
  );
}

export default ProductBasket;
