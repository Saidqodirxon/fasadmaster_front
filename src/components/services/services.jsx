import React from "react";
import image1 from "/services/img1.png";
import image2 from "/services/img2.png";
import image3 from "/services/img3.png";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation(); // Get t function for translations

  const cards = [
    {
      hashtag: "services.installation_hashtag",
      title: "services.installation_title",
      description: "services.installation_description",
      image: image1,
    },
    {
      hashtag: "services.free_measurement_hashtag",
      title: "services.free_measurement_title",
      description: "services.free_measurement_description",
      image: image2,
    },
    {
      hashtag: "services.delivery_hashtag",
      title: "services.delivery_title",
      description: "services.delivery_description",
      image: image3,
    },
  ];

  return (
    <div className="bg-black text-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6 mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`bg-[#1D1D1D] rounded-lg p-[5vw] sm:p-[3vw] flex flex-col ${
              index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center border border-[#777] gap-4`}
          >
            <div className="flex-1">
              <p className="text-sm text-gray-400 mb-2">{t(card.hashtag)}</p>
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                {t(card.title)}
              </h3>
              <p className="text-sm text-gray-300">{t(card.description)}</p>
            </div>
            <img
              src={card.image}
              alt={t(card.title)} // Use translated title for alt text
              className="w-full max-w-[400px] object-cover rounded-md"
            />
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <a
          href="#contacts"
          className="mt-[1rem] text-center bg-[#9A124E] text-white hover:bg-white hover:text-[#9A124E] px-[5vw] py-[1vw] rounded-lg"
        >
          {t("Boglanish")}
        </a>
      </div>
    </div>
  );
}
