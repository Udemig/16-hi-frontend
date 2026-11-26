const Message = ({ item, userId }) => {
  // mesaj tarihini saat formatına çevir
  const time = item.createdAt
    ?.toDate()
    .toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" });

  // eğer mesajı aktif kullanıcı attıysa
  if (item.author.id === userId) {
    return (
      <div className="self-end flex flex-col items-end gap-0.5">
        <p className="bg-black text-white message rounded-[7px_7px_0_7px]">{item.text}</p>
        <span className="text-xs text-zinc-400">{time}</span>
      </div>
    );
  }

  // eğer mesajı başkası attıysa
  return (
    <div className="flex items-start gap-1">
      <img
        src={item.author.photo}
        alt={item.author.name}
        referrerPolicy="no-referrer"
        className="size-10 rounded-full"
      />

      <div className="flex flex-col gap-1 w-full">
        <span className="font-semibold">{item.author.name}</span>
        <p className="text-zinc-800 bg-zinc-200 message rounded-[0_7px_7px_7px]">{item.text}</p>
        <span className="text-xs text-zinc-400">{time}</span>
      </div>
    </div>
  );
};

export default Message;
