import { createContext, use, useState } from "react";

// 1) Context oluşturma
export const BasketContext = createContext();

// 2) Provider oluşturma (Wrapper Bileşen)
export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  const addToBasket = (product) => {
    // ürünü sepete daha önce eklendi mi
    const found = basket.find((item) => item.id === product.id);

    // eklenmediyses: sepet dizisine ürünü ekle
    if (!found) setBasket([...basket, product]);
  };

  const removeFromBasket = (id) => {
    // id'si eşleşmeyen ürünü diziden kaldır
    setBasket(basket.filter((item) => item.id !== id));
  };

  const clearBasket = () => {
    setBasket([]);
  };

  return (
    <BasketContext value={{ basket, addToBasket, removeFromBasket, clearBasket }}>
      {children}
    </BasketContext>
  );
};

// 3) Context'ê abone olan custom hook
export const useBasket = () => use(BasketContext);
