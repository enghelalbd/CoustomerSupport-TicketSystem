import React, { useState, use } from "react";
import { MdOutlineDateRange } from "react-icons/md";

const CustomerData = ({ fetchPromise }) => {
  const initialData = use(fetchPromise);
  const [data] = useState(initialData);

  return (
    <div className="space-y-4 grid  md:grid-cols-1 lg:grid-cols-2  gap-2 ">
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

            <span className="px-4 py-1 text-sm font-medium rounded-full bg-green-100 text-green-700">
              {customer.status}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm">{customer.description}</p>

          {/* Bottom Row */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-3">
              <span className="font-medium">#{customer.id}</span>

              <span className="text-red-500 font-semibold uppercase">
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

export default CustomerData;
