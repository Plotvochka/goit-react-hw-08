import "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Layout from "./components/Layout/Layout";
import { refreshUser } from "./redux/auth/operations";
import HomePage from "./pages/HomePage/HomePage";
import { selectIsRefreshing } from "./redux/auth/selectors";
import { Route, Routes } from "react-router-dom";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFound from "./components/NotFound/NotFound";
import RestrictedRoute from "./RestrictedRoute";
import PrivateRoute from "./PrivateRoute";

export default function App() {
  const dispatch = useDispatch();

  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Please wait, updaiting user info ...</b>
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              component={<RegisterPage />}
              redirectTo="/contacts"
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
