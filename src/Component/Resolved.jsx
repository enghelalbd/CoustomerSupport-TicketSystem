import React from "react";

const Resolved = ({ resolvedTasks }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-700 mb-6">Resolved Task</h1>

      <div className="rounded-xl shadow-md p-5 mb-5">
        <div className="border-amber-300">
          {resolvedTasks.length === 0 ? (
            <>
              <p className="text-xl font-semibold text-gray-800 mb-4">
                No resolved tasks yet
              </p>
            </>
          ) : (
            <>
              {resolvedTasks.map((item, key) => (
                <div
                  key={key}
                  className="py-2 flex justify-between items-center gap-2"
                >
                  <h2>{item.title}</h2>
                  <button className="bg-green-200 rounded ">Completed</button>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resolved;
