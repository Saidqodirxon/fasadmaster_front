import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Autoplay uchun stil fayli
import "./hero.scss";
import { Link, useNavigate } from "react-router-dom";

function Hero() {
  const { t } = useTranslation();
  const [banners, setBanners] = useState([]);
  const currentLang = localStorage.getItem("i18nextLng") || "uz";
  const navigateTo = useNavigate();

  useEffect(() => {
    axios
      .get("https://back.artjalyuzi.uz/banners")
      .then((response) => {
        setBanners(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching banners:", error);
      });
  }, []);

  return (
    <div className="container py-5">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: true }}
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner._id}>
            <Link
              to={banner?.link ? banner.link : "#"}
              className="flex flex-col lg:flex-row items-center gap-6"
            >
              <div className="flex-1 relative shadow-lg rounded-lg bg-[#888]">
                <img
                  src={banner.image?.url}
                  alt={banner.name_uz}
                  className="w-full h-auto object-cover relative -left-5 -top-5 rounded-lg shadow-md"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-4xl font-bold mb-4">
                  {currentLang === "ru" ? banner.name_ru : banner.name_uz}
                </h2>
                <p className="text-lg text-gray-600">
                  {currentLang === "ru"
                    ? banner.description_ru
                    : banner.description_uz}
                </p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <a
        href="#contacts"
        className="mt-[1rem] text-center bg-[#9A124E] text-white hover:bg-white hover:text-[#9A124E]  px-[5vw] py-[1vw] rounded-lg"
      >
        {t("Boglanish")}
      </a>
    </div>
  );
}

export default Hero;
