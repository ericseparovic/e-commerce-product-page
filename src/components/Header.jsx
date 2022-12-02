import { useState } from "react";
import IconMenu from "./Icons/IconMenu";
import Logo from "./Logo";
import Nav from "../components/Nav";
import IconCart from "./Icons/IconCart";
import Avatar from "../components/Avatar";
import Cart from "./Cart";

function Header() {
  const [statusMenu, setStatusMenu] = useState(false);

  const handleMenu = (e) => {
    const nav = document.querySelector(".nav");
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

  return (
    <header className="header">
      <div className="container-img">
        <IconMenu handleMenu={handleMenu} />
        <Logo />
      </div>
      <Nav handleMenu={handleMenu} />
      <Cart />
      <div className="container-img">
        <div className="cart-count">0</div>
        <IconCart />
        <Avatar />
      </div>
    </header>
  );
}

export default Header;
