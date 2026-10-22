import Card from "../components/Card";
import { products } from "../data/products";

const Home = () => {
  return (
    <div className="container">
      <h2 className="my-2">Ürünler</h2>

      <div className="card-wrapper">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
