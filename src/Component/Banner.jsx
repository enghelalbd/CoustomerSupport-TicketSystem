import React from "react";

const Banner = () => {
  return (
    <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* In Progress */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 to-purple-400 h-56 flex flex-col justify-center items-center text-white">
        <h3 className="text-2xl mb-4">In-Progress</h3>
        <span className="text-6xl font-bold">0</span>

        {/* pattern overlay (optional) */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,white_1px,transparent_1px)] bg-[length:20px_20px]"></div>
      </div>

      {/* Resolved */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 h-56 flex flex-col justify-center items-center text-white">
        <h3 className="text-2xl mb-4">Resolved</h3>
        <span className="text-6xl font-bold">0</span>

        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,white_1px,transparent_1px)] bg-[length:20px_20px]"></div>
      </div>
    </div>
  );
};

export default Banner;
