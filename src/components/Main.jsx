import Carousel from "./Carousel";
import ProductInfo from "./ProductInfo";
import ImgProduct1 from "../assets/image-product-1.jpg";
// import ImgProduct2 from "../assets/image-product-2.jpg";
// import ImgProduct3 from "../assets/image-product-3.jpg";
// import ImgProduct4 from "../assets/image-product-4.jpg";
import ImgProduct1Thumbnail from "../assets/image-product-1.jpg";
import ImgProduct2Thumbnail from "../assets/image-product-2.jpg";
import ImgProduct3Thumbnail from "../assets/image-product-3.jpg";
import ImgProduct4Thumbnail from "../assets/image-product-4.jpg";

function Main({ setProductInfo, handleCountMinus, handleCountPlus, count }) {
  return (
    <main className="main">
      <div className="container__main">
        <div className="main__product--desktop">
          <div className="main__product-photo">
            <img src={ImgProduct1} alt="img-product-1" />
          </div>
          <div className="main__product-gallery">
            <img src={ImgProduct1Thumbnail} alt="img-1" />
            <img src={ImgProduct2Thumbnail} alt="img-2" />
            <img src={ImgProduct3Thumbnail} alt="img-3" />
            <img src={ImgProduct4Thumbnail} alt="img-4" />
          </div>
        </div>
        <Carousel />
        <ProductInfo
          setProductInfo={setProductInfo}
          handleCountMinus={handleCountMinus}
          handleCountPlus={handleCountPlus}
          count={count}
        />
      </div>
    </main>
  );
}

export default Main;
