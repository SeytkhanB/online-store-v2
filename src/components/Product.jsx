import { formatPrice } from "../utils/helpers";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Product";

const Product = ({ id, image, price, name }) => {
  return (
    <Wrapper>
      <div className="container">
        <img src={image} alt={name} />
        <Link to={`/products/${id}`} className="link">
          <FaSearch />
        </Link>
      </div>
      <footer>
        <h5>{name}</h5>
        <p>{formatPrice(price)}</p>
      </footer>
    </Wrapper>
  );
};

export default Product;
