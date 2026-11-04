import { LoaderCircle } from "lucide-react";

const Loader = () => {
  return (
    <div className="flex justify-center my-80">
      <LoaderCircle className="size-8 text-blue-400 animate-spin" />
    </div>
  );
};

export default Loader;
