import React from "react";

const Advantages = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold text-center md:text-left">
          НАШИ <span className="text-[#71914B]">ПРЕИМУЩЕСТВА</span>
        </h2>

        <div className="mt-6 space-y-6 text-gray-700">
          <div>
            <h3 className="text-[#71914B] font-semibold">
              Официальная гарантия — 10 лет
            </h3>
            <p className="text-sm mt-1">
              Мы уверены в качестве своей работы, поэтому предоставляем
              официальную гарантию от компании Fasad Master сроком на 10 лет.
              Это возможно благодаря использованию проверенных технологий и
              надёжных материалов.
            </p>
          </div>
          <div>
            <h3 className="text-[#71914B] font-semibold">
              Премиальные материалы
            </h3>
            <p className="text-sm mt-1">
              Используем жидкий травертин на основе натуральной крошки из
              Узбекистана и высококачественный акриловый клей российского
              производства. Только проверенные поставщики и комплектующие.
            </p>
          </div>
          <div>
            <h3 className="text-[#71914B] font-semibold">
              Честная и прозрачная цена
            </h3>
            <p className="text-sm mt-1">
              Стоимость работ соответствует среднерыночной, без скрытых доплат.
              С нами вы получите премиальный результат по честной цене от Fasad
              Master.
            </p>
          </div>
        </div>

        <button className="mt-6 bg-[#71914B] text-white px-8 py-2 rounded-full hover:bg-[#71914B] transition">
          Подробнее
        </button>
      </div>

      <div>
        <img
          src="/adv.png"
          alt="Преимущества"
          className="rounded-xl w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Advantages;
