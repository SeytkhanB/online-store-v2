import { Link } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { FaTimes } from "react-icons/fa";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { useUserContext } from "../context/user_context";
import Wrapper from "../assets/wrappers/Sidebar";
import { Logo } from "./Logo";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext();
  const { myUser } = useUserContext();

  return (
    <Wrapper>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className="sidebar-header">
          <Logo />
          <button className="close-btn" onClick={closeSidebar} type="button">
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link onClick={closeSidebar} to={url}>
                  {text}
                </Link>
              </li>
            );
          })}
          {myUser && (
            <li>
              <Link to="/checkout" onClick={closeSidebar}>
                checkout
              </Link>
            </li>
          )}
        </ul>
        <CartButtons />
      </aside>
    </Wrapper>
  );
};

export default Sidebar;
