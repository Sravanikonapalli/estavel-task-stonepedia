import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Ensure this is here for collapse functionality
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import './index.css';

const Navbar = () => (
  <>
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link to="/">
        <button type="button" className="logo-btn">
          <img
            src="https://i.ytimg.com/vi/-2K_Ie9_3UU/mqdefault.jpg"
            className="navbar-image"
            alt="Logo"
          />
        </button>
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse link-items" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <a className="nav-link active" href="#home">
            Home
          </a>
          <a className="nav-link" href="#featured">
            Featured Products
          </a>
          <a className="nav-link" href="#testimonials">
            Testimonials
          </a>
          <a className="nav-link" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </nav>

    <div className="search-container">
      <input type="search" placeholder="Search..." className="searchbar" />
      <FaSearch size={15} />
    </div>
  </>
);

export default Navbar;
