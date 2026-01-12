import React from "react";

const Status = () => {
  return (
    <div className=" col-span-4 ">
      {/* Task Status */}
      <h1 className="text-3xl font-bold text-gray-700 mb-6">Task Status</h1>

      {/* Task Card 1 */}
      <div className="bg-white rounded-xl shadow-md p-5 mb-5">
        <p className="text-xl font-semibold text-gray-800 mb-4">
          Payment Failed - Card Declined
        </p>
        <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition">
          Complete
        </button>
      </div>

      {/* Task Card 2 */}
      <div className="bg-white rounded-xl shadow-md p-5 mb-10">
        <p className="text-xl font-semibold text-gray-800 mb-4">
          Incorrect Billing Address
        </p>
        <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition">
          Complete
        </button>
      </div>

      {/* Resolved Task */}
      <h2 className="text-3xl font-bold text-gray-700 mb-2">Resolved Task</h2>
      <p className="text-gray-500">No resolved tasks yet.</p>
    </div>
  );
};

export default Status;
