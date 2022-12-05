import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";

import {
  CardElement,
  useStripe,
  Elements,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import { formatPrice } from "../utils/helpers";
import { useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/StripeCheckout";

const promise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const CheckoutForm = () => {
  const { cart, total_amount, shipping_fee, clearCart } = useCartContext();
  const { myUser } = useUserContext();

  // STRIPE STUFF
  const [isSucceeded, setIsSucceeded] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  const stripe = useStripe();
  const element = useElements();
  const navigate = useNavigate();

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "10px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  const createPaymentIntent = async () => {
    try {
      const { data } = await axios.post(
        "/.netlify/functions/create-payment-intent",
        JSON.stringify({ cart, shipping_fee, total_amount })
      );
      setClientSecret(data.clientSecret);
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  };

  useEffect(() => {
    createPaymentIntent();
  }, []);

  const handleChange = async (e) => {
    setIsDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: element.getElement(CardElement),
      },
    });

    if (payload.error) {
      setError(`Payment failed: ${payload.error.message}`);
      setIsProcessing(false);
    } else {
      setError(null);
      setIsProcessing(false);
      setIsSucceeded(true);
      setTimeout(() => {
        clearCart();
        navigate("/");
      }, 2000);
    }
  };

  return (
    <div>
      {isSucceeded ? (
        <article>
          <h4>Thank you</h4>
          <h4>Your payment was successful!</h4>
          <h4>Redirecting to home page shortly</h4>
        </article>
      ) : (
        <article>
          <h4>Hello {myUser?.name}</h4>
          <p>Your total is {formatPrice(shipping_fee + total_amount)}</p>
          <p>Card number: 4242 4242 4242 4242</p>
        </article>
      )}
      <form id="payment-form" onSubmit={handleSubmit}>
        <CardElement
          id="card-element"
          options={cardStyle}
          onChange={handleChange}
        />
        <button
          disabled={isProcessing || isDisabled || isSucceeded}
          id="submit"
        >
          <span id="button-text">
            {isProcessing ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              "Pay"
            )}
          </span>
        </button>
        {/* show any error that happening while processing the payment */}
        {error && (
          <div className="card-error" role="alert">
            {error}
          </div>
        )}
        {/* show a success message upon completion */}
        <p className={isSucceeded ? "result-message" : "result-message hidden"}>
          Payment succeeded, see the result in your{" "}
          <a href="https://dashboard.stripe.com/test/payments" target="_blank">
            Stripe dashboard
          </a>{" "}
          Refresh the page to pay again
        </p>
      </form>
    </div>
  );
};

const StripeCheckout = () => {
  return (
    <Wrapper className="page-100">
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </Wrapper>
  );
};

export default StripeCheckout;
