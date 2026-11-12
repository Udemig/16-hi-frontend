import { Bookmark } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="glass mb-10 flex justify-between items-center padding rounded-2xl sticky top-4 z-20">
      <Link to="/" className="hover:scale-105">
        <img src="/logo.svg" alt="logo" className="max-w-37.5" />
      </Link>

      <Link
        to="/watch-list"
        className="flex gap-4 md:gap-5 items-center hover:text-white px-4 py-2 mr-3 hover:bg-white/10 rounded-lg"
      >
        <div className="relative">
          <Bookmark />
          <span className="absolute -right-3 -top-3 bg-red-500 grid place-items-center size-6 rounded-full text-sm font-bold shadow-lg shadow-red-500/50">
            ?
          </span>
        </div>
      </Link>
    </header>
  );
};

export default Header;
