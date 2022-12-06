import IconPlus from "./Icons/IconPlus";
import IconMinus from "./Icons/IconMinus";
import Button from "../components/Button";

function ProductInfo({
  setProductInfo,
  handleCountMinus,
  handleCountPlus,
  count,
}) {
  const handleAddToCart = () => {
    const productInfoHTML = document.querySelector(".main__product-info");
    const img = document.querySelector(".main__img-product").src;

    const titleHTML = productInfoHTML.querySelector(
      ".main__product-info-h1"
    ).innerHTML;
    const costHTML = productInfoHTML.querySelector(
      ".main__product-cost"
    ).innerHTML;
    const countHTML = productInfoHTML.querySelector(
      ".main__product-input"
    ).value;

    const info = {
      title: titleHTML,
      cost: costHTML,
      count: countHTML,
      img: img,
    };

    setProductInfo(info);
  };

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
          <button
            onClick={handleCountMinus}
            className="btn-count btn-minus minus"
          >
            <IconMinus />
          </button>
          <input
            id="count-input"
            className="main__product-input"
            type="number"
            value={count || 1}
          />
          <button className="btn-count btn-plus plus" onClick={handleCountPlus}>
            <IconPlus />
          </button>
        </div>
        <Button
          handleAddToCart={handleAddToCart}
          icon={true}
          value={"Add to cart"}
        />
      </div>
    </section>
  );
}

export default ProductInfo;
