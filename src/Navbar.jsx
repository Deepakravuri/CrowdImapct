import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          ImpactHub
        </Link>
        
        <div className="nav-links">
          <Link to="/projects" className="nav-link">
            Projects
          </Link>
          {user && (
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>
          )}
        </div>

        <div className="nav-auth">
          {user ? (
            <>
              <span className="welcome-text">Welcome, {user.name}</span>
              <button onClick={handleLogout} className="button button-secondary">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="button button-secondary">
                Login
              </Link>
              <Link to="/register" className="button button-primary">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 