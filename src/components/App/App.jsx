import { useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

import style from "./App.module.css";
import Layout from "../Layout/Layout";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage"));

export default function App() {
  const dispatch = useDispatch();

  return (
    <Layout>
      <Suspense fallback={<div>Loading....</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
