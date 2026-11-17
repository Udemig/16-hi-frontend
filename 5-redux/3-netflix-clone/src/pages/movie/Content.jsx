import List from "./List";

const Content = ({ movie }) => {
  return (
    <div className="my-10">
      <div>
        <List title="Kategoriler" array={movie.genres} />
        <List title="Konuşulan Diller" array={movie.spoken_languages} />
        <List title="Yapımcı Şirketler" array={movie.production_companies} />
        <List title="Yapımcı Ülkeler" array={movie.production_countries} />
      </div>

      <div className="space-y-5">
        <p>{movie.overview}</p>

        <p>
          <span>Bütçe: </span>
          <span className="money">
            {movie.budget === 0 ? "Bilinmiyor" : `$${movie.budget.toLocaleString()}`}
          </span>
        </p>
        <p>
          <span>Hasılat: </span>
          <span className="money">
            {movie.revenue === 0 ? "Bilinmiyor" : `$${movie.revenue.toLocaleString()}`}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Content;
