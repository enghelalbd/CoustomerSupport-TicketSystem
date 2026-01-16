import React from "react";
import Resolved from "./Resolved";
import TaskStatus from "./TaskStatus";

const Status = ({ handleData, taskstatus, resolvedstatus }) => {
  return (
    <div className=" col-span-4 ">
      {/* Task Status */}
      <TaskStatus taskstatus={taskstatus}></TaskStatus>

      {/* Resolved Task */}
      <Resolved resolvedstatus={resolvedstatus}></Resolved>
    </div>
  );
};

export default Status;
