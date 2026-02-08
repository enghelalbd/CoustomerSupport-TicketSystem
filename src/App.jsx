import { Suspense, useEffect, useState } from "react";

import "./App.css";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";

import Banner from "./Component/Banner";
import CoustomerData from "./Component/CoustomerData";

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
  const handleData = (customer) => {
    alert("Issue Received");

    const newstatus = [...taskstatus, customer];
    setstatus(newstatus);
  };

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>

      <CoustomerData
        data={data}
        taskstatus={taskstatus}
        resolvedTasks={resolvedTasks}
        setResolvedTasks={setResolvedTasks}
        handleData={handleData}
      />

      <Footer></Footer>
    </>
  );
}

export default App;
