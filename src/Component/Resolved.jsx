import React from "react";

const Resolved = ({ resolvedTasks }) => {
  console.log(resolvedTasks);
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-700 mb-2">Resolved Task</h2>

      <div className="bg-white rounded-xl shadow-md p-5 mb-5">
        <p className="text-xl font-semibold text-gray-800 mb-4">
          Select A ticket to add task status
        </p>
      </div>
    </div>
  );
};

export default Resolved;
