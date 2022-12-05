import { useFilterContext } from "../context/filter_context";
import { getUniqueValues, formatPrice } from "../utils/helpers";
import { FaCheck } from "react-icons/fa";
import Wrapper from "../assets/wrappers/Filters";

const Filters = () => {
  const {
    all_products,
    clearFilters,
    updateFilters,
    filters: {
      text,
      company,
      category,
      color,
      min_price,
      max_price,
      price,
      isShipping,
    },
  } = useFilterContext();

  const categories = getUniqueValues(all_products, "category");
  const companies = getUniqueValues(all_products, "company");
  const colors = getUniqueValues(all_products, "colors");

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* search input */}
          <div className="form-control">
            <input
              type="text"
              name="text"
              placeholder="search"
              className="search-input"
              value={text}
              onChange={updateFilters}
            />
          </div>
          {/* end of search input */}

          {/* categories */}
          <div className="form-control">
            <h5>category</h5>
            <div>
              {categories.map((c, index) => {
                return (
                  <button
                    key={index}
                    name="category"
                    type="button"
                    onClick={updateFilters}
                    className={`${
                      category === c.toLowerCase() ? "active" : null
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
          {/* end of categories */}

          {/* company */}
          <div className="form-control">
            <h5>company</h5>
            <select
              name="company"
              className="company"
              onChange={updateFilters}
              value={company}
            >
              {companies.map((c, index) => {
                return (
                  <option key={index} value={c}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
          {/* end of company */}

          {/* colors */}
          <div className="form-control">
            <h5>colors</h5>
            <div className="colors">
              {colors.map((c, index) => {
                if (c === "all") {
                  return (
                    <button
                      name="color"
                      onClick={updateFilters}
                      data-color="all"
                      key={index}
                      className={`${
                        color === "all" ? "all-btn active" : "all-btn"
                      }`}
                    >
                      all
                    </button>
                  );
                }
                return (
                  <button
                    key={index}
                    name="color"
                    style={{ backgroundColor: c }}
                    className={`${
                      color === c ? "color-btn active" : "color-btn"
                    }`}
                    data-color={c}
                    type="button"
                    onClick={updateFilters}
                  >
                    {color === c && <FaCheck />}
                  </button>
                );
              })}
            </div>
          </div>
          {/* end of colors */}

          {/* price */}
          <div className="form-control">
            <h5>price</h5>
            <p className="price">{formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              min={min_price}
              max={max_price}
              value={price}
              onChange={updateFilters}
            />
          </div>
          {/* end of price */}

          {/* shipping */}
          <div className="form-control shipping">
            <label htmlFor="isShipping">free shipping</label>
            <input
              id="isShipping"
              type="checkbox"
              name="isShipping"
              checked={isShipping}
              onChange={updateFilters}
            />
          </div>
          {/* end of shipping */}
        </form>
        <button className="clear-btn" onClick={clearFilters} type="button">
          clear filters
        </button>
      </div>
    </Wrapper>
  );
};

export default Filters;
