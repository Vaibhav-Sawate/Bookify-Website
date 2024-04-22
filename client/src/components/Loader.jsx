import React from "react";

const Loader = () => {
  return (
    <div className="flex z-50 w-full h-screen justify-center items-center bg-loaderOverlay">
      <div className="text-center">
        <div className="w-20 h-20 md:w-32 md:h-32 bg-red-600  animate-ping  rounded-full flex items-center justify-center relative">
          <div className="absolute inset-0 rounded-full bg-red-600 blur-xl "></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;