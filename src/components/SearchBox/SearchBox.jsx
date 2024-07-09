import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { selectNameFilter } from "../../redux/selectors";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const search = useSelector(selectNameFilter);
  const handleChange = (event) => dispatch(changeFilter(event.target.value));
  return (
    <div className={css.searchWrapper}>
      <label htmlFor="query">Find contacts by name</label>
      <input
        className={css.search}
        type="text"
        value={search}
        name="query"
        id="query"
        autoComplete="true"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
