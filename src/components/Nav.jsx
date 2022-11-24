import IconClose from "./Icons/IconClose";

function Nav() {
  return (
    <nav className="nav">
      <IconClose />
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
