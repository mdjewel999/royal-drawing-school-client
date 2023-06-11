

import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";
import { Helmet } from "react-helmet-async";
import { Elements } from "@stripe/react-stripe-js";

// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
console.log(stripePromise);
const Payment = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));
  return (
    <div className="bg-yellow-50 w-3/4 px-4 h-full">
        <Helmet>
            <title>Payment</title>
        </Helmet>
      <SectionTitle
        subHeading="please process"
        heading="Payment"
      ></SectionTitle>
      <h2 className="text-3xl mb-4 text-center">*****The Students Payment******</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm cart={cart} price={price}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
