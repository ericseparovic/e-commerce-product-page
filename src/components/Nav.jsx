import IconClose from "../assets/icon-close.svg";

function Nav() {
  return (
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
  );
}

export default Nav;
