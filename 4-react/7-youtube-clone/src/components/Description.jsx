// oxlint-disable react/purity
import formatNumber from "./../utils/formatNumber";
import { formatDistance } from "date-fns";
import { tr } from "date-fns/locale";
import { useState } from "react";

const Description = ({ video }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="bg-dark mt-4 p-2 cursor-pointer hover:bg-dark/80 transition rounded-md overflow-hidden"
    >
      <div className="flex gap-4 mb-2 font-semibold text-sm">
        <span>{formatNumber(video?.viewCount)} görüntülenme</span>
        <span>
          {formatDistance(new Date(video?.publishDate), new Date(), {
            addSuffix: true,
            locale: tr,
          })}
        </span>
      </div>

      <p className={`whitespace-pre-wrap ${!isOpen && "line-clamp-3"}`}>{video.description}</p>
    </div>
  );
};

export default Description;
