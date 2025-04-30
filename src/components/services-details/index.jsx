import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ServiceByCategoryIdDetails = () => {
  const { id } = useParams();
  const [categoryName, setCategoryName] = useState("");
  const [view1, setView1] = useState([]);
  const [view2, setView2] = useState([]);

  useEffect(() => {
    axios.get(`https://back.fasadmaster.uz/categories`).then((res) => {
      const cat = res.data.data.find((c) => c._id === id);
      if (cat) setCategoryName(cat.name_ru);
    });

    axios
      .get(`https://back.fasadmaster.uz/services?view=1&categoryId=${id}`)
      .then((res) => setView1(res.data.data));

    axios
      .get(`https://back.fasadmaster.uz/services?view=2&categoryId=${id}`)
      .then((res) => setView2(res.data.data));
  }, [id]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div
        className="relative w-full h-52 md:h-64 bg-cover bg-center rounded-xl mb-10"
        style={{ backgroundImage: "url('/contacts.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-white text-2xl md:text-4xl font-semibold">
            Наши Услуги — {categoryName}
          </h1>
        </div>
      </div>

      <h2 className=" text-2xl md:text-3xl font-semibold text-center mb-10">
        ВИДЫ{" "}
        <span className="text-green-700">{categoryName?.toUpperCase()}</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-12">
        {view1.map((item) => (
          <div
            key={item._id}
            className="bg-white p-4 rounded-xl shadow text-center"
          >
            <img
              src={item.image[0]?.url}
              alt={item.name_ru}
              className="w-full h-32 object-cover rounded mb-3"
            />
            <button className="bg-green-600 text-white text-sm px-4 py-1 rounded-full mb-2">
              От {Number(item.price).toLocaleString()} сум/м²
            </button>
            <ul className="text-sm text-gray-600 space-y-1">
              {item.description_ru.split(/\n|\r\n|\r/).map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {view2.map((item) => (
        <div
          key={item._id}
          className="flex flex-col md:flex-row items-center gap-6 mb-12"
        >
          <div className="w-[50%] ">
            <h3 className="text-xl font-semibold text-green-700 mb-4">
              {item.name_ru}
            </h3>
            <p className="w-[50%] flex flex-wrap text-sm text-gray-700 whitespace-pre-line">
              {item.description_ru}
            </p>
          </div>
          <img
            src={item.image[0]?.url}
            alt={item.name_ru}
            className="md:w-[50%] w-full rounded-xl object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ServiceByCategoryIdDetails;
