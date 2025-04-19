import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

const Catalog = () => {
  const { i18n } = useTranslation(); // Get i18n instance
  const { t } = useTranslation();
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get("https://back.artjalyuzi.uz/services")
      .then((res) => {
        const allImages = res.data.data.flatMap((service) =>
          service.image.map((img) => ({
            ...img,
            title: i18n.language === "ru" ? service.name_ru : service.name_uz, // Conditionally set title
          }))
        );
        setImages(allImages);
      })
      .catch((err) => console.error(err));
  }, [i18n.language]); // Re-run effect when language changes

  // Group images into chunks of 3
  const chunkedSlides = [];
  for (let i = 0; i < images.length; i += 3) {
    chunkedSlides.push(images.slice(i, i + 3));
  }

  return (
    <div className="py-10 px-4 md:px-16 bg-white" id="services">
      <h2 className="text-3xl font-semibold mb-6">{t("catalog1")}</h2>

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
      >
        {chunkedSlides.map((group, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {group.map((img, i) => (
                <div
                  key={i}
                  className="relative rounded-xl overflow-hidden shadow-md group"
                >
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-full h-[300px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-3">
                    <span className="text-white text-sm font-medium bg-white/10 px-2 py-1 rounded-lg backdrop-blur-sm">
                      {img.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Catalog;
