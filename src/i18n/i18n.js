/* eslint-disable no-irregular-whitespace */
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  // fallbackLng: 'uz',
  lng: localStorage.getItem("i18nextLng") || "uz",
  resources: {
    uz: {
      translation: {
        links: {
          about_us: "Biz haqimizda",
          portfolio: "Portfolio",
          services: "Xizmatlar",
          contacts: "Kontaktlar",
        },
        logo: "ART JALYUZI",
        Boglanish: "Bog'lanish",
        about1: "Siz tanlaysiz – biz go‘zallik yaratamiz!",
        about2: `Bizning kompaniyamiz “ART JALYUZI” sizning uyingiz va ofisingizda
          qulaylik saqlash bilan shug’ullanadi. Biz O’zbekistonda eng yuqori
          sifatli jalyuzi ishlab chiqaruvchilardanmiz va bu yerda siz turli xil
          ranglarga ega bo’lgan 700 dan ortiq turdagi jalyuzilarni topishingiz
          mumkin. Bizning mutaxassislar o’zi sizga o’lchash va o’rnatishda
          yordam beradi.`,
        about3: "Serviz xizmatlarimiz mutlaqo BEPUL.",
        about4: "Bizni ijtimoiy tarmoqlarda kuzatib boring!",
        contact1:
          "   Derazalaringiz nafislik va did bilan bezalishini xohlaysizmi?",
        contact2: "Ariza qoldiring",
        contact3: "   Biz sizga eng go‘zal jalyuzi echimlarini taklif qilamiz!",
        contact4: "Ismingiz",
        contact5: "Telefon raqamingiz",
        contact6: "Yuborilmoqda...",
        contact7: "So'rov yuborish",
        portfolio1: `— jalyuzi mahsulotlarini
                    taqdim etuvchi lokal brend. Mijozlar uchun nafis, zamonaviy
                    va funksional yechimlarni taklif qiladi.`,
        portfolio2: `Bizning shior:`,
        portfolio3: "SIFAT VA MIJOZLAR UCHUN QULAYLIK!",
        adventages1: "Afzalliklar",
        adventages2: "ART JALYUZINING AFZALLIKLARI",
        adventages3: ` Ko‘p yillik tajriba, individual yondashuv, eng so‘nggi dizaynlar faqat
          sizlar uchun!`,
        adv: {
          light_control_title: "Yorug‘lik nazorati",
          light_control_description:
            "Yorug‘likni o‘zingiz xohlagan darajada sozlash imkoniyati",
          adaptive_design_title: "Mos dizayn",
          adaptive_design_description:
            "Jalyuzilar turlari o‘zingiz uchun mos variantni toping",
          easy_maintenance_title: "Oson parvarish",
          easy_maintenance_description:
            "Chang yutmaydi, yuvish talab qilinmaydi, faqat artib oling",
          sun_protection_title: "Quyoshdan himoya",
          sun_protection_description:
            "Havo muvozanati va harorat issiq kunda optimal bo‘ladi",
          smart_control_title: "Aqlli boshqaruv",
          smart_control_description:
            "Masofadan boshqarish tizimi va avtomatik sozlash tizimi",
        },
        services: {
          installation_hashtag: "#Jalyuzilarni o‘rnatish",
          installation_title: "Jalyuzilarni professional tarzda o‘rnatamiz",
          installation_description:
            "Tajribali ustalarimiz jalyuzilarni to‘g‘ri va xavfsiz tarzda o‘rnatib beradi",
          free_measurement_hashtag: "#Bepul o‘lchash",
          free_measurement_title:
            "Uyga o‘lchagacha kelib, aniq o‘lchamlarni olamiz",
          free_measurement_description:
            "Mijozlarimiz uchun qulaylik yaratish maqsadida bepul o‘lchash xizmati bilan bu muammo osonlik bilan hal qilinadi",
          delivery_hashtag: "#Yetkazib berish",
          delivery_title: "Tez va ishonchli yetkazib berish",
          delivery_description:
            "Shuhrat bo‘yicha qulay va tez yetkazib berish xizmati – mahsulotingiz xavfsiz yetkaziladi",
        },
        catalog1: "Bizning xizmatlarimiz",
        created_by: "Ishlab chiquvchi: ",
        copyright: "© Copyright 2025 Barcha huquqlar himoyalangan",
        ism: "Ism: ",
        tel: "Telefon raqami: ",
        succesMessage: "Xabarnoma muvaffaqiyatli yuborildi.",
        errorMessage: "Xabaringiz yuborishda xatolik yuz berdi.",
        botMessage: "Yangi xabarnoma",
      },
    },
    ru: {
      translation: {
        links: {
          about_us: "О нас",
          portfolio: "Портфолио",
          services: "Услуги",
          contacts: "Контакты",
        },
        logo: "ART JALYUZI",
        Boglanish: "Связаться",
        about1: "Вы выбираете – мы создаем красоту!",
        about2:
          "Наша компания «ART JALYUZI» занимается обеспечением комфорта в вашем доме и офисе. Мы являемся одними из ведущих производителей высококачественных жалюзи в Узбекистане, и у нас вы можете найти более 700 видов жалюзи различных цветов. Наши специалисты помогут вам с замерами и установкой.",
        about3: "Наши сервисные услуги абсолютно БЕСПЛАТНЫ.",
        about4: "Следите за нами в социальных сетях!",
        contact1:
          "Хотите, чтобы ваши окна были оформлены с элегантностью и вкусом?",
        contact2: "Оставьте заявку",
        contact3: "Мы предложим вам самые красивые решения для жалюзи!",
        contact4: "Ваше имя",
        contact5: "Ваш номер телефона",
        contact6: "Отправляется...",
        contact7: "Отправить запрос",
        portfolio1:
          "— локальный бренд, предлагающий продукцию жалюзи. Мы предоставляем клиентам элегантные, современные и функциональные решения.",
        portfolio2: "Наш девиз:",
        portfolio3: "КАЧЕСТВО И УДОБСТВО ДЛЯ КЛИЕНТОВ!",
        adventages1: "Преимущества",
        adventages2: "ПРЕИМУЩЕСТВА ART JALYUZI",
        adventages3:
          "Многолетний опыт, индивидуальный подход, новейшие дизайны только для вас!",
        adv: {
          light_control_title: "Контроль освещения",
          light_control_description:
            "Возможность регулировать освещение по вашему желанию",
          adaptive_design_title: "Адаптивный дизайн",
          adaptive_design_description:
            "Найдите идеальный вариант жалюзи для себя",
          easy_maintenance_title: "Легкий уход",
          easy_maintenance_description:
            "Не впитывает пыль, не требует стирки, достаточно протереть",
          sun_protection_title: "Защита от солнца",
          sun_protection_description:
            "Оптимальный баланс воздуха и температуры в жаркие дни",
          smart_control_title: "Умное управление",
          smart_control_description:
            "Система дистанционного управления и автоматической настройки",
        },
        services: {
          installation_hashtag: "#Установка жалюзи",
          installation_title: "Профессионально устанавливаем жалюзи",
          installation_description:
            "Наши опытные мастера установят жалюзи правильно и безопасно",
          free_measurement_hashtag: "#Бесплатный замер",
          free_measurement_title:
            "Приезжаем к вам домой и снимаем точные размеры",
          free_measurement_description:
            "Для удобства наших клиентов бесплатная услуга замера решает эту задачу легко и просто",
          delivery_hashtag: "#Доставка",
          delivery_title: "Быстрая и надежная доставка",
          delivery_description:
            "Удобная и быстрая доставка по вашему расписанию – ваш продукт будет доставлен в сохранности",
        },
        catalog1: "Наши услуги",
        created_by: "Разработчик: ",
        copyright: "© Copyright 2025 Все права защищены",
        ism: "Имя: ",
        tel: "Номер телефона: ",
        succesMessage: "Сообщение успешно отправлено.",
        errorMessage: "Произошла ошибка при отправке сообщения.",
        botMessage: "Новое сообщение",
      },
    },
  },
});

export default i18n;
