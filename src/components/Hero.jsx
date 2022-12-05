import { Link } from "react-router-dom";
import MainImg from "../assets/main.svg";
import Wrapper from "../assets/wrappers/Hero";

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <h2>
          We <span className="indigo-clr">enjoy</span> <br />
          our store
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          voluptatum rerum saepe, libero, esse facilis, architecto sapiente
          error ut fuga repellendus.
        </p>
        <Link to="/products" className="btn hero-btn">
          shop now
        </Link>
      </article>
      <article className="img-container">
        <img src={MainImg} alt="Main img" className="main-img" />
      </article>
    </Wrapper>
  );
};

export default Hero;
