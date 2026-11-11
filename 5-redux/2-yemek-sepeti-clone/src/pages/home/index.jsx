import { useSelector } from "react-redux";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import Card from "./Card";

const Home = () => {
  const { loading, error, restaurants } = useSelector((store) => store.restaurantReducer);

  return (
    <div className="container">
      <div className="max-w-2xl mt-10">
        <h1 className="font-semibold text-3xl md:text-4xl">Yakınınızdaki Restoranlar</h1>
        <p className="muted mt-2 text-base">Favori lezzetlerinize dakikalar içinde ulaşın</p>
      </div>

      {loading ? (
        <Loader />
      ) : error ? (
        <Error message={error} />
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {restaurants.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
