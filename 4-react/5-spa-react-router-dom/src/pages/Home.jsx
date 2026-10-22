import { useNavigate } from "react-router-dom";

const Home = () => {
  // kurulum
  const navigate = useNavigate();

  // fonksiyon içerisinde yönlendirme yapmak
  const handleClick = () => {
    navigate("/ürünler");
  };

  return (
    <div className="my-5">
      <h1 className="text-center mb-5">Kitap Kurdu</h1>

      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/069/357/593/small/open-book-amidst-misty-mountains-serene-landscape-free-photo.jpg"
        className="w-100 object-fit-cover rounded"
      />

      <p className="my-5 lead text-center">
        Aradığınız 100+ kitabı ürünler sayfasında bulabilirsiniz
      </p>

      <div className="d-flex justify-content-center">
        <button onClick={handleClick} className="btn btn-primary">
          Ürünler'e Bak
        </button>
      </div>
    </div>
  );
};

export default Home;
