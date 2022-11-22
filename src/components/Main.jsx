import ImgProduct1 from "../assets/image-product-1.jpg";
import ImgProduct2 from "../assets/image-product-2.jpg";
import ImgProduct3 from "../assets/image-product-3.jpg";
import ImgProduct4 from "../assets/image-product-4.jpg";
import Cart from "./Cart";

function Main() {
  return (
    <main className="main">
      <section className="main__products">
        <img className="main__img-product" src={ImgProduct1} alt="Product 1" />
        <img className="main__img-product" src={ImgProduct2} alt="Product 2" />
        <img className="main__img-product" src={ImgProduct3} alt="Product 3" />
        <img className="main__img-product" src={ImgProduct4} alt="Product 4" />
      </section>
      <section>
        <p>Sneaker Company</p>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer
        </p>
        <p>$125</p>
        <p>50%</p>
        <p>$250</p>
        <input type="number" />
        <button>
          <Cart />
          Add to cart
        </button>
      </section>
    </main>
  );
}

export default Main;
