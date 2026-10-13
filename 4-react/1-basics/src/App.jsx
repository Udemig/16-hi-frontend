import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import { urunler } from "./utils";

/*
 * Bir bileşeni kullanmak için
 * 1) kullanmak istediğimiz bileşenleri import ederiz
 * 2) return satırı içerisinde bileşeni çağırırız
 * * <Bileşenİsmi />
 */

// Bileşen
function App() {
  return (
    <>
      <Header />

      <main>
        <h1>Anasayfa</h1>

        <div className="cards">
          {urunler.map((urun, index) => (
            <Card key={index} isim={urun.isim} fiyat={urun.fiyat} resim={urun.resim} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
