import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  // bulunduğum path ile alakalı verileri getirir
  const location = useLocation();

  return (
    <div className="text-center d-grid gap-5 mt-5">
      <h1>404</h1>

      <h2>Aradığınız Sayfa Bulunamadı</h2>

      {location.state && <p className="text-danger">{location.state}</p>}

      <Link to="/">Anasayfa'ya Dön</Link>
    </div>
  );
};

export default NotFound;
