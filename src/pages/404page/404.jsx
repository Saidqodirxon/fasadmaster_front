import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#9A124E] text-white">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl mt-4">Page Not Found</p>
      <a
        href="/"
        className="mt-4 px-6 py-3 text-sm bg-white text-[#9A124E] rounded-md hover:bg-gray-200"
      >
        Go to Homepage
      </a>
    </div>
  );
};

export default NotFound;
