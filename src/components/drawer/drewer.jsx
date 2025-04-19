import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import logo from "/logo.png";
import phone from "../../assets/icons/phone.svg";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n/i18n";
import UzIcon from "../../assets/icons/uz.svg";
import RuIcon from "../../assets/icons/ru.svg";
import x from "/x.svg"; // ❌ Tugma uchun
import menu from "/menu.svg"; // ☰ Menyu tugmasi uchun

export default function TemporaryDrawer() {
  const [state, setState] = useState({ left: false });
  const { t } = useTranslation();
  const [language, setLanguage] = useState(
    localStorage.getItem("i18nextLng") || "uz"
  );

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem("i18nextLng", lang);
  };

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

  const toggleDrawer = (anchor, open) => () => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: 280,
        height: "100vh",
        background: "#fff",
        color: "#777",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
      }}
      role="presentation"
    >
      {/* ❌ X tugma */}
      <div className="absolute top-3 right-3 z-10">
        <button onClick={toggleDrawer("left", false)}>
          <img src={x} alt="close" className="w-6 h-6" />
        </button>
      </div>

      {/* 🌐 Menyu va Til Tanlash */}
      <div className="flex flex-col items-center mt-6">
        <img src={logo} alt="Logo" className="py-4 w-[150px]" />

        <List className="w-full">
          {pages.map((el) => (
            <ListItem
              key={el.url}
              disablePadding
              className="flex justify-center cursor-pointer"
            >
              <a
                href={`/#${el.url}`}
                className="mx-auto text-[#777] text-center py-2"
              >
                <ListItemText primary={t(`links.${el.key}`)} />
              </a>
            </ListItem>
          ))}
        </List>

        {/* 📞 Telefon tugmasi */}
        <a
          href="tel:+998337200005"
          className="mb-4 flex items-center justify-center py-2 px-4 bg-white text-[#777] rounded-md gap-2 cursor-pointer "
        >
          <img src={phone} alt="Phone" />
          +99833 720-00-05
        </a>

        {/* 🌐 Tillar (yonma-yon) */}
        <div className="flex gap-4 mb-6">
          {languages.map((lang) => (
            <button
              key={lang.value}
              onClick={() => handleLanguageChange(lang.value)}
              className={`border ${
                language === lang.value ? "border-[#777]" : "border-transparent"
              } rounded-full p-1`}
            >
              <img src={lang.label} alt={lang.value} className="w-5" />
            </button>
          ))}
        </div>
      </div>
    </Box>
  );

  return (
    <div>
      {/* ☰ Menyu tugmasi */}
      <Button onClick={toggleDrawer("left", true)}>
        <img src={menu} alt="menu" className="w-6 h-6" />
      </Button>
      <Drawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
    </div>
  );
}
