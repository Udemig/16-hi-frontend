import { onAuthStateChanged } from "firebase/auth";
import { Outlet, Navigate } from "react-router-dom";
import { auth } from "../../firebase";
import { useEffect, useState } from "react";
import Loader from "../Loader";

const Protected = () => {
  // 1. kullanıcının oturum state'ini tut
  const [user, setUser] = useState(undefined); // undefined - null - object

  // 2. kullanıcının oturum versine abone ol
  useEffect(() => {
    return onAuthStateChanged(auth, (user) => setUser(user));
  }, []);

  // 3. kullanıcı verisi yükleniyorsa loader bas
  if (user === undefined) return <Loader />;

  // 4. kullanıcı oturumu kaplıysa login sayfasına yönlendir
  // Navigate: sayfa yüklenme anında yapılan yönlendirmelerde kullanılır
  if (user === null) return <Navigate to="/login" replace />;

  // alt route'un elementini ekrana bas
  return <Outlet context={user} />;
};

export default Protected;
