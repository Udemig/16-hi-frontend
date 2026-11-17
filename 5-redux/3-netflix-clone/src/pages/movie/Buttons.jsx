import { Undo2 } from "lucide-react";
import { Link } from "react-router-dom";
import WatchListButton from "../../components/WatchListButton";

const Buttons = ({ movie }) => {
  return (
    <div className="flex mb-5 justify-between">
      <Link to="/" className="hero-btn from-gray-600 to-gray-700">
        <Undo2 className="size-5" />
        Geri
      </Link>

      <WatchListButton movie={movie} />
    </div>
  );
};

export default Buttons;
