import { Stripe } from "stripe";
import dotenv from "dotenv";
dotenv.config();

// this line doesn't work. why, I don't know. but it should work
// const stripe = Stripe(import.meta.env.VITE_STRIPE_SECRET_KEY);
const stripe = Stripe(process.env.VITE_STRIPE_SECRET_KEY);

exports.handler = async (event, context) => {
  const { cart, shipping_fee, total_amount } = JSON.parse(event.body);

  const calculateOrderAmount = () => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return shipping_fee + total_amount;
  };
  try {
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(),
      currency: "usd",
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
