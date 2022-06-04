import { useState, useEffect } from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Podcast({ podcast, index }) {
  const { podcast_id, title, poster_url, podcast_url, views, uploader_name } =
    podcast;

  const API_URL = import.meta.env.VITE_API_URL;

  const [isplaying, setisplaying] = useState(false);
  const [audio, setaudio] = useState(null);
  const [duration, setduration] = useState(0);

  useEffect(() => {
    setaudio(new Audio(podcast_url));
    if (audio) {
      setduration(audio.duration);
    }
  }, [podcast_url]);

  const playpause = () => {
    if (isplaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setisplaying(!isplaying);
  };

  const notifyWarning = (msg) => {
    toast.warn(`${msg}`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const notifySucess = (msg) => {
    toast.success(`${msg}`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const deletePodcast = (id) => {
    axios
      .delete(`${API_URL}podcasts/${id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        notifySucess(res.data.message);
      })
      .catch((err) => {
        console.log(err);
        notifyWarning(err.response.data.message);
      });
  };

  return (
    <>
      <tr className="h-100 items-center text-center rounded border-b border-gray-200">
        <td className="p-4">
          <h4 className=" font-bold text-base text-gray-500 text-left">
            {index}
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
            {uploader_name}
          </h4>
        </td>
        <td>
          <h4 className=" font-semibold text-sm text-gray-500 text-left">
            {duration.toFixed(2)}
          </h4>
        </td>
        <td>
          <h4 className=" font-semibold text-sm text-gray-500 text-left">
            {views}
          </h4>
        </td>
        <td>
          <h4
            className=" font-semibold text-sm text-gray-500 text-left"
            onClick={(e) => deletePodcast(podcast_id)}
          >
            <button className="w-fit flex bg-slate-900 text-white px-2 py-1 mx-auto flex items-center justify-center items-center hover:bg-white  hover:border-slate-900 hover:text-yellow-500">
              <RiDeleteBin2Fill className="text-red-400" size={25} />
            </button>
          </h4>
        </td>
        <td>
          <h4 className=" font-semibold text-sm text-gray-500 text-left">
            <button className="w-fit flex  text-white px-2 py-1 mx-auto flex items-center justify-center items-center hover:bg-white  hover:border-slate-900 hover:text-yellow-500">
              <BiEditAlt className="text-blue-400" size={25} />
            </button>
          </h4>
        </td>
      </tr>
    </>
  );
}

export default Podcast;
