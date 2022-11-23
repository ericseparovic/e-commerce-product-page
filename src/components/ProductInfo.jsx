import Cart from "./Cart";
import IconPlus from "../assets/icon-plus.svg";
import IconMinus from "../assets/icon-minus.svg";

function ProductInfo() {
  return (
    <section className="main__product-info">
      <p className="main__product-info-p">Sneaker Company</p>
      <h1 className="main__product-info-h1">Fall Limited Edition Sneakers</h1>
      <p className="main__product-description">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer
      </p>
      <div className="main__product-info-cost">
        <div className="main__product-cost-porcent">
          <p className="main__product-cost">$125</p>
          <p className="main__product-porcent">50%</p>
        </div>
        <p className="main_product-discount">$250</p>
      </div>

      <div className="main__product-buttons">
        <div className="btn-count-container">
          <button className="btn-count btn-minus">
            <img src={IconMinus} alt="icon-minus" />
          </button>
          <input value={0} className="main__product-input" type="number" />
          <button className="btn-count btn-plus">
            <img src={IconPlus} alt="icon-plus" />
          </button>
        </div>
        <button className="btn-cart">
          <Cart />
          Add to cart
        </button>
      </div>
    </section>
  );
}

export default ProductInfo;
