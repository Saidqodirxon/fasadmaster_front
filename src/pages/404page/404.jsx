import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      {" "}
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <img
          src="/404.png"
          alt="404 error"
          className="max-w-xs md:max-w-md mb-6"
        />
        <h1 className="text-2xl md:text-3xl font-medium text-gray-800 mb-4">
          Страница не найдена
        </h1>
        <button
          onClick={() => navigate("/")}
          className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
        >
          Главная страница
        </button>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
