import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: localStorage.getItem("i18nextLng") || "uz",
  resources: {
    uz: {
      translation: {
        Boglanish: "Bog'lanish",
        links: {
          about_us: "Biz haqimizda",
          portfolio: "Portfel",
          services: "Xizmatlar",
          contacts: "Aloqa",
        },
        navbar: {
          logoAlt: "Logotip",
          phoneNumber: "+99899 810 70 90",
          languageAlt: "Joriy til",
          lang: {
            uz: "O'zbek",
            ru: "Rus",
            en: "Ingliz",
          },
        },
        advantages: {
          title_1: "BIZNING",
          title_2: "AFZALLIKLARIMIZ",
          guarantee: {
            title: "Rasmiy kafolat — 10 yil",
            description:
              "Biz ishimiz sifatiga ishonamiz, shuning uchun 10 yillik rasmiy kafolat beramiz.",
          },
          materials: {
            title: "Premium materiallar",
            description:
              "Tabiiy kvarsli travertin va sifatli elimdan foydalanamiz.",
          },
          price: {
            title: "Shaffof narx",
            description: "Yashirin to‘lovlarsiz adolatli narx taklif qilamiz.",
          },
          button: "Batafsil",
          imageAlt: "Afzalliklar",
        },
        why: {
          title_1: "NEGA",
          title_2: "BIZNI TANLASHADI",
          reason1: {
            title: "Tajriba",
            text: "Sertifikatlangan materiallar, aniq shartnoma, o‘rtacha narx.",
          },
          reason2: {
            title: "Individual yondashuv",
            text: "Har bir mijozga alohida e'tibor.",
          },
          reason3: {
            title: "Sifat va ishonchlilik",
            text: "Kafolatlangan natija.",
          },
          reason4: {
            title: "Shaffoflik",
            text: "Shaffof narx va ish jarayoni.",
          },
          imageAlt: "Sabab",
        },
        about: {
          title_1: "KOMPANIYA HAQIDA",
          title_2: "FASAD MASTER",
          paragraph_1:
            "Fasad Master 10 yildan ortiq tajribaga ega. Kompaniya Toshkentda joylashgan bo‘lib, 90+ mutaxassis va o‘z texnik bazasiga ega.",
          paragraph_2:
            "Biz sifat, ishonchlilik va yuqori talabga javob berishga intilamiz.",
        },
        contacts: {
          title: "Obyektga prorab chaqirib, maslahat oling",
          subtitle: "Kontaktlaringizni qoldiring va biz sizga aloqaga chiqamiz",
          namePlaceholder: "Ismingiz",
          phonePlaceholder: "Telefon raqamingiz",
          button: "Yuborish",
          privacy: "Ma'lumotlaringiz maxfiy saqlanadi",
          success: "So‘rov yuborildi",
          error: "Xatolik yuz berdi",
        },
        portfolio: {
          title_1: "BIZNING",
          title_2: "ISHLARIMIZ",
          imageAlt: "Bizning loyihalar",
        },
        footer: {
          services: {
            title: "Xizmatlar",
            travertine: "Travertin",
            alucobond: "Alukobond",
            natural_stone: "Tabiiy tosh",
          },
          about: {
            title: "Biz haqimizda",
            company: "Kompaniya",
            history: "Tarix",
            advantages: "Afzalliklar",
          },
          portfolio: {
            title: "Portfel",
            works: "Bizning ishlar",
          },
          contacts: {
            title: "Aloqa",
            phone: "+99899 810 70 90",
          },
          copyright:
            "Mualliflik huquqi © {{year}} Fasad Master. Barcha huquqlar himoyalangan.",
          developed_by: "Ishlab chiqardi",
        },
        notfound: {
          imageAlt: "404 xatolik",
          title: "Sahifa topilmadi",
          button: "Bosh sahifa",
        },
        company_history: {
          title: "KOMPANIYA TARIXI",
          loading: "Yuklanmoqda...",
          guarantee: {
            title: "Rasmiy kafolat — 10 yil",
          },
          materials: {
            title: "Premium materiallar",
          },
          price: {
            title: "Shaffof narx",
          },
        },
        catalog: {
          title_1: "BIZNING",
          title_2: "XIZMATLARIMIZ",
          more: "Batafsil",
        },
        contact_form: {
          heading: "Bizning kontaktlar",
          short_about: "Qisqacha biz haqimizda",
          company_description:
            "Fasad Master — ishonchli va sifatli fasad xizmatlari ko‘rsatuvchi kompaniya.",
          form_heading: "Kontaktlaringizni qoldiring",
          thanks: "Rahmat! Tez orada siz bilan bog‘lanamiz.",
          name: "Ism",
          phone: "Telefon",
          send: "Yuborish",
          privacy: "Ma'lumotlaringiz maxfiy saqlanadi.",
        },
      },
    },
    ru: {
      translation: {
        Boglanish: "Связаться",
        navbar: {
          logoAlt: "Логотип",
          phoneNumber: "+99899 810 70 90",
          languageAlt: "Текущий язык",
          lang: {
            uz: "Узбекский",
            ru: "Русский",
            en: "Английский",
          },
        },
        links: {
          about_us: "О нас",
          portfolio: "Портфолио",
          services: "Услуги",
          contacts: "Контакты",
        },
        advantages: {
          title_1: "НАШИ",
          title_2: "ПРЕИМУЩЕСТВА",
          guarantee: {
            title: "Официальная гарантия — 10 лет",
            description:
              "Мы уверены в качестве своей работы, поэтому предоставляем официальную гарантию от компании Fasad Master сроком на 10 лет. Это возможно благодаря использованию проверенных технологий и надёжных материалов.",
          },
          materials: {
            title: "Премиальные материалы",
            description:
              "Используем жидкий травертин на основе натуральной крошки из Узбекистана и высококачественный акриловый клей российского производства. Только проверенные поставщики и комплектующие.",
          },
          price: {
            title: "Честная и прозрачная цена",
            description:
              "Стоимость работ соответствует среднерыночной, без скрытых доплат. С нами вы получите премиальный результат по честной цене от Fasad Master.",
          },
          button: "catalog.more",
          imageAlt: "Преимущества",
        },
        why: {
          title_1: "ПОЧЕМУ",
          title_2: "ВЫБИРАЮТ НАС",
          reason1: {
            title: "Опыт",
            text: "В наших правилах использование сертифицированных материалов, безукоризненное соблюдение договоров, разумная ценовая политика и полное самообеспечение.",
          },
          reason2: {
            title: "Индивидуальный подход",
            text: "В наших правилах использование сертифицированных материалов, безукоризненное соблюдение договоров, разумная ценовая политика и полное самообеспечение.",
          },
          reason3: {
            title: "Качество и надёжность",
            text: "В наших правилах использование сертифицированных материалов, безукоризненное соблюдение договоров, разумная ценовая политика и полное самообеспечение.",
          },
          reason4: {
            title: "Прозрачность",
            text: "В наших правилах использование сертифицированных материалов, безукоризненное соблюдение договоров, разумная ценовая политика и полное самообеспечение.",
          },
          imageAlt: "Причина выбора",
        },
        about: {
          title_1: "О КОМПАНИИ",
          title_2: "ФАСАД МАСТЕР",
          paragraph_1:
            "ООО ФАСАД МАСТЕР более 10 лет работает на рынке строительных услуг. Территориально компания находится в Ташкенте, имеет в штате более 90+ специалистов и располагает обширной базой собственных материально-технических ресурсов. Наша основная специализация — фасадные работы любой сложности. На счету компании более 400 объектов и опыт отделки фасадов жидким травертином, песчаником, кирпичом, натуральным камнем, различными видами штукатурки и другими материалами. Отделка фасадов решает сразу две задачи: придание зданию эстетического вида и защита поверхности от воздействия внешних факторов.",
          paragraph_2:
            "Репутация — наша ключевая ценность. Выполняя отделочные работы в Ташкенте, мы придерживаемся высоких стандартов качества и стараемся отвечать самым высоким требованиям заказчиков. В наших правилах использование сертифицированных материалов, безукоризненное соблюдение договоров, разумная ценовая политика и полное самообеспечение.",
        },
        contacts: {
          title:
            "Вы можете вызвать прораба на Ваш участок и получить подробную консультацию",
          subtitle: "Оставьте Ваши контакты и наш менеджер свяжется с Вами",
          namePlaceholder: "Имя",
          phonePlaceholder: "Телефон",
          button: "Отправить",
          privacy: "Ваши данные не будут переданы 3-м лицам. Конфиденциально!",
          success: "Заявка успешно отправлена!",
          error: "Ошибка при отправке заявки",
        },
        portfolio: {
          title_1: "НАШИ",
          title_2: "РАБОТЫ",
          imageAlt: "Наши работы",
        },
        footer: {
          services: {
            title: "Услуги",
            travertine: "Травертин",
            alucobond: "Алюкобонд",
            natural_stone: "Натуральный камень",
          },
          about: {
            title: "О нас",
            company: "Компания",
            history: "История компании",
            advantages: "Наша преимущества",
          },
          portfolio: {
            title: "Портфолио",
            works: "Наши работы",
          },
          contacts: {
            title: "Контакты",
            phone: "+99899 810 70 90",
          },
          copyright: "Копирайт: © {{year}} Fasad Master. Все права защищены.",
          developed_by: "Разработала команда",
        },
        notfound: {
          imageAlt: "404 ошибка",
          title: "Страница не найдена",
          button: "Главная страница",
        },
        company_history: {
          title: "ИСТОРИЯ КОМПАНИИ",
          loading: "Загрузка...",
          guarantee: {
            title: "Официальная гарантия — 10 лет",
          },
          materials: {
            title: "Премиальные материалы",
          },
          price: {
            title: "Честная и прозрачная цена",
          },
        },
        catalog: {
          title_1: "НАШИ",
          title_2: "УСЛУГИ",
          more: "Подробнее",
        },
        contact_form: {
          heading: "Наши контакты",
          short_about: "Коротко о нас",
          company_description:
            "Fasad Master — надёжная компания по фасадным услугам.",
          form_heading: "Оставьте Ваши контакты",
          thanks: "Спасибо! Мы скоро с вами свяжемся.",
          name: "Имя",
          phone: "Телефон",
          send: "Отправить",
          privacy:
            "Ваши данные не будут переданы третьим лицам. Конфиденциально!",
        },
      },
    },
    en: {
      translation: {
        Boglanish: "Contact Us",
        navbar: {
          logoAlt: "Logo",
          phoneNumber: "+99899 810 70 90",
          languageAlt: "Current language",
          lang: {
            uz: "Uzbek",
            ru: "Russian",
            en: "English",
          },
        },
        links: {
          about_us: "About Us",
          portfolio: "Portfolio",
          services: "Services",
          contacts: "Contact",
        },
        advantages: {
          title_1: "OUR",
          title_2: "ADVANTAGES",
          guarantee: {
            title: "Official warranty — 10 years",
            description:
              "We are confident in our quality, so we offer an official 10-year warranty from Fasad Master. This is possible thanks to reliable technology and materials.",
          },
          materials: {
            title: "Premium materials",
            description:
              "We use liquid travertine based on natural crumbs from Uzbekistan and high-quality acrylic glue from Russia.",
          },
          price: {
            title: "Fair and transparent pricing",
            description:
              "Prices are market average, no hidden fees. You get premium results at a fair price with Fasad Master.",
          },
          button: "More",
          imageAlt: "Advantages",
        },
        why: {
          title_1: "WHY",
          title_2: "CHOOSE US",
          reason1: {
            title: "Experience",
            text: "We follow strict standards: certified materials, solid contracts, fair pricing, and full self-sufficiency.",
          },
          reason2: {
            title: "Individual approach",
            text: "We follow strict standards: certified materials, solid contracts, fair pricing, and full self-sufficiency.",
          },
          reason3: {
            title: "Quality and reliability",
            text: "We follow strict standards: certified materials, solid contracts, fair pricing, and full self-sufficiency.",
          },
          reason4: {
            title: "Transparency",
            text: "We follow strict standards: certified materials, solid contracts, fair pricing, and full self-sufficiency.",
          },
          imageAlt: "Why choose",
        },
        about: {
          title_1: "ABOUT",
          title_2: "FASAD MASTER",
          paragraph_1:
            "Fasad Master has been in the construction business for over 10 years. Based in Tashkent, it has 90+ specialists and its own technical base. We specialize in all kinds of façade works.",
          paragraph_2:
            "Reputation is our main value. We follow high standards and meet client expectations in every project.",
        },
        contacts: {
          title:
            "You can request a supervisor to visit your site for consultation",
          subtitle: "Leave your contact info and our manager will call you",
          namePlaceholder: "Name",
          phonePlaceholder: "Phone",
          button: "Send",
          privacy: "Your data will not be shared. Confidential!",
          success: "Request sent successfully!",
          error: "An error occurred while sending",
        },
        portfolio: {
          title_1: "OUR",
          title_2: "PROJECTS",
          imageAlt: "Our work",
        },
        footer: {
          services: {
            title: "Services",
            travertine: "Travertine",
            alucobond: "Alucobond",
            natural_stone: "Natural stone",
          },
          about: {
            title: "About",
            company: "Company",
            history: "History",
            advantages: "Advantages",
          },
          portfolio: {
            title: "Portfolio",
            works: "Our works",
          },
          contacts: {
            title: "Contacts",
            phone: "+99899 810 70 90",
          },
          copyright: "Copyright © {{year}} Fasad Master. All rights reserved.",
          developed_by: "Developed by",
        },
        notfound: {
          imageAlt: "404 error",
          title: "Page not found",
          button: "Go to homepage",
        },
        company_history: {
          title: "COMPANY HISTORY",
          loading: "Loading...",
          guarantee: {
            title: "Official warranty — 10 years",
          },
          materials: {
            title: "Premium materials",
          },
          price: {
            title: "Transparent price",
          },
        },
        catalog: {
          title_1: "OUR",
          title_2: "SERVICES",
          more: "More",
        },
        contact_form: {
          heading: "Our Contacts",
          short_about: "About Us",
          company_description:
            "Fasad Master is a reliable provider of facade services.",
          form_heading: "Leave your contact info",
          thanks: "Thank you! We'll contact you soon.",
          name: "Name",
          phone: "Phone",
          send: "Send",
          privacy: "Your data will be kept confidential.",
        },
      },
    },
  },
});

export default i18n;
