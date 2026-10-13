/*
 ! Bileşenin Temel Özellikleri
 * Bileşenler birer javascript fonksiyondur
 * İsminin ilk harfi büyük olmalı
 * JSX kodu return etmeli
 * Bileşni farklı bir sayfada kullanabilmek için export ederiz
 */

function Header() {
  const marka = "!REACT!";
  const user = "Furkan";
  const canliMi = false;

  return (
    <header>
      <h1>{marka}</h1>

      <form>
        <label htmlFor="search">Ara</label>
        <input id="search" type="text" />

        {canliMi && <div className="icon" />}
      </form>

      <nav className="spacing">
        {user ? <h2>{user}</h2> : <button>Kayıt Ol</button>}
      </nav>
    </header>
  );
}

export default Header;
