import { ToastContainer, toast } from "react-toastify";
import Layout from "../../../components/creatores/layout";
import UploadPodcast from "../../../components/creatores/podcast/uploadform";

function Uploadpodcast() {
  return (
    <Layout>
      <div className="w-full md:w-8/12 mx-auto mt-4  p-3">
        <div className="text-center bg-slate-900 text-gray-100 py-1">
          <p>Upload podcast courses</p>
        </div>
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
        <UploadPodcast />
      </div>
    </Layout>
  );
}

export default Uploadpodcast;
