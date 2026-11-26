import { useEffect, useRef, useState } from "react";
import { db } from "./../../firebase/index";
import { collection, onSnapshot, query, where, orderBy } from "firebase/firestore";
import Message from "./Message";

const Messages = ({ user, room }) => {
  const [messages, setMessages] = useState([]);
  const [isAtBottom, setIsAtBottom] = useState(true);
  const bottomRef = useRef(null);

  // veritabanındaki mesajlara abone ol
  useEffect(() => {
    // kolleksiyonun referansını al
    const collectionRef = collection(db, "messages");

    // sorgu ayarlarını yap: oda filtresi ve sıralama
    const q = query(collectionRef, where("room", "==", room), orderBy("createdAt", "asc"));

    // messages kolleksiyonuna abone ol
    onSnapshot(q, (snapshot) => {
      // geçici dizi
      const temp = [];

      // her belgenin versiine eriş
      snapshot.docs.forEach((doc) => temp.push({ id: doc.id, ...doc.data() }));

      // mesajları state'e aktar
      setMessages(temp);
    });
  }, [room]);

  // her yeni mesaj gelince çalışır
  useEffect(() => {
    if (messages.length < 1) return;

    scrollToBottom();
  }, [messages]);

  // sayfadaki son mesaja kaydır
  const scrollToBottom = () => {
    bottomRef.current.scrollIntoView();
  };

  // scrollbar kaydırılınca çalışır
  const handleScroll = (e) => {
    // clientHeight: container'ın kullanıcı ekranındaki yüksekliiği
    // scrollTop: kullanıcı yukarıdan aşağıya kaç px kaydırdı
    // scrollHeight: tüm scrollanbilir alanın yüksekliği
    const { clientHeight, scrollTop, scrollHeight } = e.target;

    // kullanıcı sayfanın en alt kısmında mı
    setIsAtBottom(clientHeight + scrollTop >= scrollHeight - 250);
  };

  return (
    <div
      onScroll={handleScroll}
      className="flex-1 p-3 flex flex-col w-full overflow-y-auto overflow-x-hidden relative gap-3"
    >
      {messages.length < 1 ? (
        <div className="h-full grid place-items-center text-zinc-400">
          <p>Sohbete ilk mesajı gönderin</p>
        </div>
      ) : (
        messages.map((item) => <Message item={item} userId={user.uid} key={item.id} />)
      )}
      {/* sayfanın en aşağısı: kaydırma referansı için */}
      <div ref={bottomRef} />
    </div>
  );
};

export default Messages;
