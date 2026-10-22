import Card from "../components/Card";
import useFetch from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";

const Product = () => {
  // useSearchParams kurulum
  const [searchParams, setSearchParams] = useSearchParams();
  // arama parametresine erişme
  const searchTerm = searchParams.get("ara");

  const { isLoading, error, data } = useFetch("/books", searchTerm);

  if (isLoading) return <h1>Kitaplar Yükleniyor...</h1>;

  if (error) return <h1>Üzgünüz Bir Hata Oluştu!</h1>;

  return (
    <div>
      <div>
        <h1>Ürünler</h1>
        <p>Binlerce kitap arasından favorilerinizi keşfedin</p>
      </div>

      <form>
        <input
          type="text"
          placeholder="ara..."
          className="form-control mb-3"
          defaultValue={searchParams.get("ara")}
          onChange={(e) => {
            // arama parametresini değiştirme
            searchParams.set("ara", e.target.value);
            // parametreleri url'e aktar
            setSearchParams(searchParams);
          }}
        />
      </form>

      <div className="row g-4">
        {data.map((book) => (
          <Card key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};
export default Product;
