import { Link } from "react-router-dom";
import Layout from "../../../components/creatores/layout";
import Stat from "../../../components/creatores/Videos/stat";
import { BsFillCartCheckFill } from "react-icons/bs";
import { BiTransfer } from "react-icons/bi";
import { FcMoneyTransfer } from "react-icons/fc";
import { RiStore3Line } from "react-icons/ri";
import Video from "../../../components/creatores/videos/video";
import excercise from "../../../assets/videos/Exercise.mp4";
import poster from "../../../assets/images/sales.png";

function Videos() {
  const videos = [
    {
      id: 1,
      title: "Exercise for optimal health",
      poster: poster,
      video_url: excercise,
      views: "1,000,000",
      channel_id: "Creator",
    },
    {
      id: 2,
      title: "Exercise for optimal health",
      poster: poster,
      video_url: excercise,
      views: "1,000,000",
      channel_id: "Creator",
    },
    {
      id: 3,
      title: "Exercise for optimal health",
      poster: poster,
      video_url: excercise,
      views: "1,000,000",
      channel_id: "Creator",
    },
    {
      id: 4,
      title: "Exercise for optimal health",
      poster: poster,
      video_url: excercise,
      views: "1,000,000",
      channel_id: "Creator",
    },
    {
      id: 5,
      title: "Exercise for optimal health",
      poster: poster,
      video_url: excercise,
      views: "1,000,000",
      channel_id: "Creator",
    },
    {
      id: 6,
      title: "Exercise for optimal health",
      poster: poster,
      video_url: excercise,
      views: "1,000,000",
      channel_id: "Creator",
    },
  ];

  return (
    <Layout>
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
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            <h6>Videos</h6>
          </Link>
        </h5>
        <Link to="/creatores/videos/upload" className="ml-4">
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
            <span className="ml-2 text-sm">Upload Video</span>
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 mt-4">
        <Stat
          name="products"
          total={34246}
          icon={<RiStore3Line size={25} className="text-[#ffce1a] mr-2" />}
        />
        <Stat
          name="sold"
          total={34575}
          icon={<BiTransfer size={25} className="text-[#ffce1a] mr-2" />}
        />
        <Stat
          name="Earnings"
          total={367854}
          icon={<FcMoneyTransfer size={25} className="text-[#ffce1a] mr-2" />}
        />
        <Stat
          name="products"
          total={397864}
          icon={
            <BsFillCartCheckFill size={25} className="text-[#ffce1a] mr-2" />
          }
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-6 mt-4">
        {videos.map((video) => (
          <Video key={video.id} video={video} />
        ))}
      </div>
    </Layout>
  );
}

export default Videos;
