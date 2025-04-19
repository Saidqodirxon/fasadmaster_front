import React, { useState } from "react";
import { FaPlay, FaPause, FaInstagram, FaTelegram } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import img1 from "/about/img_1.webp";
import img2 from "/about/img_2.webp";
import imgmob1 from "/about/img_mob1.png";
import imgmob2 from "/about/img_mob2.png";

import "./style.scss";

function About() {
  const [playing, setPlaying] = useState(false);
  const { t } = useTranslation();

  return (
    <div
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gray-100 py-10 px-4 overflow-hidden"
    >
      {/* "Biz haqimizda" heading */}
      <h2 className="text-lg md:text-2xl font-semibold text-black absolute top-5 left-5 md:left-10">
        {t("links.about_us")}
      </h2>

      {/* Desktop-only Images positioned */}
      <div className="absolute inset-0 flex justify-between items-center pointer-events-none about-img">
        <div className="absolute left-0 top-1/4 w-1/4 md:w-1/5 hidden md:block">
          <img
            src={img1}
            alt="Image 1"
            className="object-cover w-full h-auto img1"
          />
        </div>
        <div className="absolute right-0 top-1/3 w-1/4 md:w-1/5 hidden md:block">
          <img
            src={img2}
            alt="Image 2"
            className="object-cover w-full h-auto"
          />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center w-full md:w-[70vw]">
        {/* "Art Jalyuzi" heading */}
        <h3
          className="text-4xl md:text-6xl lg:text-8xl text-white uppercase font-bold mb-4 md:hidden"
          style={{ letterSpacing: "1vw" }}
        >
          {t("logo")}
        </h3>
        <div className="flex relative mobile-show md:hidden">
          <h3
            className="text-4xl md:text-6xl lg:text-8xl text-white uppercase font-bold mb-4"
            style={{ letterSpacing: "1vw" }}
          >
            {t("logo")}
          </h3>
          <div className="absolute left-[65vw] top-[-10vw] w-1/4 md:w-1/5 z-10">
            <img src={imgmob1} alt="Image 1" className="object-cover w-full" />
          </div>
          <div className="absolute right-[-10vw] top-[-15vw] w-1/4 md:w-1/5">
            <img src={imgmob2} alt="Image 2" className="object-cover w-full" />
          </div>
        </div>

        {/* "Siz tanlaysiz – biz go‘zallik yaratamiz!" heading */}
        <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-black mb-6 w-full md:w-3/4 mx-auto">
          {t("about1")}
        </h2>

        {/* Description */}
        <p className="text-sm md:text-base text-gray-600 w-full md:w-3/4 lg:w-2/3 mx-auto mb-8 leading-relaxed">
          {t("about2")} <br />
          <span className="font-bold text-black">{t("about3")}</span>
        </p>

        {/* Social media section */}
        <span className="text-sm md:text-base text-gray-600 block mb-4">
          {t("about4")}
        </span>
        <div className="flex justify-center gap-4 md:gap-6 mb-6">
          <a
            href="https://www.instagram.com/art_jalyuziuzb"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-pink-700"
          >
            <FaInstagram
              size={20}
              className="text-lg md:text-2xl text-[#9A124E] cursor-pointer hover:text-[#777]"
            />
          </a>
          <a
            href="https://t.me/Official_ART_Jalyuzi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-pink-700"
          >
            <FaTelegram
              size={20}
              className="text-lg md:text-2xl text-[#9A124E] cursor-pointer hover:text-[#777]"
            />
          </a>
        </div>

        {/* Button */}
        <a
          href="#contacts"
          className="mt-[1rem] text-center bg-[#9A124E] text-white hover:bg-white hover:text-[#9A124E]  px-[5vw] py-[1vw] rounded-lg"
        >
          {t("Boglanish")}
        </a>
      </div>
    </div>
  );
}

export default About;
