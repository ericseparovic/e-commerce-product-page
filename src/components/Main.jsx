import Carousel from "./Carousel";
import ProductInfo from "./ProductInfo";
import ImgProduct1 from "../assets/image-product-1.jpg";
import ImgProduct2 from "../assets/image-product-2.jpg";
import ImgProduct3 from "../assets/image-product-3.jpg";
import ImgProduct4 from "../assets/image-product-4.jpg";
import ImgProduct1Thumbnail from "../assets/image-product-1.jpg";
import ImgProduct2Thumbnail from "../assets/image-product-2.jpg";
import ImgProduct3Thumbnail from "../assets/image-product-3.jpg";
import ImgProduct4Thumbnail from "../assets/image-product-4.jpg";

function Main({ setProductInfo, handleCountMinus, handleCountPlus, count }) {
  function handleShowGallery(e) {
    if (e.target.className !== "img-product") {
      return;
    }
    const carrusel = document.querySelector(".container__carousel");
    const bgOpacity = document.querySelector(".bg-opacity");
    carrusel.style.transform = `translateY(0%)`;
    bgOpacity.style.visibility = "visible";
  }

  function handleChangePhoto(e) {
    const gallery = document.querySelector(".img-product");
    const AllGallery = document.querySelectorAll(".img-thumbnail");

    AllGallery.forEach((photo) => {
      if (e.target.alt == photo.alt) {
        photo.classList.add("img-thumbnail--active");
      } else {
        photo.classList.remove("img-thumbnail--active");
      }
    });

    if (e.target.nodeName !== "IMG") {
      return;
    }

    switch (e.target.alt) {
      case "img-1":
        gallery.src = ImgProduct1;
        break;
      case "img-2":
        gallery.src = ImgProduct2;
        break;
      case "img-3":
        gallery.src = ImgProduct3;
        break;
      case "img-4":
        gallery.src = ImgProduct4;
        break;
    }
  }

  window.addEventListener("resize", () => {
    const carrusel = document.querySelector(".container__carousel");
    if (screen.width <= 1000) {
      carrusel.style.transform = `translateY(0%)`;
    } else {
      carrusel.style.transform = `translateY(-200%)`;
    }
  });

  return (
    <main className="main">
      <div className="container__main">
        <div className="main__product--desktop">
          <div className="main__product-photo">
            <img
              onClick={handleShowGallery}
              className="img-product"
              src={ImgProduct1}
              alt="img-product-1"
            />
          </div>
          <div className="main__product-gallery">
            <img
              onClick={handleChangePhoto}
              src={ImgProduct1Thumbnail}
              alt="img-1"
              className="img-thumbnail img-thumbnail--active"
            />
            <img
              onClick={handleChangePhoto}
              src={ImgProduct2Thumbnail}
              alt="img-2"
              className="img-thumbnail"
            />
            <img
              onClick={handleChangePhoto}
              src={ImgProduct3Thumbnail}
              alt="img-3"
              className="img-thumbnail"
            />
            <img
              onClick={handleChangePhoto}
              src={ImgProduct4Thumbnail}
              alt="img-4"
              className="img-thumbnail"
            />
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
