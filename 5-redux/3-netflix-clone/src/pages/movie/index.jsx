import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../utils/api";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import Buttons from "./Buttons";
import Content from "./Content";
import Banner from "./Banner";
import Cast from "./Cast";

const Movie = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    api
      .get(`/movie/${id}?append_to_response=credits&language=tr`)
      .then((res) => setMovie(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [id]);

  if (isLoading) return <Loader />;

  if (error) return <Error message={error} />;

  return (
    <div>
      <Buttons movie={movie} />
      <Banner movie={movie} />
      <Content movie={movie} />
      <Cast cast={movie.credits.cast} />
    </div>
  );
};

export default Movie;
