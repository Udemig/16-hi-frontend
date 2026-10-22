import { NavLink, Outlet, useNavigate, Navigate } from "react-router-dom";

const Category = () => {
  if ("admin değilse") {
    // useNavigate hook'unun bileşen versiyonudur.
    // sayfa yüklenme anında yönlendirme yapılacağı zaman kullanılır
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <h1>Kategori Sayfası</h1>

      <div className="d-flex gap-5">
        <aside className="border rounded d-flex flex-column">
          <NavLink to="/kategori/roman" className="py-2 px-4 bg-dark">
            Roman
          </NavLink>
          <NavLink to="/kategori/hikaye" className="py-2 px-4 bg-dark">
            Hikaye
          </NavLink>
        </aside>

        <Outlet />
      </div>
    </div>
  );
};

export default Category;
