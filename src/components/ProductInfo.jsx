import IconPlus from "./Icons/IconPlus";
import IconMinus from "./Icons/IconMinus";
import Button from "../components/Button";

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
            <IconMinus />
          </button>
          <input
            className="main__product-input"
            type="number"
            placeholder="0"
          />
          <button className="btn-count btn-plus">
            <IconPlus />
          </button>
        </div>
        <Button icon={true} value={"Add to cart"} />
      </div>
    </section>
  );
}

export default ProductInfo;
