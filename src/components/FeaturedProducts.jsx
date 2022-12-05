import { useProductsContext } from "../context/products_context";
import { Link } from "react-router-dom";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";
import Wrapper from "../assets/wrappers/FeaturedProducts";

const FeaturedProducts = () => {
  const {
    isProducts_loading: isLoading,
    isProducts_error: isError,
    featured_products: featured,
  } = useProductsContext();

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <Wrapper className="section">
      <div className="title">
        <h2>featured products</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center featured">
        {featured.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
      <Link to="/products" className="btn">
        all products
      </Link>
    </Wrapper>
  );
};

export default FeaturedProducts;
