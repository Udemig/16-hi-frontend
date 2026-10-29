import { useSearchParams } from "react-router-dom";
import useFetch from "./../hooks/useFetch";
import Card from "../components/Card";
import AsyncContent from "./../components/AsyncContent";
import ChannelInfo from "../components/ChannelInfo";
import Description from "../components/Description";
import Comments from "../components/Comments";

const Detail = () => {
  // url'den videoId parametresini al
  const [searchParms] = useSearchParams();
  const videoId = searchParms.get("v");

  // video bilgilerini getir
  const { isLoading, error, data } = useFetch(`/video/info?id=${videoId}&extend=1`);

  return (
    <div className="page flex flex-col lg:flex-row gap-6 mx-auto max-w-600">
      <div className="flex-1">
        <div className="aspect-video w-full overflow-hidden rounded-xl">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&playsinline=1`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>

        <div className="space-y-4 mt-5">
          <AsyncContent isLoading={isLoading} error={error}>
            <h1 className="text-xl font-bold line-clamp-2 leading-tight">{data?.title}</h1>
            <ChannelInfo video={data} />
            <Description video={data} />
            <Comments count={data?.commentCount} videoId={videoId} />
          </AsyncContent>
        </div>
      </div>

      <div className="lg:w-100">
        <h2 className="text-lg font-semibold mb-4">İlgili Videolar</h2>

        <div className="grid gap-2 sm:gap-5 lg:gap-2 sm:grid-cols-2 lg:grid-cols-1">
          {data?.relatedVideos?.data
            .filter((item) => item.type === "video")
            .map((item) => (
              <Card key={item.videoId} video={item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Detail;
