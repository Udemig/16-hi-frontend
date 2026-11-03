import { createContext, useEffect, useState } from "react";

// Context Kurulum
export const ThemeContext = createContext();

// Context Sağlayıcı - Wrapper
const ThemeProvider = ({ children }) => {
  // tema state'i
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    // localstorage'a kaydedilmiş bir tema varsa onu kullan
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }

    // localstroage'da önceden kayıt yoksa varsayılan olarak tarayıcı tercihini kullan
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // temayı değiştirme fonkisyonu
  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  // tema her değişitiğinde html etiketinin class'ını güncelle
  useEffect(() => {
    const htmlElement = document.documentElement;

    if (isDarkTheme) {
      htmlElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      htmlElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkTheme]);

  // context yapısından diğer bileşenlere sağlanacak verileri bleirler
  return <ThemeContext value={{ isDarkTheme, toggleTheme }}>{children}</ThemeContext>;
};

export default ThemeProvider;
