import React from "react";
import { CheckCircle, FileText, ClipboardList, Users } from "lucide-react";

const reasons = [
  {
    icon: <ClipboardList className="text-[#71914B] w-6 h-6" />,
    title: "Опыт",
    text: "В наших правилах использование сертифицированных материалов, безукоризненное соблюдение договоров, разумная ценовая политика и полное самообеспечение.",
  },
  {
    image: "/why/img1.png",
  },
  {
    icon: <Users className="text-[#71914B] w-6 h-6" />,
    title: "Индивидуальный подход",
    text: "В наших правилах использование сертифицированных материалов, безукоризненное соблюдение договоров, разумная ценовая политика и полное самообеспечение.",
  },
  {
    image: "/why/img2.png",
  },
  {
    icon: <CheckCircle className="text-[#71914B] w-6 h-6" />,
    title: "Качество и надёжность",
    text: "В наших правилах использование сертифицированных материалов, безукоризненное соблюдение договоров, разумная ценовая политика и полное самообеспечение.",
  },
  {
    image: "/why/img3.png",
  },
  {
    icon: <FileText className="text-[#71914B] w-6 h-6" />,
    title: "Прозрачность",
    text: "В наших правилах использование сертифицированных материалов, безукоризненное соблюдение договоров, разумная ценовая политика и полное самообеспечение.",
  },
  {
    image: "/why/img4.png",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
        ПОЧЕМУ <span className="text-[#71914B]">ВЫБИРАЮТ НАС</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((item, idx) => (
          <div
            key={idx}
            className="border border-green-100 rounded-xl p-5 bg-white shadow-sm flex flex-col gap-3"
          >
            {item.image ? (
              <img
                src={item.image}
                alt="Reason"
                className="w-full h-48 object-cover rounded-lg"
              />
            ) : (
              <>
                {item.icon}
                <h3 className="text-md font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.text}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
