import React from "react";
import { Link } from "react-router-dom";
import {
  FaTelegramPlane,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const navLinks = [
    { key: "about_us", url: "/about" },
    { key: "portfolio", url: "/projects" },
    { key: "services", url: "/services" },
    { key: "contacts", url: "/contacts" },
  ];

  return (
    <footer className="bg-neutral-900 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <img src="/logo-white.png" alt="Fasad Master" className="w-32 mb-4" />
        </div>

        {/* Biz haqimizda */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-semibold mb-2">{t("footer.about.title")}</h4>
          <ul className="space-y-1 text-sm text-gray-300">
            {navLinks.map((link) => (
              <li key={link.key}>
                <Link to={link.url} className="hover:underline">
                  {t(`links.${link.key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Portfel va aloqa */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-semibold mb-2">{t("footer.portfolio.title")}</h4>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>
              <Link to="/projects" className="hover:underline">
                {t("footer.portfolio.works")}
              </Link>
            </li>
          </ul>

          <h4 className="font-semibold mt-4 mb-1">
            {t("footer.contacts.title")}
          </h4>
          <p className="text-sm text-gray-300">{t("footer.contacts.phone")}</p>

          <div className="flex items-center justify-center md:justify-start space-x-3 mt-3 text-[#71914B] text-xl">
            <FaTelegramPlane />
            <FaInstagram />
            <FaYoutube />
            <FaFacebookF />
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-sm text-gray-400 flex flex-col items-center md:flex-row md:justify-between text-center">
        <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
        <p className="mt-2 md:mt-0">
          {t("footer.developed_by")}&nbsp;
          <a
            href="https://supersite.uz"
            className="text-white underline hover:text-green-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Supersite.uz
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
