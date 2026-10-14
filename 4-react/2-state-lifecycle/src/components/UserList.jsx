import { Children, useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // bileşen ekran basılma anında çalışır:
  useEffect(() => {
    setIsLoading(true); // yükleniyorMu: evet

    // api isteğini at
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users)) // kullanıcıları state'e aktar
      .catch((err) => setError(err.message)) // hata mesajını state'e aktar
      .finally(() => setIsLoading(false)); // yükleniyorMu: hayır
  }, []);

  // api'dan yanı beliyorsak:
  if (isLoading) return <h1>Yükleniyor...</h1>;

  // api'dan hata geldiyse:
  if (error) return <h1>HATA!: {error}</h1>;

  // api'dan veri geldiyse:
  return (
    <div>
      <h1>Kullanıcı Listesi</h1>

      {users.map((user) => (
        <div>
          <img src={user.image} width={50} />
          <h2>
            {user.firstName} {user.lastName}
          </h2>
          <h5>{user.email}</h5>
        </div>
      ))}
    </div>
  );
};

export default UserList;
