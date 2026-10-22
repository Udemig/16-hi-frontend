import useFetch from "../hooks/useFetch";

const UserList = () => {
  // Object Destructring
  const { isLoading, error, data } = useFetch("https://dummyjson.com/users");

  if (isLoading) return <h1>Yükleniyor...</h1>;

  if (error) return <h1>HATA!</h1>;

  return (
    <div>
      <h1>Kullanıcı Listesi</h1>

      <div className="d-grid gap-5 mt-5">
        {data.users.map((user) => (
          <div className="card d-flex flex-column align-items-center">
            <img src={user.image} alt={user.firstName} width={100} />
            <h1>
              {user.firstName} {user.lastName}
            </h1>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
