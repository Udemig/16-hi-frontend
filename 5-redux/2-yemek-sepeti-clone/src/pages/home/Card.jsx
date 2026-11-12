import { ArrowDown, Bike, Clock, Star } from "lucide-react";
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

      <div className="p-5 space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold line-clamp-1">{item.name}</h3>

            <p className="muted mt-1 flex items-center gap-1.5 text-base">
              <ArrowDown className="size-4 text-zinc-400" /> ₺{item.minPrice}
            </p>
          </div>

          <p className="flex items-center gap-1.5 text-sm font-semibold text-zinc-800 bg-amber-50 px-3 py-1 rounded-full">
            <Star className="size-4 fill-amber-400 text-amber-400" /> {item.rating}
          </p>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 font-medium text-zinc-600">
            <Clock className="size-4 text-zinc-400" />
            <span>{item.estimatedDelivery} dk.</span>
          </div>

          {item.isDeliveryFree && (
            <div className="flex items-center gap-2 font-semibold text-zinc-600">
              <Bike className="size-5 text-emerald-500" />
              <span>Ücretsiz teslimat</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Card;
