import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <main className="flex-fill p-3 px-md-5">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
