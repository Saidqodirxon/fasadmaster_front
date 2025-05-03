import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const ServicesGridMain = () => {
  const [categories, setCategories] = useState([]);
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language || "uz";

  useEffect(() => {
    axios
      .get("https://back.fasadmaster.uz/categories?page[limit]=8")
      .then((response) => {
        setCategories(response.data.data);
      })
      .catch((error) => {
        console.error("Kategoriya yuklashda xatolik:", error);
      });
  }, [currentLang]); // Til o‘zgarganini kuzatamiz

  const getCategoryName = (category) => {
    return category[`name_${currentLang}`] || category.name_uz;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
        {t("catalog.title_1")}{" "}
        <span className="text-[#71914B]">{t("catalog.title_2")}</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category._id}
            className="bg-white rounded-2xl shadow overflow-hidden flex flex-col items-center text-center p-4"
          >
            <img
              src={category.image?.url}
              alt={getCategoryName(category)}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-md font-medium text-gray-800 mb-2">
              {getCategoryName(category)}
            </h3>
            <Link
              to={`/services/${category._id}`}
              className=" bg-[#71914B] hover:bg-[#72914bb0] text-white px-6 py-2 rounded-full transition"
            >
              {t("catalog.more")}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesGridMain;
