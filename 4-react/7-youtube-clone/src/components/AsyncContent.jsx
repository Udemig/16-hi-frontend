import Error from "./Error";
import Spinner from "./Spinner";

// Wrapper Bileşen
// Başka bileşenleri kapsar ve onlara children propu ile erişebilir
const AsyncContent = ({ isLoading, error, fallback = <Spinner />, children }) => {
  if (isLoading) return fallback;

  if (error) return <Error message={error} />;

  return children;
};

export default AsyncContent;
