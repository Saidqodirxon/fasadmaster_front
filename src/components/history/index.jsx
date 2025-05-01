import { useEffect, useState } from "react";
import axios from "axios";

export default function CompanyHistory() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://back.fasadmaster.uz/abouts?page[limit]=1")
      .then((res) => setData(res.data.data[0]))
      .catch((err) => console.error(err));
  }, []);

  const sections = [
    {
      title: "Официальная гарантия — 10 лет",
      image: "/about/img1.png",
    },
    {
      title: "Премиальные материалы",
      image: "/about/img2.png",
    },
    {
      title: "Честная и прозрачная цена",
      image: "/about/img3.png",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10">
        ИСТОРИЯ КОМПАНИИ
      </h2>

      {data ? (
        <div className="space-y-10">
          {sections.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-6 items-start"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full md:w-1/3 rounded-lg object-cover"
              />
              <div className="md:w-2/3">
                <h3 className="text-[#71914B] text-lg font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {data.adventages_ru}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Загрузка...</p>
      )}
    </section>
  );
}
