import { Route, Routes } from "react-router-dom";

import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { HomePage } from "../pages/HomePage";
import { ContactPage } from "../pages/ContactPage";

import { ProtectedRoutes } from "../components/ProtectedRoutes";
import { PublicRoutes } from "../components/PublicRoutes";

import { ContactProvider } from "../providers/ContactContext";
import { UserPage } from "../pages/UserPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route element={<ProtectedRoutes />}>
        <Route
          path="/home"
          element={
            <ContactProvider>
              <HomePage />{" "}
            </ContactProvider>
          }
        />
        <Route
          path="/user/:id"
          element={
            <ContactProvider>
              <UserPage />
            </ContactProvider>
          }
        />
        <Route
          path="/home/contact/:id"
          element={
            <ContactProvider>
              <ContactPage />
            </ContactProvider>
          }
        />
      </Route>
    </Routes>
  );
};
