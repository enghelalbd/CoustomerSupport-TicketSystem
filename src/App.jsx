import { useState } from "react";

import "./App.css";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import StatusCards from "./Component/StatusCards";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar></Navbar>
      <StatusCards></StatusCards>
      <Footer></Footer>
    </>
  );
}

export default App;
