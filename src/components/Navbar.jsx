import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";
import Wrapper from "../assets/wrappers/Navbar";
import { Logo } from "./Logo";

const Nav = () => {
  const { openSidebar } = useProductsContext();
  const { myUser } = useUserContext();

  return (
    <Wrapper>
      <div className="nav-center">
        <div className="nav-header">
          <Logo />
          <button className="nav-toggle" onClick={openSidebar} type="button">
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
          {myUser && (
            <li>
              <Link to="/checkout">checkout</Link>
            </li>
          )}
        </ul>
        <CartButtons />
      </div>
    </Wrapper>
  );
};

export default Nav;
