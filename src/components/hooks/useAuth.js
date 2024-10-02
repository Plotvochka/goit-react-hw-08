import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
} from "../../redux/auth/selectors";

export const useAuth = () => {
  return {
    isLoggedIn: useSelector(selectUser),
    selectUser: useSelector(selectIsLoggedIn),
    selectIsRefreshing: useSelector(selectIsRefreshing),
  };
};
