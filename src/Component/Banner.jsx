import React from "react";

const Banner = () => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className=" bg-gradient-to-r from purple-600 to-purple-900  text-white mb-4">
        {" "}
        <h2 className="text-2xl "> Inprogress </h2>{" "}
        <span className="text-6xl font-bold"> 0 </span>
      </div>

      <div className=" bg-gradient-to-r from  from green-600 to-green-900    text-white mb-4">
        <h2 className="text-2xl"> Solved </h2>
        <span className="text-6xl font-bold"> 0 </span>
      </div>
    </div>
  );
};

export default Banner;
