import { useNavigate, useLocation } from 'react-router-dom';

function FooterNav() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get the current pathname from location
  const currentPage = location.pathname;

  return (
    <div style={styles.footer}>
      {/* HomeLover Button - Navigates to /homePageLover */}
      <button
        style={currentPage === '/homePageLover' ? styles.activeButton : styles.button}
        onClick={() => navigate('/homePageLover')}
      >
        HomeLover
      </button>

      {/* Reservations Button - Active on /reservation-list or /reserved-detail */}
      <button
        style={(currentPage === '/reservation-list' || currentPage === '/reserved-detail' || currentPage === '/reservation-detail') ? styles.activeButton : styles.button}
        onClick={() => navigate('/reservation-list')}
      >
        Reservations
      </button> 

      {/* Offers Button - Active on /offerslover or /offers-detail */}
      <button
        style={(currentPage === '/offerslover' || currentPage === '/offers-detail') ? styles.activeButton : styles.button}
        onClick={() => navigate('/offerslover')}
      >
        Offers
      </button>

      {/* Logout Button - Navigates to the home page (/) */}
      <button
        style={currentPage === '/' ? styles.activeButton : styles.button}
        onClick={() => navigate('/')}
      >
        Logout
      </button>
    </div>
  );
}

// Styles for the footer and buttons
const styles = {
  footer: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '10px',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    backgroundColor: '#bcd4df',
    borderTop: '1px solid #ddd',
  },
  button: {
    padding: '10px 20px',
    cursor: 'pointer',
    backgroundColor: '#d2691e',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  activeButton: {
    padding: '10px 20px',
    cursor: 'pointer',
    backgroundColor: 'blue',
    color: '#fff',
    border: '1px solid #007bff',
    borderRadius: '5px',
  },
};

export default FooterNav;
