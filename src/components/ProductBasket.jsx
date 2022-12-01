import IconDelete from "../components/Icons/IconDelete";
import ImgProduct1 from "../assets/image-product-1.jpg";

function ProductBasket() {
  return (
    <div className="header__cart-product">
      <div className="header__cart-product-item">
        <div>
          <img
            className="header__cart-img"
            src={ImgProduct1}
            alt="icon-product"
          />
        </div>
        <div className="header__cart-info">
          <p className="header__cart-p">Autumn Limited Edition...</p>
          <div className="header__cart-info-cost">
            <p className="header__cart-cost">$125.00</p>
            <p className="header__cart-count">x3</p>
            <p className="header__cart-total">$375.00</p>
          </div>
        </div>
      </div>
      <IconDelete />
    </div>
  );
}

export default ProductBasket;
