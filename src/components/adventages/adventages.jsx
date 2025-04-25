import React from "react";
import icon1 from "/adventages/1.svg";
import icon2 from "/adventages/2.svg";
import icon3 from "/adventages/3.svg";
import icon4 from "/adventages/4.svg";
import icon5 from "/adventages/5.svg";
import { useTranslation } from "react-i18next";

export default function Adventages() {
  const { t } = useTranslation();

  const cards = [
    {
      icon: icon1,
      title: "adv.light_control_title",
      description: "adv.light_control_description",
    },
    {
      icon: icon2,
      title: "adv.adaptive_design_title",
      description: "adv.adaptive_design_description",
    },
    {
      icon: icon3,
      title: "adv.easy_maintenance_title",
      description: "adv.easy_maintenance_description",
    },
    {
      icon: icon4,
      title: "adv.sun_protection_title",
      description: "adv.sun_protection_description",
    },
    {
      icon: icon5,
      title: "adv.smart_control_title",
      description: "adv.smart_control_description",
    },
  ];

  return (
    <div>
      <h2 className="text-lg md:text-2xl font-semibold text-black text-start py-8 px-4 sm:px-6 lg:px-8">
        {t("adventages1")}
      </h2>
      <div className="bg-black text-white py-10 px-4">
        <h3 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 w-full md:w-3/4 mx-auto">
          {t("adventages2")}
        </h3>
        <p className="text-center text-sm md:text-base w-full md:w-3/4 lg:w-2/3 mx-auto leading-relaxed mb-8">
          {t("adventages3")}
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#1D1D1D] rounded-lg p-4 flex flex-col items-center text-center border border-[#777] w-[calc(50%-0.5rem)] sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-[300px]"
            >
              <img
                src={card.icon}
                alt={t(card.title)}
                className="mx-auto rounded-full my-4 w-16 h-16"
              />
              <h4 className="text-lg font-semibold mb-2">{t(card.title)}</h4>
              <p className="text-sm">{t(card.description)}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="#contacts"
            className="inline-block bg-[#9A124E] text-white hover:bg-white hover:text-[#9A124E] px-8 py-3 rounded-lg transition-colors"
          >
            {t("Boglanish")}
          </a>
        </div>
      </div>
    </div>
  );
}
