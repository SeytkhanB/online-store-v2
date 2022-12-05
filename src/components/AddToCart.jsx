import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
import AmountButtons from "./AmountButtons";
import Wrapper from "../assets/wrappers/AddToCart";

const AddToCart = ({single_product}) => {
  const { id, stock, colors } = single_product
  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const { addToCart } = useCartContext();

  const increase = () => {
    setAmount((prevAmount) => {
      if (prevAmount >= stock) {
        return (prevAmount = stock);
      }
      return prevAmount + 1;
    });
  };

  const decrease = () => {
    setAmount((prevAmount) => {
      if (prevAmount <= 1) {
        return (prevAmount = 1);
      }
      return prevAmount - 1;
    });
  };

  return (
    <Wrapper>
      <div className="colors">
        <span>colors : </span>
        <div>
          {colors.map((color, index) => (
            <button
              onClick={() => setMainColor(color)}
              className={`${
                mainColor === color ? "color-btn active" : "color-btn"
              }`}
              style={{ backgroundColor: color }}
              key={index}
            >
              {mainColor === color && <FaCheck />}
            </button>
          ))}
        </div>
      </div>
      <div className="btn-container">
        <AmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease}
        />
        <Link
          to="/cart"
          className="btn"
          onClick={() => addToCart(id, mainColor, amount, single_product)}
        >
          add to cart
        </Link>
      </div>
    </Wrapper>
  );
};

export default AddToCart;
