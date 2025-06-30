import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary header-top p-0">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="/logo.png" alt="Rajgram Ramakrishna Ashrama Vidyamandir" width="50" className="d-inline-block align-text-top p-0" />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/donate">
                Donation
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about">
                About US
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/result">
                Results
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/gallery">
                Gallery
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
        <div className="d-flex align-items-center gap-3 social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
