import React from "react";

const TaskStatus = ({ customer, handleData, taskstatus }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-700 mb-6">Task Status</h1>

      <div className=" rounded-xl shadow-md p-5 mb-5">
        {/* <h2> {customer.customer.title} </h2> */}
        <div className="  border-amber-300">
          {taskstatus.length === 0 ? (
            <>
              <p className="text-xl font-semibold text-gray-800 mb-4">
                Select A ticket to add task status
              </p>
            </>
          ) : (
            <>
              {taskstatus.map((item, key) => (
                <div className="py-2 flex justify-between items-center gap-2">
                  {" "}
                  <h2>{item.title} </h2>{" "}
                  <button
                    className="bg-green-300 rounded "
                    onClick={() => onCompleteClick(item)}
                  >
                    {" "}
                    Complete{" "}
                  </button>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskStatus;
