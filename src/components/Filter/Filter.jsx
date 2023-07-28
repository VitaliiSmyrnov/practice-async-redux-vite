import { useDispatch, useSelector } from "react-redux";
import { filteredContact } from "src/redux/filterSlice";

import { selectFilter } from "src/redux/selectors";

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = (e) => {
    dispatch(filteredContact(e.target.value.trim()));
  };

  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      ></input>
    </label>
  );
};
