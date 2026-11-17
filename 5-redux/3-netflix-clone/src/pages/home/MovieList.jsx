import { useEffect, useState } from "react";
import api from "../../utils/api";
import { Link } from "react-router-dom";
import { BASE_IMG_URL } from "../../utils/constants";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const MovieList = ({ genre }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api.get(`/discover/movie?with_genres=${genre.id}`).then((res) => setMovies(res.data.results));
  }, [genre.id]);

  return (
    <div className="my-10">
      <h1 className="section-title mb-5">{genre.name}</h1>

      <Splide options={{ autoWidth: true, gap: "20px", pagination: false, type: "loop" }}>
        {movies.map((movie) => (
          <SplideSlide className="max-w-75 rounded-xl overflow-hidden">
            <Link to={`/movie/${movie.id}`}>
              <img
                src={BASE_IMG_URL + movie.poster_path}
                className="poster h-full"
                loading="lazy"
              />
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default MovieList;
