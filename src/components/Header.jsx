import IconMenu from "./Icons/IconMenu";
import Logo from "./Logo";
import Nav from "../components/Nav";
import IconCart from "./Icons/IconCart";
import Avatar from "../components/Avatar";

function Header() {
  return (
    <header className="header">
      <div className="container-img">
        <IconMenu />
        <Logo />
      </div>
      <Nav />
      <div className="container-img">
        <IconCart />
        <Avatar />
      </div>
    </header>
  );
}

export default Header;
