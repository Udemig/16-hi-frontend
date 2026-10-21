import api from "../api";

const ListItem = ({ todo, deleteTodo }) => {
  // sil butonuna tıklanınca çalışır
  const handleClick = () => {
    // kullanıdan onay al
    if (!confirm("Silmek istediğinizden emin misiniz?")) return;

    // api'a todoyu kaldırmak için istek at
    api
      .delete(`/todos/${todo.id}`)
      // istek başarılı olunca state'i güncelle
      .then(() => deleteTodo(todo.id));
  };

  return (
    <div className="card p-3">
      <div>
        <h2>{todo.title}</h2>
      </div>

      <div className="d-flex justify-content-between align-items-center">
        <span className="badge bg-primary">{todo.category}</span>
        <span>
          {new Date(todo.date).toLocaleString("tr", {
            day: "2-digit",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>

      <div className="d-flex justify-content-end mt-2">
        <button className="btn btn-danger" onClick={handleClick}>
          Sil
        </button>
      </div>
    </div>
  );
};
export default ListItem;
