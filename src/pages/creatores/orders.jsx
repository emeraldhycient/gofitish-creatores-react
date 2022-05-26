import { Link } from "react-router-dom";
import Layout from "../../components/creatores/layout";
import List from "../../components/creatores/orders/list";

function Orders() {
  return (
    <Layout>
      <h5 className="text-slate-900 text-sm my-4 hover:text-yellow-500">
        <Link to="/creatores/orders" className="flex items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
            <path
              fillRule="evenodd"
              d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <h6>Orders</h6>
        </Link>
      </h5>
      <div className=" mt-4 shadow py-5 overflow-x-auto mb-4">
        <table className="table-auto text-center border border-gray-200 mx-auto">
          <thead>
            <tr className="text-sm text-gray-400">
              <th className="w-fit p-4 text-center border-r border-gray-200">
                Transaction ID
              </th>
              <th className="w-fit p-4 text-center  border-r border-gray-200">
                Name
              </th>
              <th className="w-fit p-4 text-center  border-r border-gray-200">
                Email
              </th>
              <th className="w-fit p-4 text-center  border-r border-gray-200">
                Transaction type
              </th>
              <th className="w-fit p-4 text-center  border-r border-gray-200">
                Currency
              </th>
              <th className="w-fit p-4 text-center  border-r border-gray-200">
                Amount
              </th>

              <th className="w-fit p-4 text-center  border-r border-gray-200">
                Payment Status
              </th>
              <th className="w-fit p-4 text-center  border-r border-gray-200">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            <List />
            <List />
            <List />
            <List />
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default Orders;
