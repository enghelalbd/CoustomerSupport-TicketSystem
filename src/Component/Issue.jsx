import React, { use, useState } from "react";

import { MdOutlineDateRange } from "react-icons/md";

const Issue = ({ fetchPromise }) => {
  const initialData = use(fetchPromise);
  const [data, setData] = useState(initialData);
  return (
    <div className="col-span-8 gap-4 grid grid-cols-1 md:grid-cols-2   ">
      {data.map((customer) => (
        <div
          key={customer.id}
          className="bg-white rounded-xl shadow-sm border p-5 flex flex-col gap-3"
        >
          {/* Top Row */}
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">
              {customer.title}
            </h2>

            <span
              className={`px-4 py-1 text-sm font-medium rounded-full
    ${customer.status === "Open" && "bg-green-100 text-green-700"}
    ${customer.status === "In Progress" && "bg-yellow-100 text-yellow-700"}
  `}
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
                className={`px-4 py-1 text-sm font-medium rounded-full
    ${customer.priority === "Low" && "bg-green-100 text-green-700"}
    ${customer.priority === "Medium" && "bg-yellow-100 text-yellow-700"}
    ${customer.priority === "High" && "bg-red-100 text-red-700"}

  `}
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
