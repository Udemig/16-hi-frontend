import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 dark:text-white">
      <Header />

      <main className="container flex-1 py-6">
        {/* Outlet: kullanıcının ziyaret ettiği alt route'un bileşeninin layout içerisinde nereye yerleşeceğine belirlemeye yarar */}
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
