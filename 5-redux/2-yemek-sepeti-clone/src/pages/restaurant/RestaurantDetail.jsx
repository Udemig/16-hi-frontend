import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "./../../service/api";
import Loader from "./../../components/Loader";
import { ArrowDown, Clock, Star } from "lucide-react";

const RestaurantDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    setLoading(true);

    api
      .get(`/restaurants/${id}`)
      .then((res) => setRestaurant(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader designs="my-14.75!" />;

  if (error) return <Error message={error.message} />;

  return (
    <div className="flex flex-1 gap-5 sm:items-center">
      <img
        src={restaurant.photo}
        alt={restaurant.name}
        className="size-37.5 rounded-2xl object-cover"
      />

      <div className="flex flex-1 flex-col gap-4">
        <div className="flex flex-wrap gap-3 text-sm font-medium text-zinc-600">
          <span className="pill bg-zinc-100 text-zinc-700">
            <ArrowDown className="size-4 text-zinc-400" />
            min {restaurant.minPrice} TL
          </span>
          <span className="pill bg-zinc-100 text-zinc-700">
            <Clock className="size-4 text-zinc-400" /> ≈ {restaurant.estimatedDelivery} dk
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-semibold">{restaurant.name}</h1>

        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span className="flex items-center gap-1.5 font-semibold text-zinc-800">
            <Star className="size-4 fill-amber-400 text-amber-400" />
            {restaurant.rating}
          </span>

          <button className="rounded-full border border-zinc-200 bg-white px-4 py-2 font-medium text-zinc-700 hover:border-zinc-300 hover:bg-zinc-50">
            Yorumları Gör
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;
