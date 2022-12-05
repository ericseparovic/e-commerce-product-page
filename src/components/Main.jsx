import Carousel from "./Carousel";
import ProductInfo from "./ProductInfo";

function Main({ setProductInfo }) {
  return (
    <main className="main">
      <Carousel />
      <ProductInfo setProductInfo={setProductInfo} />
    </main>
  );
}

export default Main;
