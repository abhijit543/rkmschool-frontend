import { Link } from "react-router-dom";
import { useRef } from "react";
import "./Header.css";

const Header = () => {
  const navRef = useRef();

  const handleLinkClick = () => {
    const bsCollapse = new window.bootstrap.Collapse(navRef.current, { toggle: false });
    bsCollapse.hide();
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary header-top p-0">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="/logo.png" alt="Rajgram Ramakrishna Ashrama Vidyamandir" width="50" className="d-inline-block align-text-top p-0" />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav" ref={navRef}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/" onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/contact" onClick={handleLinkClick}>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/donate" onClick={handleLinkClick}>
                Donation
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about" onClick={handleLinkClick}>
                About US
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/result" onClick={handleLinkClick}>
                Results
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/gallery" onClick={handleLinkClick}>
                Gallery
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
