import EmojiPicker from "emoji-picker-react";
import { useRef, useState } from "react";
import { db } from "./../../firebase/index";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";

const Form = ({ user, room }) => {
  const [text, setText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);

  const handleEmoji = (e) => {
    // imlecin seçili olduğu yeri belirle
    const start = inputRef.current.selectionStart;
    const end = inputRef.current.selectionEnd;

    // tıklanan emoji seçili noktaya koy
    setText((prev) => prev.slice(0, start) + e.emoji + prev.slice(end));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const message = text.trim();
    if (!message) return;

    // formu sıfırla
    setText("");
    setIsOpen(false);
    inputRef.current.focus();

    try {
      // veritabanındaki messages kolleksiyonuna yeni belge kaydet
      await addDoc(collection(db, "messages"), {
        text: message,
        room,
        author: {
          id: user.uid,
          name: user.displayName,
          photo: user.photoURL,
        },
        createdAt: serverTimestamp(),
      });
    } catch {
      setText(message);
      toast.error("Mesaj gönderilemedi");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 sm:gap-3 p-3 bg-white border border-gray-200 shadow-sm mt-auto"
    >
      <input
        type="text"
        placeholder="Mesaj giriniz..."
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 bg-gray-50 border border-gray-200 focus:bg-white focus:border-indigo-500 focus:ring-4 fovus:ring-indigo-500/10 rounded-xl px-4 py-3 outline-none transition-all"
      />

      <div className="relative flex items-center">
        <div className="absolute bottom-full -right-30 mb-3 z-50 drop-shadow-2xl">
          <EmojiPicker open={isOpen} onEmojiClick={handleEmoji} />
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="p-3 text-xl text-gray-400 hover:bg-gray-100/20 rounded-xl"
        >
          😂
        </button>
      </div>

      <button className="px-6 py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 active:scale-95 rounded-xl">
        Gönder
      </button>
    </form>
  );
};

export default Form;
