import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RecipesPage from "./RecipesPage.jsx";
import Navigation from "./components/Navbar/NavBar.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Registration/Register.jsx";
import Reservations from "./pages/Reservations.jsx";
import ReservationDetails from "./pages/ReservationDetails.jsx";
import Offers from "./pages/Offers.jsx";
import OfferDetails from "./pages/OfferDetails.jsx";
import ReservationListPage from "./foodLover/reservationpart/ReservationListPage.jsx";
import OffersListFunction from "./foodLover/offersFunc/OffersListFunction.jsx";
import OffersDetailListFunction from "./foodLover/offersFunc/OffersDetailListFunction.jsx";
import MakeReservation from "./foodLover/offersFunc/MakeReservation.jsx";
import FooterNav from "./foodLover/FooterNavLover/FooterNavLover.jsx";
import HomePageLover from "./foodLover/HomeLOver/HomePageLover.jsx";
import Layout from "./Layout.jsx";
import ReservationDetailPage from "./foodLover/reservationpart/ReservationDetailListPage.jsx";
import CreateOffer from "./components/Create-offer/CreateOffer.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Include navigation and content
    children: [
      { path: "/", element: <App /> }, // Home page
      { path: "/recipes", element: <RecipesPage /> }, // Recipes page
      { path: "/login", element: <Login /> }, // Login page
      { path: "/register", element: <Register /> }, // Registration page
      { path: "/reservations", element: <Reservations /> }, // Food provider reservations page
      { path: "/reservations/:id", element: <ReservationDetails /> }, // Food provider reservation details page
      { path: "/offers", element: <Offers /> }, // Food provider offers page
      { path: "/offers/:id", element: <OfferDetails /> }, // Food provider offer details page
      { path: "/Offer", element : <CreateOffer /> }, // Food provider create offers page
      { path: "/reservation-list", element: <ReservationListPage /> },
      { path: "/reservation-detail", element: <ReservationDetailPage /> },
      { path: "/offerslover", element: <OffersListFunction /> },
      { path: "/offers-detail", element: <OffersDetailListFunction /> },
      { path: "/make-reservation", element: <MakeReservation /> },
      { path: "/foodLoverNav", element: <FooterNav /> },
      { path: "/homePageLover", element: <HomePageLover /> }      
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
