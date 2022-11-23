import ImgProduct1 from "../assets/image-product-1.jpg";
import ImgProduct2 from "../assets/image-product-2.jpg";
import ImgProduct3 from "../assets/image-product-3.jpg";
import ImgProduct4 from "../assets/image-product-4.jpg";
import IconPrevious from "../assets/icon-previous.svg";
import IconNext from "../assets/icon-next.svg";

function Carousel() {
  return (
    <section className="carousel">
      <div className="btn btn-previous">
        <img src={IconPrevious} alt="icon-previous" />
      </div>
      <div className="btn btn-next">
        <img src={IconNext} alt="icon-next" />
      </div>
      <section className="main__products">
        <img className="main__img-product" src={ImgProduct1} alt="Product 1" />
        <img className="main__img-product" src={ImgProduct2} alt="Product 2" />
        <img className="main__img-product" src={ImgProduct3} alt="Product 3" />
        <img className="main__img-product" src={ImgProduct4} alt="Product 4" />
      </section>
    </section>
  );
}

export default Carousel;
