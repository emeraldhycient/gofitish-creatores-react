import { useState, useEffect } from "react";

function Podcast({ podcast, index }) {
  const { title, poster, audio_url, listens, channel_id } = podcast;

  const [isplaying, setisplaying] = useState(false);
  const [audio, setaudio] = useState(null);
  const [duration, setduration] = useState(0);

  useEffect(() => setaudio(new Audio(audio_url)), [audio_url]);

  const playpause = () => {
    if (isplaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setisplaying(!isplaying);
  };

  return (
    <tr className="h-100 items-center text-center rounded border-b border-gray-200">
      <td className="p-4">
        <h4 className=" font-bold text-base text-gray-500 text-left">
          {index > 9 ? index : `0${index}`}
        </h4>
      </td>
      <td>
        <div className="text-left">
          <button
            onClick={(e) => playpause()}
            className="w-fit flex bg-slate-900 text-white px-2 py-1 mx-auto flex items-center justify-center items-center hover:bg-white  hover:border-slate-900 hover:text-yellow-500"
          >
            {isplaying ? "Pause" : "Play"}
          </button>
        </div>
      </td>
      <td>
        <h4 className=" font-semibold text-sm text-slate-900 text-left">
          {title}
        </h4>
      </td>
      <td>
        <h4 className=" font-semibold text-sm text-gray-500 text-left">
          {channel_id}
        </h4>
      </td>
      <td>
        <h4 className=" font-semibold text-sm text-gray-500 text-left">
          {(audio?.duration / 60).toFixed(2)}
        </h4>
      </td>
      <td>
        <h4 className=" font-semibold text-sm text-gray-500 text-left">
          {listens}
        </h4>
      </td>
    </tr>
  );
}

export default Podcast;
