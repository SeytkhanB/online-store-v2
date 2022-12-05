import Wrapper from "../assets/wrappers/Contact";

const Contact = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>Join our mewsletter and get 20% off</h3>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            culpa laboriosam minima veniam cumque, iure modi fuga dolorum
            tempora, consectetur neque.
          </p>
          <form
            className="contact-form"
            action="https://formspree.io/f/mdojwkvy"
            method="POST"
          >
            <input
              type="email"
              className="form-input"
              placeholder="Enter email"
              name="email"
            />
            <button className="submit-btn" type="submit">
              subscribe
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
