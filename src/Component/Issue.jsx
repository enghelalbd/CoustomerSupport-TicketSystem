import { use, useState } from "react";
import { MdOutlineDateRange } from "react-icons/md";
import Status from "./Status";
import Banner from "./Banner";
import TaskStatus from "./TaskStatus";

const Issue = ({ taskstatus, setstatus,resolvedTasks,setresolvedTasks }) => {
  return (
    <div className="col-span-8 gap-4 grid grid-cols-1 md:grid-cols-2">
      {/* <Banner totalTask={taskstatus.length} /> */}
      {Array.isArray(data) &&
        data.map((customer) => (
          <div
            key={customer.id}
            onClick={() => {
              handleData(customer);
            }}
            className="bg-white rounded-xl shadow-sm border p-5 flex flex-col gap-3 cursor-pointer hover:shadow-md transition"
          >
            {/* Top Row */}
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">
                {customer.title}
              </h2>

              <span
                className={`px-4 py-1 text-sm font-medium rounded-full ${
                  customer.status === "Open"
                    ? "bg-green-100 text-green-700"
                    : customer.status === "In Progress"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-gray-100 text-gray-700"
                }`}
              >
                {customer.status}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm">{customer.description}</p>

            {/* Bottom Row */}
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center gap-3">
                <span className="font-medium">#{customer.id}</span>

                <span
                  className={`px-4 py-1 text-sm font-medium rounded-full ${
                    customer.priority === "Low"
                      ? "bg-green-100 text-green-700"
                      : customer.priority === "Medium"
                        ? "bg-yellow-100 text-yellow-700"
                        : customer.priority === "High"
                          ? "bg-red-100 text-red-700"
                          : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {customer.priority}
                </span>

                <span className="text-gray-800 font-medium">
                  {customer.customer}
                </span>
              </div>

              <div className="flex items-center gap-1">
                <MdOutlineDateRange className="text-lg" />
                <span>{customer.createdAt}</span>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Issue;
