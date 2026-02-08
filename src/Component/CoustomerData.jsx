import { useState } from "react";
import Issue from "./Issue";
import Status from "./Status";

const CustomerData = ({
  data,
  taskstatus,
  setstatus,
  resolvedTasks,
  setResolvedTasks,
}) => {
  return (
    <div className="   grid  grid-cols-12 gap-5">
      <Issue
        taskstatus={taskstatus}
        setstatus={setstatus}
        resolvedTasks={resolvedTasks}
        setResolvedTasks={setResolvedTasks}
      >
        {" "}
      </Issue>

      {/* Right side content */}
      <Status taskstatus={taskstatus}></Status>
    </div>
  );
};

export default CustomerData;
