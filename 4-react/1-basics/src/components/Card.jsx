// Bileşen kullanılırken gönderilen proplara erişmek için fonksiyonun parametre kısmını kullanırız
// Proplar nesne formatında gelir
function Card(props) {
  console.log(props);

  return (
    <div className="card">
      <img src={props.resim} height={150} />

      <h2>{props.isim}</h2>

      <p>${props.fiyat}</p>

      <button>Sepete Ekle</button>
    </div>
  );
}

export default Card;
