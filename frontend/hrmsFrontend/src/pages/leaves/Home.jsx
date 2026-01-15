import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">
        Leave Home
      </h3>

      {/* Summary cards */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="p-4 border rounded">
          <p className="text-sm">Leaves Taken</p>
          <h4 className="text-xl font-bold">8</h4>
        </div>

        <div className="p-4 border rounded">
          <p className="text-sm">Leaves Remaining</p>
          <h4 className="text-xl font-bold">12</h4>
        </div>

        <div className="p-4 border rounded">
          <p className="text-sm">Pending Requests</p>
          <h4 className="text-xl font-bold">2</h4>
        </div>
      </div>

      {/* Quick actions */}
      <div className="flex gap-4">
        <Link
          to="apply"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Apply Leave
        </Link>

        <Link
          to="my-leaves"
          className="px-4 py-2 border rounded"
        >
          View My Leaves
        </Link>
      </div>
    </div>
  );
};

export default Home;
