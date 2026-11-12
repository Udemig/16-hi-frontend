import { useEffect, useState } from "react";
import api from "./../../utils/api";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import WatchListButton from "../../components/WatchListButton";
import { BASE_IMG_URL } from "./../../utils/constants";

const Hero = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    setLoading(true);

    api
      .get("/movie/popular?language=tr")
      .then((res) => {
        // 0-19 arası rastgele bir sayı belirle
        const index = Math.floor(Math.random() * 20);

        // diziden seçilen rastgele filmi state'e aktar
        setMovie(res.data.results[index]);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="glass bg-linear-to-r from-black/40 to-transparent p-5 md:p-8 rounded-3xl shadow-2xl mb-10">
      {loading ? (
        <Loader />
      ) : error ? (
        <Error message={error} />
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-6 items-center justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-center">{movie.title}</h1>

            <p className="text-gray-300 line-clamp-5 leading-relaxed">{movie.overview}</p>

            <div className="flex items-center gap-2 bg-yellow-400/20 px-4 py-2 rounded-full border border-yellow-400/30">
              <span>Rating</span>
              <span className="text-yellow-400 font-bold text-lg">
                {movie.vote_average.toFixed(2)}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 w-full sm:w-auto">
              <Link to={`/movie/${movie.id}`} className="hero-btn">
                <Play className="size-5" />
                Filmi İzle
              </Link>

              <WatchListButton />
            </div>
          </div>

          <div className="flex justify-center items-center">
            <img
              src={BASE_IMG_URL + movie.backdrop_path}
              alt={movie.title}
              className="drop-shadow-[0_0_80px_rgba(255,255,255,0.2)] rounded-2xl object-cover max-h-74 transition duration-300 hover:scale-105"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
