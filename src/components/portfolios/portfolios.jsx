import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";

const Portfolios = () => {
  const { t, i18n } = useTranslation();
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    axios
      .get("https://back.artjalyuzi.uz/portfolios")
      .then((res) => {
        const mappedPortfolios = res.data.data.map((portfolio) => ({
          ...portfolio,
        }));
        setPortfolios(mappedPortfolios);
      })
      .catch((err) => console.error("Error fetching portfolios:", err));
  }, [i18n.language]);

  return (
    <div className="py-10 px-4 sm:px-10 mx-auto" id="portfolio">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        slidesPerView={1}
        className="relative"
      >
        {portfolios.map((portfolio, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Description Box */}
              <div className="relative w-full lg:w-1/4">
                <div className="absolute inset-0 bg-[#d9d9d9] rounded-md shadow-md"></div>
                <div className="relative bg-black text-white p-6 top-4 left-4 rounded-md shadow-md">
                  <h2 className="text-2xl font-bold mb-2">
                    {t("links.portfolio")}
                  </h2>
                  <p className="text-sm leading-relaxed">
                    <strong>{t("logo")}</strong> {t("portfolio1")}
                    <br />
                    {t("portfolio2")} <strong>{t("portfolio3")}</strong>
                  </p>
                </div>
              </div>

              {/* Images */}
              <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {portfolio.image.map((img, idx) => (
                  <img
                    key={idx}
                    src={img.url}
                    alt={`Portfolio ${index} - Image ${idx + 1}`}
                    className="w-full h-40 md:h-60 object-cover rounded-md"
                  />
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Portfolios;
