"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import img from "/contacts/img.png";

function Contacts() {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "+998",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://back.artjalyuzi.uz/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      toast.success(t("succesMessage"), {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      // Reset form after successful submission
      setFormData({
        name: "",
        phone: "+998",
      });
    } catch (error) {
      console.error(t("errorMessage"), error);
      toast.error(t("errorMessage"), {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contacts" className="mt-10 md:mt-20 ">
      <div className="flex flex-col md:flex-row items-center bg-[#8B0037] rounded-lg overflow-hidden">
        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 p-8 md:p-12 text-white space-y-4"
        >
          <h3 className="text-lg md:text-xl font-bold w-full md:w-3/4 leading-tight">
            {t("contact1")}
          </h3>
          <p className="text-sm font-normal">{t("contact2")}</p>
          <p className="text-sm font-normal">{t("contact3")}</p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={t("contact4")}
            className="w-full md:w-3/4 border border-[#FFFFFF] rounded p-3 bg-[#8B0037] outline-none focus:ring-2 focus:ring-white text-white placeholder-white"
            required
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder={t("contact5")}
            className="w-full md:w-3/4 border border-[#FFFFFF] rounded p-3 bg-[#8B0037] outline-none focus:ring-2 focus:ring-white text-white placeholder-white"
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-3/4 border border-white text-center bg-[#fff] text-[#9A124E] hover:bg-[#9A124E] hover:text-white px-6 py-3 rounded-lg transition-colors"
          >
            {isSubmitting ? t("contact6") : t("contact7")}
          </button>
        </form>

        {/* Image Section */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <div className="relative shadow-lg rounded-lg bg-white">
            <img
              src={img}
              alt="Contact Image"
              className="w-full h-auto object-cover rounded-lg shadow-md transform -translate-x-5 -translate-y-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
