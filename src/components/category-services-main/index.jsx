import React, { useEffect, useState } from "react";
import axios from "axios";

const ServicesGridMain = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://back.fasadmaster.uz/categories?page[limit]=8")
      .then((response) => {
        setCategories(response.data.data);
      })
      .catch((error) => {
        console.error("Kategoriya yuklashda xatolik:", error);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
        НАШИ <span className="text-green-700">УСЛУГИ</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category._id}
            className="bg-white rounded-2xl shadow overflow-hidden flex flex-col items-center text-center p-4"
          >
            <img
              src={category.image?.url}
              alt={category.name_ru}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-md font-medium text-gray-800 mb-2">
              {category.name_ru}
            </h3>
            <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
              Подробнее
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesGridMain;
