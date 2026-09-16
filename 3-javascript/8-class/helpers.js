const bugun = new Date();

const tarihFormatla = (tarih) => {
  return tarih.toLocaleString("tr", { day: "numeric", month: "long", year: "numeric" });
};

//! Default Export
// Bir dosyanın ana değerini dışarı aktarmak için:
export default tarihFormatla;
