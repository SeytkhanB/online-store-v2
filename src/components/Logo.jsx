import styled from "styled-components";

export const Logo = () => {
  return (
    <Wrapper>
      <span>Online</span> store
    </Wrapper>
  );
};

const Wrapper = styled.h3`
  margin-bottom: 0;
  color: var(--clr-grey-1);
  span {
    color: var(--clr-primary-5);
  }
`;
