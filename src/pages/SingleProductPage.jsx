import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { single_product_url as url } from "../utils/constants";
import { formatPrice } from "../utils/helpers";
import Wrapper from "../assets/wrappers/SingleProductPage";
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from "../components";
import { Link } from "react-router-dom";

const SingleProductPage = () => {
  const {
    fetchSingleProduct,
    isSingle_product_loading: isLoading,
    isSingle_product_error: isError,
    single_product,
  } = useProductsContext();
  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchSingleProduct(`${url}${productId}`);
  }, []);

  useEffect(() => {
    if (isError) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [isError]);

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  const {
    name,
    price,
    images,
    id,
    company,
    description,
    category,
    stars,
    reviews,
    stock,
  } = single_product;

  return (
    <Wrapper>
      <PageHero title={name} single_product />
      <div className="section page section-center">
        <Link to="/products" className="btn">
          back to products
        </Link>
        <div className="product-center">
          <ProductImages images={images} />

          <section className="content">
            <h2>{name}</h2>

            <Stars stars={stars} reviews={reviews} />

            <h5 className="price">{formatPrice(price)}</h5>
            <p className="desc">{description}</p>
            <p className="info">
              <span>Available: </span>
              {stock > 0 ? "In stock" : "Out of stock"}
            </p>
            <p className="info">
              <span>SKU: </span>
              {id}
            </p>
            <p className="info">
              <span>Brand: </span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart single_product={single_product} />}
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

export default SingleProductPage;
