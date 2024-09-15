import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RecipesPage from "./RecipesPage.jsx";
import Navigation from "./components/Navbar/NavBar.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Registration/Register.jsx";
import Reservations from "./pages/Reservations.jsx";
import ReservationDetails from "./pages/ReservationDetails.jsx";
import Offers from "./pages/Offers.jsx";
import OfferDetails from "./pages/OfferDetails.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <Error /> },
  { path: "/recipes", element: <RecipesPage /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/reservations", element: <Reservations /> },
  { path: "/reservations/:id", element: <ReservationDetails /> },
  { path: "/offers", element: <Offers /> },
  { path: "/offers/:id", element: <OfferDetails /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navigation />
    <RouterProvider router={router} />
  </StrictMode>
);
