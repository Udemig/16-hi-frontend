import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import CategoryLoader from "../components/CategoryLoader";
import AsyncContent from "../components/AsyncContent";
import ShortsListing from "./../components/ShortsListing";
import Card from "./../components/Card";

const Category = () => {
  const { category_name } = useParams();

  // "trendler" için trend listesi, diğer kategoriler için arama yapılır
  const url = category_name === "trendler" ? "/trending" : `/search?query=${category_name}`;

  // api'a ilgili kategorinin videoları için istek at
  const { isLoading, error, data } = useFetch(url);

  // api'dan gelen veriyi kategorize et
  const items = data?.data ?? [];
  const videos = items.filter((item) => item.type === "video");
  const [firstShorts, secondShorts] = items.filter((item) => item.type === "shorts_listing");

  return (
    <AsyncContent isLoading={isLoading} error={error} fallback={<CategoryLoader />}>
      <div className="page">
        <div className="space-y-8">
          {firstShorts && <ShortsListing data={firstShorts.data} />}

          <div className="grid gap-4 lg:gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {videos.map((video) => (
              <Card video={video} key={video.videoId} />
            ))}
          </div>

          {secondShorts && <ShortsListing data={secondShorts.data} />}
        </div>
      </div>
    </AsyncContent>
  );
};

export default Category;
