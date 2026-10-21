import { useState } from "react";

const Form = () => {
  // bütün form verilerini tutan state
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  // değişen inputa göre formState'indeki ilgili alanı güncelleyen fonksiyon
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  // form gönderilince
  const handleSubmit = (e) => {
    e.preventDefault();

    // formdaki verilere eriş
    // 1.yol) uncontrolled
    console.log(e.target.email.value);
    console.log(e.target.password.value);

    // 2.yol) uncontrolled
    const formData = new FormData(e.target);
    const loginData = Object.fromEntries(formData.entries());
    console.log(loginData);

    // 3.yol) controlled
    console.log(formState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="mb-5">Örnek: Giriş Yapma Formu</h1>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          id="email"
          type="text"
          name="email"
          placeholder="user@example.com"
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Şifre
        </label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="*********"
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn-primary mt-3">
        Giriş Yap
      </button>
    </form>
  );
};

export default Form;
