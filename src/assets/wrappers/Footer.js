import styled from "styled-components";

const Wrapper = styled.footer`
  height: 5rem;
  background: var(--clr-black);
  text-align: center;
  max-width: 2200px;
  margin: 0 auto;
  span,
  a {
    color: var(--clr-primary-5);
  }
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  h5,
  span {
    margin-left: 5px;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`;
export default Wrapper;
