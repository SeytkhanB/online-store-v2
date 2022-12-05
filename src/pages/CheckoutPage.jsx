import { PageHero, StripeCheckout } from "../components";
// extra imports
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/CheckoutPage";
import EmptyCartImg from "../assets/empty-cart.svg";

const CheckoutPage = () => {
  const { cart } = useCartContext();

  if (cart.length === 0) {
    return (
      <main>
        <PageHero title="checkout" />
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
    <Wrapper>
      <StripeCheckout />
    </Wrapper>
  );
};

export default CheckoutPage;
