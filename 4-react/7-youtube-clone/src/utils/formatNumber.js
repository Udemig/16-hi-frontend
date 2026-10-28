// parametre olarak aldığı sayıyı okunabilir formata çevir
// 765893614 ---> 765,8 Mn
function formatNumber(value) {
  return new Intl.NumberFormat("tr", {
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 1,
  }).format(value);
}

export default formatNumber;
