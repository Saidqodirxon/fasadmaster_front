import React from "react";
import { FaInstagram, FaTelegram } from "react-icons/fa";
import phone from "../../assets/icons/phone.svg";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation(); // Get t function for translations

  const pages = [
    { key: "about_us", url: "about" },
    { key: "portfolio", url: "portfolio" },
    { key: "services", url: "services" },
    { key: "contacts", url: "contacts" },
  ];

  return (
    <footer className="bg-white text-black py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center gap-8">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <img
            src="/logo.png" // Replace with actual logo path
            alt={t("logo")} // Use translated logo text for alt
            className="h-16 w-auto"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-2">
          {pages.map((page) => (
            <a
              key={page.key}
              href={`#${page.url}`} // Added # to match typical anchor navigation
              className="text-gray-500 hover:text-pink-700 text-sm font-medium"
            >
              {t(`links.${page.key}`)}
            </a>
          ))}
        </div>

        {/* Contact and Social Media */}
        <div className="flex flex-col items-center space-y-2">
          <a
            href="tel:+998337200005"
            className="desktop-phone flex items-center justify-end pt-2 text-[#777] gap-2 cursor-pointer"
          >
            <img src={phone} alt={t("phone_icon")} />{" "}
            {/* Translated alt text */}
            +99833 720-00-05
          </a>
          <div className="flex space-x-4 mt-2">
            <a
              href="https://instagram.com/jalyuzi_art"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-pink-700"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://t.me/artjalyuziuzb  "
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-pink-700"
            >
              <FaTelegram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 text-sm text-gray-500">
        {t("copyright")}
      </div>
      <div className="text-center mt-2 text-sm text-gray-500">
        {t("created_by")}
        <a
          href="https://supersite.uz"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-700 hover:underline"
        >
          Supersite.uz
        </a>
      </div>
      <h3
        className="text-center text-4xl md:text-6xl lg:text-8xl text-[#F4F4F4] uppercase font-bold mb-4"
        style={{ letterSpacing: "1vw" }}
      >
        {t("logo")}
      </h3>
    </footer>
  );
}
