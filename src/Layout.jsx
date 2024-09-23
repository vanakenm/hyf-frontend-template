// Layout.jsx
import { Outlet, useLocation } from 'react-router-dom';
import Navigation from './components/Navbar/NavBar.jsx';
import FooterNav from './foodLover/FooterNavLover/FooterNavLover.jsx'; // FooterNav import

const Layout = () => {
  const location = useLocation();

  // List of paths where FooterNav should not be shown
  const noFooterPaths = ['/homePageLover','/offers-detail', '/offerslover','/reservation-detail','/reservation-list'];

  return (
    <>
      <Navigation />  {/* Always display the navigation */}
      <Outlet />      {/* Outlet will render the child components based on the route */}
      {/* Conditionally render FooterNav */}
      {noFooterPaths.includes(location.pathname) && <FooterNav />}
    </>
  );
};

export default Layout;
