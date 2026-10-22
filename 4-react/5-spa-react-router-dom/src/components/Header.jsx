import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark px-md-5">
      <div className="container-fluid d-flex justify-content-between">
        <Link className="navbar-brand" to="/">
          Kitap Kurdu
        </Link>

        <ul className="navbar-nav mb-2 mb-lg-0 d-flex gap-3">
          <li className="nav-item">
            <NavLink className="text-secondary" to="/">
              Anasayfa
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="text-secondary" to="/ürünler">
              Ürünler
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="text-secondary" to="/hakkımızda">
              Hakkımızda
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="text-secondary" to="/kategori/roman">
              Roman
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
