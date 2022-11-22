import IconMenu from "../assets/icon-menu.svg";
import Logo from "./Logo";
import Nav from "../components/Nav";
import Cart from "./Cart";
import Avatar from "../components/Avatar";

function Header() {
  return (
    <header className="header">
      <div className="container-img">
        <img className="header__img-menu" src={IconMenu} alt="icon-menu" />
        <Logo />
      </div>
      <Nav />
      <div className="container-img">
        <Cart />
        <Avatar />
      </div>
    </header>
  );
}

export default Header;
