import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../../../components/creatores/layout";
import { FcAreaChart } from "react-icons/fc";
import Podcast from "../../../components/creatores/podcast/podcast";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Podcasts() {
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

  const [pod, setpod] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}podcasts/user/${user.user_id}`)
      .then((res) => {
        setpod(res.data.podcasts);
      })
      .catch((err) => {
        console.log(err);
        notifyWarning(err.response.data.message);
      });
  }, []);

  return (
    <Layout>
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
      <section className="p-3">
        <div className="flex justify-between items-center mb-4">
          <h5 className="text-slate-900 text-sm my-4 hover:text-yellow-500">
            <Link to="/creatores/Videos" className="flex items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                />
              </svg>
              <h6>Podcast</h6>
            </Link>
          </h5>
          <Link to="/creatores/podcasts/upload" className="ml-4">
            <button className="w-fit flex bg-slate-900 text-white px-2 py-1 mx-auto flex items-center justify-center items-center hover:bg-white border-[.1rem] hover:border-slate-900 hover:text-yellow-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-yellow-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <span className="ml-2 text-sm">Upload podcast</span>
            </button>
          </Link>
        </div>
      </section>
      <section className=" md:w-10/12 md:mx-auto mb-4">
        <h1 className="text-base text-gray-500 font-bold mb-2 flex">
          Podcasts <FcAreaChart size={22} />
        </h1>
        <table className="table-auto w-full rounded-2xl border-[.01rem] border-gray-200">
          <thead>
            <tr className=" rounded-full border-b border-gray-200">
              <th className="text-slate-900 text-left p-5">#</th>
              <th className="text-slate-900 py-4 text-left">Audio</th>
              <th className="text-slate-900 text-left">Title</th>
              <th className="text-slate-900 text-left">Author</th>
              <th className="text-slate-900 text-left">Time</th>
              <th className="text-slate-900 text-left">Listens</th>
              <th className="text-slate-900 text-left">Delete</th>
              <th className="text-slate-900 text-left">Edit</th>
            </tr>
          </thead>
          <tbody>
            {pod.map((podcast, index) => (
              <Podcast podcast={podcast} key={index} index={index} />
            ))}
          </tbody>
        </table>
      </section>
    </Layout>
  );
}

export default Podcasts;
