import useFetch from "../hooks/useFetch";

const ProductList = () => {
  const state = useFetch("https://dummyjson.com/products");

  console.log(state);

  return (
    <div>
      <h1>Ürün Listesi</h1>
      <div></div>
    </div>
  );
};

export default ProductList;
