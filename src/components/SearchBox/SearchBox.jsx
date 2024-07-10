import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filter/slice.js";
import {
  selectNameFilter,
  selectNumberFilter,
} from "../../redux/filter/selectors.js";

import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectNameFilter);
  const number = useSelector(selectNumberFilter);

  const handleFindName = (e) => {
    const value = e.target.value;
    dispatch(
      changeFilter({
        name: value.toLowerCase(),
        number: value,
      })
    );
  };

  return (
    <div className={css.searchWrapper}>
      <label htmlFor="query">Find contacts by name</label>
      <input
        className={css.search}
        type="text"
        value={name || number}
        name="query"
        id="query"
        autoComplete="true"
        onChange={handleFindName}
      />
    </div>
  );
};

export default SearchBox;
