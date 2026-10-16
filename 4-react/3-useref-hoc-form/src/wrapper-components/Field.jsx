const Field = ({ children, label }) => {
  return (
    <div>
      <label className="form-label">{label}</label>

      {children}

      <span className="form-text">uyarı mesajı</span>
    </div>
  );
};

export default Field;
