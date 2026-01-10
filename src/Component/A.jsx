import React from "react";

const customers = [
  {
    id: 1,
    name: "Rahim Uddin",
    issue: "Login problem",
    priority: "High",
    status: "Open",
  },
  {
    id: 2,
    name: "Karim Ali",
    issue: "Payment failed",
    priority: "Medium",
    status: "In Progress",
  },
  {
    id: 3,
    name: "Salma Akter",
    issue: "UI bug",
    priority: "Low",
    status: "Closed",
  },
];

const CustomerData = () => {
  return (
    <div className="p-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {customers.map((customer) => (
        <div
          key={customer.id}
          className="border rounded-lg p-4 shadow hover:shadow-md transition"
        >
          <h2 className="text-xl font-semibold mb-2">{customer.name}</h2>

          <p className="text-gray-600 mb-2">Issue: {customer.issue}</p>

          {/* Priority */}
          <p className="mb-1">
            Priority:{" "}
            <span
              className={`font-semibold
                ${customer.priority === "High" && "text-red-600"}
                ${customer.priority === "Medium" && "text-yellow-500"}
                ${customer.priority === "Low" && "text-green-600"}
              `}
            >
              {customer.priority}
            </span>
          </p>

          {/* Status */}
          <p>
            Status:{" "}
            <span
              className={`font-medium
                ${customer.status === "Open" && "text-blue-600"}
                ${customer.status === "In Progress" && "text-orange-500"}
                ${customer.status === "Closed" && "text-gray-500"}
              `}
            >
              {customer.status}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default CustomerData;
