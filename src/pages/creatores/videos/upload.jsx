import Layout from "../../../components/creatores/layout";
import Uploadform from "../../../components/creatores/Videos/uploadform";

function Upload() {
  return (
    <Layout>
      <div className="w-full md:w-8/12 mx-auto mt-4  p-3">
        <div className="text-center bg-slate-900 text-gray-100 py-1">
          <p>Upload video courses</p>
        </div>
        <Uploadform />
      </div>
    </Layout>
  );
}

export default Upload;
