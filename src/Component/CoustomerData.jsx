import Issue from "./Issue";
import Status from "./Status";
const CustomerData = ({
  data,
  taskstatus,
  setstatus,
  resolvedTasks,
  setResolvedTasks,
  handleData,
  handelresolved,
}) => {
  return (
    <div className="   grid  grid-cols-12 gap-5">
      <Issue
        data={data}
        handleData={handleData}
        taskstatus={taskstatus}
        setstatus={setstatus}
        resolvedTasks={resolvedTasks}
        setResolvedTasks={setResolvedTasks}
        handelresolved={handelresolved}
      ></Issue>

      {/* Right side content */}

      <Status
        taskstatus={taskstatus}
        handelresolved={handelresolved}
        resolvedTasks={resolvedTasks}
      ></Status>
    </div>
  );
};

export default CustomerData;
