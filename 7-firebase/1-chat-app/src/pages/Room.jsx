import { useNavigate, useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Room = () => {
  const user = useOutletContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = e.target[0].value.trim().toLowerCase().replaceAll(" ", "-");

    navigate(`/chat/${text}`);
  };

  const handleSignOut = () => {
    signOut(auth).then(() => toast.info("Oturumun kapandı"));
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit} className="box flex flex-col gap-10 text-center">
        <h1 className="text-4xl">Chat Odası</h1>

        <p>
          Selam <b>{user?.displayName}</b>, <br />
          Hangi Odaya Gireceksin?
        </p>

        <input
          type="text"
          placeholder="örn: haftasonu"
          required
          className="border border-gray-300 rounded- shadow-lg px-4 py-2"
        />

        <button type="submit" className="btn bg-zinc-700 text-white">
          Odaya Gir
        </button>

        <button onClick={handleSignOut} type="button" className="btn bg-red-500 text-white">
          Çıkış Yap
        </button>
      </form>
    </div>
  );
};

export default Room;
