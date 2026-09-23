export function addRecentCity(city) {
  // şehir ismi gelmediyse mevcut şehirleri döndür
  if (!city) return getRecentCities();

  // boşlukları kaldır
  const trimmed = city.trim();

  // arattığım şehir listede zaten varsa onu kaldır
  let list = getRecentCities().filter((item) => item.toLowerCase() !== trimmed.toLowerCase());

  // dizinin önüne yeni aratılan şehri ekle
  list.unshift(trimmed);

  // dizi 5 elemandan fazla sadece ilk 5 elemanı al
  if (list.length > 5) {
    list = list.slice(0, 5);
  }

  // local storage'a güncel diziyi kaydet
  localStorage.setItem("recent-cities", JSON.stringify(list));

  // güncel diziyi return et
  return list;
}

export function getRecentCities() {
  // localStorage'dan aratılan şehirleri al (json)
  const jsonData = localStorage.getItem("recent-cities");

  // json formatınndaki veriyi js formatına çevir
  const jsData = JSON.parse(jsonData);

  // son aratılan şehirler dizi varsa onu yoksa boş dizi return et
  return jsData || [];
}
