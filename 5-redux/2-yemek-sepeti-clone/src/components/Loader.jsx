import { LoaderCircle } from "lucide-react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center my-20">
      <LoaderCircle className="size-8 animate-spin text-brand" />
    </div>
  );
};

export default Loader;
