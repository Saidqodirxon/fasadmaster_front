import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaTelegramPlane,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import axios from "axios";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://back.fasadmaster.uz/categories?page[limit]=3")
      .then((res) => {
        setCategories(res.data.data);
      })
      .catch((err) => {
        console.error("Kategoriyalarni olishda xatolik:", err);
      });
  }, []);

  const navLinks = [
    { key: "home", url: "/" },
    { key: "about_us", url: "/about" },
    { key: "portfolio", url: "/projects" },
    { key: "services", url: "/services" },
    { key: "contacts", url: "/contacts" },
  ];

  return (
    <footer className="bg-neutral-900 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Logotip */}
        <div className="flex flex-col items-center md:items-start">
          <img src="/logo-white.png" alt="Fasad Master" className="w-32 mb-4" />
        </div>

        {/* Dinamik xizmatlar (API'dan) */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-semibold mb-2">{t("footer.services.title")}</h4>
          <ul className="space-y-1 text-sm text-gray-300">
            {categories.map((cat) => (
              <li key={cat.id}>
                <Link
                  to={`/services/${cat._id}`}
                  key={cat._id}
                  className="hover:text-white flex items-center gap-2 group"
                >
                  {/* <FaChevronRight className="text-[#71914B] group-hover:text-[#72914bb0] transition" /> */}
                  {cat[`name_${i18n.language}`] || cat.name_uz}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Biz haqimizda */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-semibold mb-2">{t("footer.about.title")}</h4>
          <ul className="space-y-1 text-sm text-gray-300">
            {navLinks.map((link) => (
              <li key={link.key}>
                <Link
                  to={link.url}
                  className="hover:text-white flex items-center gap-2 group"
                >
                  {/* <FaChevronRight className="text-[#71914B] group-hover:text-[#72914bb0] transition" /> */}
                  {t(`links.${link.key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Ijtimoiy tarmoqlar va aloqa */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-semibold mb-2">{t("footer.contacts.title")}</h4>
          <Link to={"tel:+998993062020"} className="text-sm text-gray-300">
            {t("footer.contacts.phone")}
          </Link>

          <div className="flex items-center justify-center md:justify-start space-x-3 mt-4">
            {[FaTelegramPlane, FaInstagram, FaYoutube, FaFacebookF].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 rounded-full bg-[#71914B] hover:bg-[#72914bb0] transition text-white"
                >
                  <Icon />
                </a>
              )
            )}
          </div>
        </div>
      </div>

      {/* Pastki qism */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-sm text-gray-400 flex flex-col items-center md:flex-row md:justify-between text-center">
        <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
        <p className="mt-2 md:mt-0">
          {t("footer.developed_by")}:{" "}
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
