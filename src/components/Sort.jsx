import { useFilterContext } from "../context/filter_context";
import { BsFillGridFill, BsList } from "react-icons/bs";
import Wrapper from "../assets/wrappers/Sort";

const Sort = () => {
  const {
    grid_view,
    filtered_products: products,
    setGridView,
    setListView,
    updateSort,
    sort,
  } = useFilterContext();

  return (
    <Wrapper>
      <div className="btn-container">
        <button
          type="button"
          onClick={setGridView}
          className={`${grid_view ? "active" : null}`}
        >
          <BsFillGridFill />
        </button>
        <button
          type="button"
          onClick={setListView}
          className={`${!grid_view ? "active" : null}`}
        >
          <BsList />
        </button>
      </div>
      <p>{products.length} products found</p>
      <hr />
      <form>
        <label htmlFor="sort">sort by</label>
        <select
          value={sort}
          onChange={updateSort}
          name="sort"
          id="sort"
          className="sort-input"
        >
          <option value="price-lowest">price (lowest)</option>
          <option value="price-highest">price (highest)</option>
          <option value="name-a">name (a - z)</option>
          <option value="name-z">name (z - a)</option>
        </select>
      </form>
    </Wrapper>
  );
};

export default Sort;
