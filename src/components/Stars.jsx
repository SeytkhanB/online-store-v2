import Wrapper from "../assets/wrappers/Stars";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Stars = ({ stars = 4.9, reviews = 69 }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const halfNumber = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= halfNumber ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  return (
    <Wrapper>
      <div className="stars">{tempStars}</div>
      <p className="reviews">({reviews} customer reviews)</p>
    </Wrapper>
  );
};

export default Stars;
