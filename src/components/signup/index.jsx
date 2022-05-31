import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

function Index() {
  const API_URL = import.meta.env.VITE_API_URL;

  const navigate = useNavigate();

  const [isloading, setisloading] = useState(false);

  const [fullname, setfullname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [phone, setphone] = useState("");
  const [country, setcountry] = useState("NG");
  const [shop_name, setshop_name] = useState("");
  const [username, setusername] = useState("");

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

  const createAccount = (e) => {
    e.preventDefault();
    if (
      fullname === "" ||
      email === "" ||
      password === "" ||
      confirmpassword === "" ||
      phone === "" ||
      shop_name === ""
    ) {
      notifyWarning("Please fill all the fields");
    }
    if (password !== confirmpassword) {
      notifyWarning("Password does not match");
    }
    if (password.length < 6) {
      notifyWarning("Password must be at least 6 characters");
    }
    if (phone.length < 11) {
      notifyWarning("Phone number must be at least 11 characters");
    }
    if (shop_name.length < 3) {
      notifyWarning("Shop name must be at least 3 characters");
    }
    if (
      fullname !== "" &&
      email !== "" &&
      password !== "" &&
      confirmpassword !== "" &&
      phone !== "" &&
      shop_name !== "" &&
      password === confirmpassword &&
      password.length >= 6 &&
      phone.length >= 11 &&
      shop_name.length >= 3
    ) {
      setisloading(true);

      axios
        .post(`${API_URL}createaccount`, {
          fullname,
          email,
          password,
          phone,
          shop_name,
          country,
          username,
        })
        .then((res) => {
          if (res.data.status === "success") {
            sessionStorage.setItem("token", res.data.token);
            sessionStorage.setItem("user", JSON.stringify(res.data.user));
            notifySucess("Account created successfully");
            setfullname("");
            setemail("");
            setpassword("");
            setconfirmpassword("");
            setphone("");
            setshop_name("");
            setusername("");
            setTimeout(() => {
              navigate("/creatores/dashboard");
            }, 3000);
          } else {
            notifyWarning(res.data.message);
          }
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          notifyWarning(err.response.data.message);
        })
        .finally(() => {
          setisloading(false);
        });
    }
  };

  return (
    <section>
      <h1 className="text-2xl font-extrabold">Hi ,Welcome 🙂</h1>
      <p className="text-slate-500">
        To create an account, please enter your details
      </p>
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
      <form className="w-full max-w-sm mt-6" onSubmit={createAccount}>
        <div className="mb-4">
          <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4">
            Fullname
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-[#ffce1a] rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            placeholder="Jane Doe"
            value={fullname}
            onChange={(e) => setfullname(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4">
            Username
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-[#ffce1a] rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            placeholder="Jane Doe"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4">
            Email
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-[#ffce1a] rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="email"
            placeholder="JaneDoe@gofitish.com"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4">
            Phone
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-[#ffce1a] rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="tel"
            placeholder="+234 7088 888 888"
            value={phone}
            onChange={(e) => setphone(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4">
            Shop_name
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-[#ffce1a] rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="tel"
            placeholder="Gofitish creatores"
            value={shop_name}
            onChange={(e) => setshop_name(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4">
            Password
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-[#ffce1a] rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="password"
            placeholder="********8"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4">
            confirm Password
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-[#ffce1a] rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="password"
            placeholder="********8"
            value={confirmpassword}
            onChange={(e) => setconfirmpassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between mb-3">
          <a
            className="inline-block align-baseline font-bold text-sm text-purple-500 hover:text-purple-800"
            href="/login"
          >
            Login
          </a>
        </div>
        {isloading ? (
          <button
            className="bg-purple-500 w-full hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            disabled
          >
            Loading...
          </button>
        ) : (
          <button
            className="bg-slate-900 hover:bg-[#ffce1a] w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
        )}
      </form>
    </section>
  );
}

export default Index;
