import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link
      to={`/restaurant/${item.id}`}
      className="box box-interactive block relative overflow-hidden"
    >
      <span className="pill absolute right-4 top-4 bg-white/95 text-zinc-800">
        {item.distance} km
      </span>

      <img src={item.photo} alt={item.name} className="w-full object-cover h-57.5 lg:h-50" />
    </Link>
  );
};

export default Card;
