import IconMenu from "../assets/icon-menu.svg";
import LogoSneakers from "../assets/logo.svg";
import IconCart from "../assets/icon-cart.svg";
import Avatar from "../assets/image-avatar.png";
import IconClose from "../assets/icon-close.svg";

function Header() {
  return (
    <header className="header">
      <div>
        <img className="header__img-menu" src={IconMenu} alt="icon-menu" />
        <img className="header__img-logo" src={LogoSneakers} alt="logo" />
      </div>
      <nav className="nav">
        <img className="nav__img-close" src={IconClose} alt="icon-close" />
        <a className="nav__a" href="#">
          Collections
        </a>
        <a className="nav__a" href="#">
          Men
        </a>
        <a className="nav__a" href="#">
          Woman
        </a>
        <a className="nav__a" href="#">
          About
        </a>
        <a className="nav__a" href="#">
          Contact
        </a>
      </nav>
      <div>
        <img className="header__img-cart" src={IconCart} alt="icon-cart" />
        <img className="header__img-avatar" src={Avatar} alt="avatar" />
      </div>
    </header>
  );
}

export default Header;
