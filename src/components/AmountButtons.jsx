import { FaPlus, FaMinus } from "react-icons/fa";
import Wrapper from "../assets/wrappers/AmountButtons";

const AmountButtons = ({ amount, increase, decrease }) => {
  return (
    <Wrapper className="amount-btns">
      <button className="amount-btn" type="button" onClick={decrease}>
        <FaMinus />
      </button>
      <h2 className="amount">{amount}</h2>
      <button className="amount-btn" type="button" onClick={increase}>
        <FaPlus />
      </button>
    </Wrapper>
  );
};

export default AmountButtons;
