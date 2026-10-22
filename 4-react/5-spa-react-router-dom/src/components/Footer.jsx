import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center p-3 mt-4 border-top bg-dark px-md-5">
      <p className="col-md-4 mb-0 text-light">© 2026 Company, Inc</p>
      <a
        href="/"
        className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        aria-label="Bootstrap"
      >
        <svg className="bi me-2" width="40" height="32" aria-hidden="true">
          <use xlink:href="#bootstrap"></use>
        </svg>
      </a>
      <ul className="nav col-md-4 justify-content-end">
        <li className="nav-item">
          <Link to="/" className="nav-link px-2 text-light">
            Anasayfa
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ürünler" className="nav-link px-2 text-light">
            Ürünler
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/hakkımızda" className="nav-link px-2 text-light">
            Hakkımızda
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
