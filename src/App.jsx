import { Suspense } from "react";

import "./App.css";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";

import Banner from "./Component/Banner";
import CoustomerData from "./Component/CoustomerData";

const fetchData = async () => {
  const response = await fetch("/data.json");
  return response.json();
};

function App() {
  const fetchPromise = fetchData();

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>

      <Suspense fallback={<h2> Data Loading </h2>}>
        <CoustomerData fetchPromise={fetchPromise}> </CoustomerData>
      </Suspense>

      <Footer></Footer>
    </>
  );
}

export default App;
