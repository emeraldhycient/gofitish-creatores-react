import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function Index() {
  const API_URL = import.meta.env.VITE_API_URL;

  const navigate = useNavigate();

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

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [isloading, setisloading] = useState("");

  const login = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setisloading(false);
      notifyWarning("Please fill all the fields");
      return;
    }

    setisloading(true);
    axios
      .post(`${API_URL}login`, {
        email,
        password,
      })
      .then((res) => {
        if (res.data.status === "success") {
          sessionStorage.setItem("token", res.data.token);
          sessionStorage.setItem("user", JSON.stringify(res.data.user));

          setisloading(false);
          notifySucess(res.data.message);

          setTimeout(() => {
            navigate("/creatores/dashboard");
          }, 1000);
        } else {
          setisloading(false);
          notifyWarning(res.data.message);
        }
      })
      .catch((err) => {
        setisloading(false);
        notifyWarning(err.response.data.message);
      });
  };

  return (
    <section>
      <h1 className="text-2xl font-extrabold">Welcome Back</h1>
      <p className="text-slate-500">Welcome back, please enter your details</p>
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
      <form className="w-full max-w-sm mt-6" onSubmit={login}>
        <div className="mb-4">
          <label
            className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
            htmlFor="inline-email"
          >
            Email
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-[#ffce1a] rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-email"
            type="email"
            placeholder="JaneDoe@gofitish.com"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
            htmlFor="inline-password"
          >
            Password
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-[#ffce1a] rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-password"
            type="password"
            placeholder="********8"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between mb-3">
          <a
            className="inline-block align-baseline font-bold text-sm text-purple-500 hover:text-purple-800"
            href="#"
          >
            Forgot Password?
          </a>
          <a
            className="inline-block align-baseline font-bold text-sm text-purple-500 hover:text-purple-800"
            href="/sign-up"
          >
            create account
          </a>
        </div>
        {isloading ? (
          <button className="bg-purple-500 w-full hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Loading...
          </button>
        ) : (
          <button
            className="bg-slate-900 hover:bg-[#ffce1a] w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
        )}
      </form>
    </section>
  );
}

export default Index;
