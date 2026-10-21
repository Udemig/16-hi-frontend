import api from "../api";

const TodoForm = ({ addTodo }) => {
  // form gönderilince çalışır
  const handleSubmit = (e) => {
    e.preventDefault(); // sayfa yenilenmesini engelle

    // başlık ve kategori inputlarında verilere eriş
    const title = e.target[0].value;
    const category = e.target[1].value;

    // api'a gönderilcek body'i hazırla
    const newTodo = {
      title,
      category,
      date: Date.now(),
    };

    // api'a yeni todo oluşturmak için istek at
    api
      .post("/todos", newTodo)
      // istek başarılı olunca state'i güncelle
      .then((res) => addTodo(res.data));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Yeni Öğe Ekle</h1>

      <div className="mb-3">
        <label className="form-label">Başlık</label>
        <input type="text" required className="form-control" />
      </div>

      <div className="mb-3">
        <label className="form-label">Kategori</label>
        <select required className="form-select">
          <option value="">Seçiniz</option>
          <option value="iş">İş</option>
          <option value="spor">Spor</option>
          <option value="alışveriş">Alışveriş</option>
          <option value="finans">Finans</option>
          <option value="sosyal">Sosyal</option>
          <option value="kişisel Gelişim">Kişisel gelişim</option>
        </select>
      </div>

      <div className="d-flex justify-content-end">
        <button type="submit" className="btn btn-primary">
          Gönder
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
