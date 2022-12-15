import ImgProduct1 from "../assets/image-product-1.jpg";
import ImgProduct2 from "../assets/image-product-2.jpg";
import ImgProduct3 from "../assets/image-product-3.jpg";
import ImgProduct4 from "../assets/image-product-4.jpg";
import IconPrevious from "./Icons/IconPrevious";
import IconNext from "./Icons/IconNext";
import React from "react";
import ImgProduct1Thumbnail from "../assets/image-product-1.jpg";
import ImgProduct2Thumbnail from "../assets/image-product-2.jpg";
import ImgProduct3Thumbnail from "../assets/image-product-3.jpg";
import ImgProduct4Thumbnail from "../assets/image-product-4.jpg";
import IconCloseCarousel from "../components/Icons/IconCloseCarousel";

function Carousel() {
  let position = 0;

  const handleNext = (e) => {
    let photos = document.querySelector(".main__products");
    if (position > -3) position--;
    photos.style.transform = `translateX(${position * 25}%)`;
    ChangePhoto(position);
  };

  const handlePrevious = (e) => {
    let photos = document.querySelector(".main__products");
    if (position < 0) position++;
    photos.style.transform = `translateX(${position * 25}%)`;
    ChangePhoto(position);
  };

  function hiddenGallery() {
    const carrusel = document.querySelector(".container__carousel");
    const bgOpacity = document.querySelector(".bg-opacity");
    carrusel.style.transform = `translateY(-200%)`;
    bgOpacity.style.visibility = "hidden";
  }

  function ChangePhoto(position) {
    const AllGallery = document.querySelectorAll(".img-thumbnail-carousel");

    AllGallery.forEach((photo) => {
      if (Number(photo.id) == position) {
        photo.classList.add("img-thumbnail-carousel--active");
      } else {
        photo.classList.remove("img-thumbnail-carousel--active");
      }
    });
  }
  return (
    <div className="container__carousel">
      <IconPrevious handlePrevious={handlePrevious} />
      <IconNext handleNext={handleNext} />
      <IconCloseCarousel hiddenGallery={hiddenGallery} />
      <section className="carousel">
        <section className="main__products">
          <img
            className="main__img-product"
            src={ImgProduct1}
            alt="Product 1"
          />
          <img
            className="main__img-product"
            src={ImgProduct2}
            alt="Product 2"
          />
          <img
            className="main__img-product"
            src={ImgProduct3}
            alt="Product 3"
          />
          <img
            className="main__img-product"
            src={ImgProduct4}
            alt="Product 4"
          />
        </section>
      </section>
      <div className="main__product-gallery">
        <img
          src={ImgProduct1Thumbnail}
          alt="img-1"
          className="img-thumbnail-carousel img-thumbnail-carousel--active"
          id="0"
        />
        <img
          src={ImgProduct2Thumbnail}
          alt="img-2"
          className="img-thumbnail-carousel"
          id="-1"
        />
        <img
          src={ImgProduct3Thumbnail}
          alt="img-3"
          className="img-thumbnail-carousel"
          id="-2"
        />
        <img
          src={ImgProduct4Thumbnail}
          alt="img-4"
          className="img-thumbnail-carousel"
          id="-3"
        />
      </div>
    </div>
  );
}

export default Carousel;
