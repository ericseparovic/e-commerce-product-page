import Carousel from "./Carousel";
import ProductInfo from "./ProductInfo";

function Main({ setProductInfo, handleCountMinus, handleCountPlus, count }) {
  return (
    <main className="main">
      <Carousel />
      <ProductInfo
        setProductInfo={setProductInfo}
        handleCountMinus={handleCountMinus}
        handleCountPlus={handleCountPlus}
        count={count}
      />
    </main>
  );
}

export default Main;
