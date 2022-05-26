import React from "react";

function Video({ video }) {
  const { title, poster, video_url, views, channel_id } = video;
  return (
    <div className="h-fit mb-4 border-b-[.1rem] border-[#ffce1a] shadow-lg pt-2">
      <video
        src={video_url}
        poster={poster}
        controls
        className="w-full h-36 md:h-28 rounded-lg"
      ></video>
      <div className="px-3 w-full mt-2">
        <h4 className="text-slate-900 font-bold text-base mb-2">{title}</h4>
        <div className="flex justify-between items-center">
          <h5 className="text-gray-500 font-semibold text-xs mb-1">
            {channel_id}
          </h5>
          <h5 className="text-gray-500 font-light text-xs">
            {views} Views 1day
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Video;
