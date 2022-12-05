import { useAuth0 } from "@auth0/auth0-react";
import Wrapper from "../assets/wrappers/AuthWrapper";
import { Loading } from "../components";

function AuthWrapper({ children }) {
  const { isLoading, error } = useAuth0();

  if (isLoading) {
    return (
      <Wrapper>
        <Loading />
      </Wrapper>
    );
  }

  if (error) {
    <Wrapper>
      <h1>{error.message}</h1>
    </Wrapper>;
  }

  return <>{children}</>;
}

export default AuthWrapper;
