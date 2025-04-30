import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Catalog = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://back.fasadmaster.uz/categories")
      .then((response) => {
        setCategories(response.data.data);
      })
      .catch((error) => {
        console.error("Xatolik yuz berdi:", error);
      });
  }, []);

  const handleClick = (id) => {
    navigate(`/category/${id}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 mt-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
        НАШИ <span className="text-green-700">УСЛУГИ</span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
        {categories.map((cat) => (
          <div
            key={cat._id}
            className="bg-white rounded-xl shadow p-4 flex flex-col items-center"
          >
            <img
              src={cat.image?.url}
              alt={cat.name_ru}
              className="w-full h-32 object-cover rounded mb-3"
            />
            <p className="font-medium text-gray-700 text-sm md:text-base mb-4">
              {cat.name_ru}
            </p>
            <Link
              to={`/services/${cat._id}`}
              className="bg-green-600 text-white px-4 py-1 text-sm rounded-full hover:bg-green-700 transition"
            >
              Подробнее
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
