import ErrorImg from "../assets/error.svg";

const Error = () => {
  return (
    <div className="section section-center text-center">
      <img src={ErrorImg} className="error-img" alt="Error img" />
      <h2>there was an error...</h2>
    </div>
  );
};

export default Error;
