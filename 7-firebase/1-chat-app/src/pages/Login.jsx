import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./../firebase/index";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useRef } from "react";

const Login = () => {
  const navigate = useNavigate();
  const buttonRef = useRef(null);

  const handleLogin = () => {
    buttonRef.current.disabled = true;

    signInWithPopup(auth, provider)
      .then(() => {
        navigate("/");
        toast.success("Oturum açıldı");
      })
      .catch(() => {
        toast.error("Giriş başarısız");
        buttonRef.current.disabled = false;
      });
  };

  return (
    <div className="wrapper">
      <div className="box flex flex-col items-center justify-center gap-12.5">
        <h1 className="text-4xl">Chat Odası</h1>

        <p className="text-gray-400">Devam Etmek İçin Giriş Yap</p>

        <button onClick={handleLogin} ref={buttonRef} className="btn flex gap-5 items-center">
          <img src="/google.png" alt="google" className="w-7.5" />
          <span>Google İle Gir</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
