import React, { useEffect, useState } from "react";
import axios from "axios";

const ServicesMain = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get("https://back.fasadmaster.uz/services?is_visible=true&page[limit]=3")
      .then((response) => {
        setServices(response.data.data);
      })
      .catch((error) => {
        console.error("Xatolik yuz berdi:", error);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-8">
      {services.map((service) => (
        <div
          key={service._id}
          className="bg-white rounded-2xl shadow p-4 flex flex-col md:flex-row md:items-center md:gap-6"
        >
          <div className="md:w-1/2">
            <img
              src={service.image[0]?.url}
              alt={service.name_ru}
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="flex justify-center mt-4 md:mt-2">
              <button className="bg-[#71914B] text-white px-8 py-2 rounded-full hover:bg-[#71914B] transition">
                Подробнее
              </button>
            </div>
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0">
            <h2 className="text-xl font-semibold text-[#71914B]">
              {service.name_ru}
            </h2>
            <p className="text-gray-700 mt-2">
              Что входит в стоимость : От{" "}
              {Number(service.price).toLocaleString()} сум/м
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
              {service.description_ru
                .split(/\\n|\\r\\n|\\r|\n/)
                .filter((line) => line.trim() !== "")
                .map((line, idx) => (
                  <li key={idx}>{line}</li>
                ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesMain;
