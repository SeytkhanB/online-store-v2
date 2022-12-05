import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/PageHero";

const PageHero = ({ title, single_product }) => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>
          <Link to="/">Home</Link>{" "}
          {single_product && <Link to="/products">/ Products</Link>} / {title}
        </h3>
      </div>
    </Wrapper>
  );
};

export default PageHero;
