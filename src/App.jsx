import { Suspense, useState } from "react";

import "./App.css";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import StatusCards from "./Component/StatusCards";
import Banner from "./Component/Banner";
import CoustomerData from "./Component/CoustomerData";

const fetchData = async () => {
  const response = await fetch("/data.json");
  return response.json();
};

function App() {
  const [count, setCount] = useState(0);
  const fetchPromise = fetchData();

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>

      <StatusCards></StatusCards>
      <Suspense fallback={<h2> Data Loading </h2>}>
        <CoustomerData fetchPromise={fetchPromise}> </CoustomerData>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
