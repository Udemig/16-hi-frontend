import { useParams } from "react-router-dom";

const Category = () => {
  const { category_name } = useParams();

  return (
    <div className="page">
      <div className="space-y-8">
        <h1 className="text-5xl m-10">{category_name} sayfası</h1>
      </div>
    </div>
  );
};

export default Category;
