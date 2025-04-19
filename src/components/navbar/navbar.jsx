import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { FaGlobe, FaPhone } from "react-icons/fa";
import logo from "/logo.png";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n/i18n";
import TemporaryDrawer from "../drawer/drewer";
import "./navbar.scss";
import phone from "../../assets/icons/phone.svg";
import UzIcon from "../../assets/icons/uz.svg";
import RuIcon from "../../assets/icons/ru.svg";
import { BiChevronDown } from "react-icons/bi";

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  // const [language, setLanguage] = useState(localStorage.getItem('i18nextLng'));

  // useEffect(() => {
  //   i18n.changeLanguage(language);
  // }, [language]);

  const handleLanguageChange = (e) => {
    const newLanguage = e.target.value;
    // setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("i18nextLng", newLanguage);
  };
  const dropdownRef = useRef(null);

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const pages = [
    { key: "about_us", url: "about" },
    { key: "portfolio", url: "portfolio" },
    { key: "services", url: "services" },
    { key: "contacts", url: "contacts" },
  ];

  const languages = [
    { value: "uz", label: UzIcon },
    { value: "ru", label: RuIcon },
  ];

  return (
    <nav className="navbar mx-auto">
      <a
        href="tel:+998337200005"
        className="desktop-phone flex items-center justify-end pt-2 text-[#777] gap-2 cursor-pointer "
      >
        <img src={phone} alt="Phone" />
        +99833 720-00-05
      </a>
      <div className="flex items-center justify-between py-4">
        <Link to={"/"}>
          <img className="logo" src={logo} alt="Logo" />
        </Link>

        <div className="md:hidden">
          <TemporaryDrawer />
        </div>

        <div className="hidden md:flex gap-[2vw] justify-between items-center">
          {pages.map((page) => (
            <a
              href={`#${page.url}`}
              key={page.url}
              className="links font-medium text-[#777] cursor-pointer"
            >
              {t(`links.${page.key}`)}
            </a>
          ))}

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 px-4 cursor-pointer"
            >
              <span className="flex justify-center items-center gap-2">
                <img
                  src={
                    languages.find((item) => item.value === i18n.language)
                      ?.label
                  }
                  alt=""
                />
                <BiChevronDown />
              </span>
            </button>

            {isOpen && (
              <div className="absolute left-0 mt-2 w-[6vw] bg-white shadow-lg rounded-lg overflow-hidden z-10">
                {languages.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      handleLanguageChange({ target: { value: item.value } });
                      setIsOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    <img src={item.label} alt="" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
