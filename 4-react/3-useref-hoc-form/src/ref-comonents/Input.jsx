import { useRef } from "react";

const Input = () => {
  // useRef kullanımı
  const inputRef = useRef(null);

  // odaklan butonuna tıklanınca çalıştır
  const handleFocus = () => {
    inputRef.current.focus();
    inputRef.current.style.background = "crimson";
  };

  // temizleme butonuna tıklanınca çalışır
  const handleClear = () => {
    inputRef.current.value = "";
    inputRef.current.style.background = "white";
  };

  return (
    <div>
      <h1>Örnek-1: Input</h1>
      <p>
        <b>Açıklama:</b> useRef ile input elementine direkt erişim sağlayıp focus yapıp stilini
        değiştirelim
      </p>

      <input ref={inputRef} type="text" className="form-control my-4" />

      <button className="btn btn-primary" onClick={handleFocus}>
        Odaklan
      </button>

      <button className="btn btn-primary mx-4" onClick={handleClear}>
        Temzile
      </button>
    </div>
  );
};

export default Input;
