import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RecipesPage from "./RecipesPage.jsx";
import Navigation from "./components/Navbar/NavBar.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Registeration/Register.jsx";

// Create a common component that will render Navigation and routes
const Layout = () => (
  <>
    <Navigation />
    <Outlet /> {/* This is where the pages will be rendered */}
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Include navigation and content
    children: [
      { path: "/", element: <App /> }, // Home page
      { path: "/recipes", element: <RecipesPage /> }, // Recipes page
      { path: "/login", element: <Login /> }, // Login page
      { path: "/register", element: <Register /> }, // Registration page
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
