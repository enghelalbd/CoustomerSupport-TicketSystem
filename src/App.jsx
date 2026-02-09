import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Banner from "./Component/Banner";
import CoustomerData from "./Component/CoustomerData";
import TaskStatus from "./Component/TaskStatus";
import Resolved from "./Component/Resolved";

function App() {
  const [data, setData] = useState([]);
  const [taskstatus, setstatus] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((d) => {
        setData(d);
      });
  }, []);

  const handelresolved = (customer) => {
    alert("Issue Resolved Successfully");

    const newsolved = [...resolvedTasks, customer];
    setResolvedTasks(newsolved);

    const remainingTasks = taskstatus.filter((task) => task.id !== customer.id);
    setstatus(remainingTasks);

    const remainingresolvedtasks = data.filter(
      (task) => task.id !== customer.id,
    );
    setData(remainingresolvedtasks);
  };

  const handleData = (customer) => {
    alert("Issue Received");

    const newstatus = [...taskstatus, customer];
    setstatus(newstatus);
  };

  console.log(taskstatus);

  return (
    <>
      <Navbar></Navbar>
      <Banner
        totalTask={taskstatus.length}
        totalResolvedTasks={resolvedTasks.length}
      ></Banner>

      <CoustomerData
        data={data}
        taskstatus={taskstatus}
        resolvedTasks={resolvedTasks}
        setResolvedTasks={setResolvedTasks}
        handleData={handleData}
        handelresolved={handelresolved}
      />

      <Footer></Footer>
    </>
  );
}

export default App;
