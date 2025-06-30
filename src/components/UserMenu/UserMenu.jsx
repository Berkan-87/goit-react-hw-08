import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/authOps';
import { selectUser } from "../../redux/auth/authSelectors";
import css from './UserMenu.module.css';


export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.userMenu}>
      <span className={css.username}>Welcome, {user.name}</span>
      <button className={css.button} onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
