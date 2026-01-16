import { useState } from "react";
import Issue from "./Issue";
import Status from "./Status";

const CustomerData = ({ fetchPromise }) => {
  const [taskstatus, setstatus] = useState([]);

  return (
    <div className="   grid  grid-cols-12 gap-5">
      <Issue
        fetchPromise={fetchPromise}
        taskstatus={taskstatus}
        setstatus={setstatus}
      >
        {" "}
      </Issue>

      {/* Right side content */}
      <Status taskstatus={taskstatus}></Status>
    </div>
  );
};

export default CustomerData;
