import { useId } from "react";
import s from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const searchInputId = useId();

  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={s.wrapper}>
      <label htmlFor={searchInputId}>Find contacts by name</label>
      <input
        className={s.input}
        onChange={handleClick}
        type="text"
        id={searchInputId}
        name="name"
      />
    </div>
  );
};

export default SearchBox;
