import { useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", phone_number: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://back.fasadmaster.uz/contacts", formData);
      setSubmitted(true);
    } catch (err) {
      console.error("Xatolik:", err);
    }
  };

  return (
    <div className="w-full bg-white">
      {/* Banner */}
      <div
        className="h-48 md:h-64 bg-cover bg-center flex items-center justify-center text-white text-2xl md:text-4xl font-semibold"
        style={{ backgroundImage: "url('/contacts.png')" }}
      >
        Наши контакты
      </div>

      {/* Kontent */}
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-10">
        {/* Chap: Matn */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-[#71914B] text-2xl font-bold mb-4">
            Короток о нас
          </h2>
          <p className="text-gray-700 text-sm leading-7">
            ООО ФАСАД МАСТЕР более 10 лет работает на рынке строительных услуг.
            Территориально компания находится в Ташкенте, имеет в штате более
            90+ специалистов и располагает обширной базой собственных
            материально-технических ресурсов. Наша основная специализация –
            фасадные работы любой сложности. На счету компании более 400
            объектов и опыт отделки фасадов каждым...
          </p>
        </div>

        {/* O‘ng: Forma */}
        <div className="w-full lg:w-1/2 bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-gray-800 text-lg font-medium mb-4">
            Оставьте Ваши контакты и наш менеджер свяжется с Вами
          </h3>
          {submitted ? (
            <p className="text-[#71914B] font-semibold">
              Спасибо! Мы скоро с вами свяжемся.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Имя"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-3 rounded"
              />
              <input
                type="tel"
                name="phone_number"
                placeholder="Телефон"
                value={formData.phone_number}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-3 rounded"
              />
              <button
                type="submit"
                className="w-full bg-[#71914B] hover:bg-[#71914B] text-white font-bold py-3 rounded transition"
              >
                Отправить
              </button>
              <p className="text-xs text-gray-500 text-center">
                Ваша заявка не будет передана 3-им лицам! Конфиденциально!
              </p>
            </form>
          )}
        </div>
      </div>

      {/* XARITA */}
      <div className="w-full overflow-hidden relative">
        <iframe
          src="https://yandex.uz/map-widget/v1/org/supersite_uz/239168011769/?ll=69.316086%2C41.358849&z=13.2"
          width="100%"
          height="400"
          frameBorder="0"
          allowFullScreen
          title="Supersite.uz location"
          style={{ position: "relative" }}
        />
      </div>
    </div>
  );
}
