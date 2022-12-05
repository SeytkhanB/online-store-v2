import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import { CartContent, PageHero } from "../components";
import Wrapper from "../assets/wrappers/CartPage";
import EmptyCartImg from "../assets/empty-cart.svg";

const CartPage = () => {
  const { cart } = useCartContext();

  if (cart.length === 0) {
    return (
      <main>
        <PageHero title="cart" />
        <Wrapper className="page-100">
          <div className="empty">
            <img src={EmptyCartImg} alt="Image" />
            <h2>Cart is empty</h2>
            <Link to="/products" className="btn">
              fill it
            </Link>
          </div>
        </Wrapper>
      </main>
    );
  }

  return (
    <main>
      <PageHero title="cart" />
      <Wrapper className="page">
        <CartContent />
      </Wrapper>
    </main>
  );
};

export default CartPage;
