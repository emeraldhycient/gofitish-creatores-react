import { useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UploadPodcast() {
  const API_URL = import.meta.env.VITE_API_URL;
  const user = JSON.parse(sessionStorage.getItem("user"));

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

  const [isloading, setisloading] = useState(false);

  const [title, settitle] = useState("");
  const [poster, setposter] = useState("");
  const [podcast, setpodcast] = useState("");
  const [category, setcategory] = useState("");
  const [description, setdescription] = useState("");

  const uploadpodcast = (e) => {
    e.preventDefault();

    setisloading(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("poster", poster);
    formData.append("podcast", podcast);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("uploader_id", user.user_id);
    //formData.append("uploader_id", user.id);
    formData.append("uploader_name", user.shop_name);

    axios
      .post(`${API_URL}podcasts/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        // console.log(res);
        notifySucess(res.data.message);
      })
      .catch((err) => {
        console.log(err);
        notifyWarning(err.response.data.message);
      })
      .finally(() => {
        setisloading(false);
      });

    return false;
  };

  return (
    <div className="shadow p-3 h-fit">
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <form onSubmit={(e) => uploadpodcast(e)}>
        <>
          <div className="w-full px-3 mb-6">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Title
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="e.g gofitish logistics "
              value={title}
              onChange={(e) => settitle(e.target.value)}
              required
            />
          </div>
          <div className="w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Poster
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="file"
              placeholder="cover image to be displayed before podcast plays"
              onChange={(e) => setposter(e.target.files[0])}
              accept="image/*"
              required
            />
          </div>

          <div className="w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              podcast Audio
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="file"
              placeholder="podcast course to be uploaded"
              onChange={(e) => setpodcast(e.target.files[0])}
              accept=".mp3,audio/*"
              required
            />
          </div>

          <div className="w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Course Category
            </label>
            <select
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={category}
              onChange={(e) => setcategory(e.target.value)}
              required
            >
              <option>Select course Category</option>
              <option>Beauty</option>
              <option>Fashion</option>
            </select>
          </div>
          <div className="w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Description
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="what is the course about,selling points,etc"
              value={description}
              onChange={(e) => setdescription(e.target.value)}
              required
            />
          </div>
          {isloading ? (
            <div className="w-full px-3 mb-6">
              <div className="flex justify-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="sr-only text-yellow-500">Loading...</span>
                </div>
              </div>
            </div>
          ) : (
            <button
              type="submit"
              className="w-fit flex bg-slate-900 text-white px-5 py-2 mx-auto flex items-center justify-center items-center hover:bg-white border-[.1rem] hover:border-slate-900 hover:text-yellow-500"
            >
              <span className=" text-sm">Upload</span>
            </button>
          )}
        </>
      </form>
    </div>
  );
}

export default UploadPodcast;
