const MovieList = ({ genre }) => {
  return (
    <div className="my-10">
      <h1 className="text-4xl">{genre.name}</h1>
    </div>
  );
};

export default MovieList;
