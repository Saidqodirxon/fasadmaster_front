import React from "react";
import {
  FaTelegramPlane,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <img src="/logo-white.png" alt="Fasad Master" className="w-32 mb-4" />
        </div>
        <div>
          <h4 className="font-semibold mb-2">Услуги</h4>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>Травертин</li>
            <li>Алюкобонд</li>
            <li>Натуральный камень</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">О нас</h4>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>Компания</li>
            <li>История компании</li>
            <li>Наша преимущества</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Портфолио</h4>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>Наши работы</li>
          </ul>
          <h4 className="font-semibold mt-4 mb-1">Контакты</h4>
          <p className="text-sm text-gray-300">+99899 810 70 90</p>
          <div className="flex items-center space-x-3 mt-3 text-green-500 text-xl">
            <FaTelegramPlane />
            <FaInstagram />
            <FaYoutube />
            <FaFacebookF />
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
        <p>
          Копирайт: © {new Date().getFullYear()} Fasad Master. Все права
          защищены.
        </p>
        <p>
          Разработала команда{" "}
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
