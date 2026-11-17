import { BASE_IMG_URL } from "../../utils/constants";

const Banner = ({ movie }) => {
  return (
    <div className="relative h-[35vh]">
      <img
        src={BASE_IMG_URL + movie.backdrop_path}
        alt={movie.title}
        className="rounded-xl size-full object-cover"
      />

      <div className="absolute bg-black/20 grid place-items-center inset-0 backdrop-blur-[0.5px]">
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-shadow-lg text-shadow-black">
            {movie.title}
          </h2>

          <h3 className="text-xl text-shadow-lg text-shadow-black mt-5">"{movie.tagline}"</h3>
        </div>
      </div>
    </div>
  );
};

export default Banner;
