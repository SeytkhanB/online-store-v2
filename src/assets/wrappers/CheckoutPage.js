import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
    img {
      max-width: 600px;
      margin: 0 auto;
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    }
    h2 {
      margin-top: 2rem;
    }
  }
`;
export default Wrapper;
