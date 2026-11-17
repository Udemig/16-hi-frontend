const List = ({ title, array }) => {
  if (!title || !array || array.length === 0) return;

  return (
    <div className="mb-5">
      <h1 className="text-lg md:text-xl font-semibold mb-2">{title}</h1>

      <div className="flex flex-wrap gap-2">
        {array.map((item) => (
          <div className="tag">{item.name}</div>
        ))}
      </div>
    </div>
  );
};

export default List;
