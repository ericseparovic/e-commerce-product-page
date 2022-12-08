import { useState } from "react";
import IconMenu from "./Icons/IconMenu";
import Logo from "./Logo";
import Nav from "../components/Nav";
import IconCart from "./Icons/IconCart";
import Avatar from "../components/Avatar";
import Cart from "./Cart";

function Header({ productInfo, count, setProductInfo }) {
  const [statusMenu, setStatusMenu] = useState(false);

  const handleMenu = (e) => {
    const nav = document.querySelector(".nav--mobile");
    const bgOpacity = document.querySelector(".bg-opacity");

    if (!statusMenu) {
      nav.style.transform = `translateX(0%)`;
      bgOpacity.style.visibility = "visible";

      setStatusMenu(true);
    } else {
      nav.style.transform = `translateX(-100%)`;
      bgOpacity.style.visibility = "hidden";
      setStatusMenu(false);
    }
  };

  const [statusBasket, setStatusBasket] = useState(false);

  const handleCartBasket = () => {
    const basket = document.querySelector(".header__cart-container");
    if (!statusBasket) {
      basket.style.transform = "translateY(0%)";
      setStatusBasket(true);
    } else {
      basket.style.transform = "translateY(-160%)";
      setStatusBasket(false);
    }
  };

  window.addEventListener("resize", (e) => {
    const nav = document.querySelector(".nav--mobile");
    const bgOpacity = document.querySelector(".bg-opacity");
    if (screen.width >= 1440) {
      nav.style.transform = `translateX(0%)`;
      bgOpacity.style.visibility = "hidden";
    } else {
      nav.style.transform = `translateX(-100%)`;
      bgOpacity.style.visibility = "hidden";
      setStatusMenu(false);
    }
  });

  return (
    <header className="header">
      <div className="header--container">
        <div className="container-img">
          <IconMenu handleMenu={handleMenu} />
          <Logo />
          <Nav handleMenu={handleMenu} />
        </div>
        <Cart productInfo={productInfo} setProductInfo={setProductInfo} />
        <div className="container-img">
          <div className="cart-count">{productInfo == "" ? 0 : count || 0}</div>
          <IconCart handleCartBasket={handleCartBasket} />
          <Avatar />
        </div>
      </div>
    </header>
  );
}

export default Header;
