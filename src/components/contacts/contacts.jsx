import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

const Contacts = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: "", phone: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://back.fasadmaster.uz/contacts", formData);
      toast.success(t("contacts.success"));
      setFormData({ name: "", phone: "" });
    } catch (error) {
      toast.error(t("contacts.error"));
    }
  };

  return (
    <div
      className="bg-cover bg-center bg-no-repeat py-20 px-4 text-white bg-[#3A3A3CA6] opacity-[85%]"
      style={{ backgroundImage: "url('/contacts.png')" }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold leading-relaxed">
            {t("contacts.title")}
          </h2>
        </div>
        <form
          onSubmit={handleSubmit}
          className="p-6 rounded-xl space-y-4 text-white"
        >
          <p className="font-medium">{t("contacts.subtitle")}</p>
          <input
            type="text"
            name="name"
            placeholder={t("contacts.namePlaceholder")}
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded bg-inherit"
          />
          <input
            type="tel"
            name="phone"
            placeholder={t("contacts.phonePlaceholder")}
            value={formData.phone || "+998"}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded bg-inherit"
          />
          <button
            type="submit"
            className="w-full bg-[#71914B] text-white py-2 rounded hover:bg-[#71914B] transition"
          >
            {t("contacts.button")}
          </button>
          <p className="text-xs text-white mt-2">{t("contacts.privacy")}</p>
        </form>
      </div>
      <ToastContainer position="bottom-center" autoClose={3000} />
    </div>
  );
};

export default Contacts;
