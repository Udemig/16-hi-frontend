import { Link } from "react-router-dom";
import formatNumber from "../utils/formatNumber";
import { useState } from "react";

// video kapat resmi ve süre özeti
const Thumbnail = ({ video, isHover, className = "" }) => {
  const thumbnail = video.thumbnail?.at(-1)?.url;
  const richThumbnail = video.richThumbnail?.at(-1)?.url;

  return (
    <div
      className={`relative rounded-xl overflow-hidden w-full aspect-video bg-zinc-900 ${className}`}
    >
      <img
        src={isHover && richThumbnail ? richThumbnail : thumbnail}
        className="size-full object-contain group-hover:scale-105 transition"
      />

      <span
        className={`absolute bottom-2 right-2 text-xs px-2 py-1 rounded ${video.isLive ? "bg-red-500" : "bg-black/80"}`}
      >
        {video.lengthText}
      </span>
    </div>
  );
};

const Card = ({ video }) => {
  // mouse card'ın üzerinde mi state'i
  const [isHover, setIsHover] = useState(false);

  // kanala fotosu
  const channelAvatar =
    video.channelThumbnail?.[0]?.url || video.channelAvatar?.[0]?.url || "/avatar.jpg";

  return (
    <Link
      className="group"
      to={`/watch?v=${video.videoId}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Thumbnail video={video} isHover={isHover} className="mb-3" />

      <div className="flex gap-3">
        <img src={channelAvatar} alt={video?.channelTitle} className="size-14 rounded-full" />

        <div className="flex-1 text-zinc-400">
          <h3 className="text-white line-clamp-2 leading-tight font-semibold">{video.title}</h3>

          <p className="my-1">{video.channelTitle}</p>

          <p className="flex items-center gap-1 text-sm">
            <span className="whitespace-nowrap">{formatNumber(video.viewCount)} görüntülenme</span>{" "}
            * <span className="line-clamp-1">{video.publishedTimeText}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
