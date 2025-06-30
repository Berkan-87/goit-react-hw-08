import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filters/filtersSlice';
import styles from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={filter}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        placeholder="Search contacts"
        className={styles.input}
      />
    </div>
  );
};

export default SearchBox;
