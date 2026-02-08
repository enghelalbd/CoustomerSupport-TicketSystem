import React from "react";
import Resolved from "./Resolved";
import TaskStatus from "./TaskStatus";

const Status = ({ handleData, taskstatus, resolvedTasks, handelresolved }) => {
  return (
    <div className=" col-span-4 ">
      {/* Task Status */}
      <TaskStatus
        taskstatus={taskstatus}
        handelresolved={handelresolved}
      ></TaskStatus>

      {/* Resolved Task */}
      <Resolved resolvedTasks={resolvedTasks}></Resolved>
    </div>
  );
};

export default Status;
