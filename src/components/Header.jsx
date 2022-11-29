import { useState } from "react";
import IconMenu from "./Icons/IconMenu";
import Logo from "./Logo";
import Nav from "../components/Nav";
import IconCart from "./Icons/IconCart";
import Avatar from "../components/Avatar";

function Header() {
  const [statusMenu, setStatusMenu] = useState(false);
  const nav = document.querySelector(".nav");

  const handleMenu = (e) => {
    if (!statusMenu) {
      nav.style.transform = `translateX(0%)`;
      setStatusMenu(true);
    } else {
      nav.style.transform = `translateX(-100%)`;
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
      <div className="container-img">
        <IconCart />
        <Avatar />
      </div>
    </header>
  );
}

export default Header;
