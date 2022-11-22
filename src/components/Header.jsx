import IconMenu from "../assets/icon-menu.svg";
import LogoSneakers from "../assets/logo.svg";
import IconCart from "../assets/icon-cart.svg";
import Avatar from "../assets/image-avatar.png";
import Nav from "../components/Nav";

function Header() {
  return (
    <header className="header">
      <div className="box-img">
        <img className="header__img-menu" src={IconMenu} alt="icon-menu" />
        <img className="header__img-logo" src={LogoSneakers} alt="logo" />
      </div>
      <Nav />
      <div className="box-img">
        <img className="header__img-cart" src={IconCart} alt="icon-cart" />
        <img className="header__img-avatar" src={Avatar} alt="avatar" />
      </div>
    </header>
  );
}

export default Header;
