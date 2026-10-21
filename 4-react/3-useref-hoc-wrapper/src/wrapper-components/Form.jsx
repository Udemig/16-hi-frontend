import Field from "./Field";

const Form = () => {
  return (
    <div>
      <h1>Örnek-6: Form Arayüzü</h1>

      <form>
        <h3>Wrapper Kullanmadan</h3>

        <div>
          <label className="form-label">Email</label>
          <input type="email" className="form-control" />
          <span className="form-text">uyarı mesajı</span>
        </div>

        <div>
          <label className="form-label">Kategori</label>
          <select className="form-control">
            <option>seçenek-1</option>
            <option>seçenek-2</option>
          </select>
          <span className="form-text">uyarı mesajı</span>
        </div>

        <div>
          <label className="form-label">Açıklama</label>
          <textarea className="form-control" />
          <span className="form-text">uyarı mesajı</span>
        </div>
      </form>

      <form>
        <h3>Wrapper Kullanarak</h3>

        <Field label="Email">
          <input type="email" className="form-control" />
        </Field>

        <Field label="Kategori">
          <select className="form-control">
            <option>seçenek-1</option>
            <option>seçenek-2</option>
          </select>
        </Field>

        <Field label="Akıklama">
          <textarea className="form-control" />
        </Field>
      </form>
    </div>
  );
};

export default Form;
