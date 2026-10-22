import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="navbar navbar-dark bg-dark px-md-5">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Context Store
        </Link>

        <nav className="d-flex gap-4">
          <NavLink to="/" className="text-secondary">
            Anasayfa
          </NavLink>
          <NavLink to="/sepet" className="text-secondary">
            Sepet (??)
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
