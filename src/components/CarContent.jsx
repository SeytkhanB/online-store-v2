import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";
import Wrapper from "../assets/wrappers/CarContent";

const CartContent = () => {
  const { cart, clearCart } = useCartContext();

  return (
    <Wrapper className="section section-center">
      <CartColumns />
      {cart.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <hr />
      <div className="link-container">
        <Link to="/products" className="link-btn">
          continue shopping
        </Link>
        <button onClick={clearCart} className="link-btn clear-btn">
          clear cart
        </button>
      </div>
      <CartTotals />
    </Wrapper>
  );
};
export default CartContent;
