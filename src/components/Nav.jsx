import IconClose from "./Icons/IconClose";

function Nav({ handleMenu }) {
  return (
    <nav className="nav--mobile nav--desktop">
      <IconClose handleMenu={handleMenu} />
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
