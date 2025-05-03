import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: localStorage.getItem("i18nextLng") || "ru",
  resources: {
    uz: {
      translation: {
        Boglanish: "Боғланиш",
        links: {
          home: "Бош саҳифа",
          about_us: "Компания ҳақида",
          portfolio: "Портфолио",
          services: "Хизматлар",
          contacts: "Алоқа",
        },
        navbar: {
          logoAlt: "Логотип",
          phoneNumber: "+998 99 306 20 20",
          languageAlt: "Жорий тил",
          lang: {
            uz: "Ўзбек",
            ru: "Рус",
            en: "Инглиз",
          },
        },
        advantages: {
          title_1: "БИЗНИНГ",
          title_2: "АФЗАЛЛИКЛАРИМИЗ",
          guarantee: {
            title: "Расмий кафолат — 10 йил",
            description:
              "Биз ишимиз сифтига ишонамиз, шунинг учун 10 йиллик расмий кафолат берамиз.",
          },
          materials: {
            title: "Премиум материаллар",
            description:
              "Табиий кварсли травертин ва сифатли ёпиштиргичдан фойдаланамиз.",
          },
          price: {
            title: "Шаффоф нарх",
            description: "Яширин тўловларсиз адолатли нарх таклиф қиламиз.",
          },
          button: "Батафсил",
          imageAlt: "Афзалликлар",
        },
        why: {
          title_1: "НЕГА",
          title_2: "БИЗНИ ТАНЛАШАДИ",
          reason1: {
            title: "Тажриба",
            text: "Сертификатланган материаллар, аниқ шартнома, ўртача нарх.",
          },
          reason2: {
            title: "Индивидуал ёндашув",
            text: "Ҳар бир мижозга алоҳида эътибор.",
          },
          reason3: {
            title: "Сифат ва ишончлилик",
            text: "Кафолатланган натижа.",
          },
          reason4: {
            title: "Шаффофлик",
            text: "Шаффоф нарх ва иш жараёни.",
          },
          imageAlt: "Сабаб",
        },
        about: {
          title_1: "КОМПАНИЯ ҲАҚИДА",
          title_2: "FASAD MASTER",
          paragraph_1:
            "ООО ФАСАД МАСТЕР 10 йилдан ортиқ вақтдан бери қурилиш хизматлари бозорида фаолият юритиб келмоқда. Компания Тошкент шаҳрида жойлашган бўлиб, 90 нафардан ортиқ мутахассисларга эга ва ўзининг кенг моддий-техника базасига эга. Бизнинг асосий ихтисослашувимиз — ҳар қандай мураккабликдаги фасад ишларидир. Компания 400 дан ортиқ объектни амалга оширган ҳамда фасадларни суюқ травертин, қумтош, ғишт, табиий тош, турли хил сувақлар ва бошқа материаллар билан безаш тажрибасига эга. Фасадни безаш бир вақтнинг ўзида икки вазифани ҳал қилади: бинонинг эстетик кўринишини таъминлаш ва сиртни ташқи омиллар таъсиридан ҳимоя қилиш.",
          paragraph_2:
            "Репутация — бизнинг асосий қадриятимиз. Тошкентда фасад ишларини бажаришда биз юқори сифат стандартларига риоя қиламиз ва буюртмачиларнинг энг юқори талабларига жавоб беришга ҳаракат қиламиз. Биз фақат сертификатланган материаллардан фойдаланамиз, шартномаларни мукаммал бажарамиз, оқилона нарх сиёсатини олиб борамиз ва тўлиқ ўз-ўзини таъминлашни таъминлаймиз.",
        },
        contacts: {
          title: "Объектга прораб чақириб, маслаҳат олинг",
          subtitle:
            "Контактларингизни қолдиринг ва биз сиз билан алоқага чиқамиз",
          namePlaceholder: "Исмингиз",
          phonePlaceholder: "Телефон рақамингиз",
          button: "Юбориш",
          privacy: "Маълумотларингиз махфий сақланади",
          success: "Сўров юборилди",
          error: "Хатолик юз берди",
        },
        portfolio: {
          title_1: "БИЗНИНГ",
          title_2: "ИШЛАРИМИЗ",
          imageAlt: "Бизнинг лойиҳалар",
        },
        footer: {
          services: {
            title: "Хизматлар",
            travertine: "Травертин",
            alucobond: "Алюкобонд",
            natural_stone: "Табиий тош",
          },
          about: {
            title: "Биз ҳақимизда",
            company: "Компания",
            history: "Тарих",
            advantages: "Афзалликлар",
          },
          portfolio: {
            title: "Портфолио",
            works: "Бизнинг ишлар",
          },
          contacts: {
            title: "Алоқа",
            phone: "+998 99 306 20 20",
          },
          copyright:
            "Муаллифлик ҳуқуқи © {{year}} Fasad Master. Барча ҳуқуқлар ҳимояланган.",
          developed_by: "Ишлаб чиқарди",
        },
        notfound: {
          imageAlt: "404 хатолик",
          title: "Саҳифа топилмади",
          button: "Бош саҳифа",
        },
        company_history: {
          title: "КОМПАНИЯ ТАРИХИ",
          loading: "Юкланмоқда...",
          guarantee: {
            title: "Расмий кафолат — 10 йил",
          },
          materials: {
            title: "Премиум материаллар",
          },
          price: {
            title: "Шаффоф нарх",
          },
        },
        catalog: {
          title_1: "БИЗНИНГ",
          title_2: "ХИЗМАТЛАРИМИЗ",
          more: "Батафсил",
        },
        contact_form: {
          heading: "Биз билан боғланинг",
          short_about: "Қисқача биз ҳақимизда",
          company_description:
            "ООО FASAD MASTER қурилиш хизматлари бозорида 10 йилдан ортиқ вақтдан бери ишлайди. Компания Тошкент шаҳрида жойлашган бўлиб, 90 дан ортиқ мутахассисларга эга ва ўзининг катта моддий-техник ресурслар базасига эга. Бизнинг асосий ихтисослигимиз — ҳар қандай мураккабликдаги фасад ишлари. Компания 400 дан ортиқ лойиҳаларни амалга оширган ва фасадларни суюқ травертин, қумтош, ғишт, табиий тош, ҳар хил турдаги гипс ва бошқа материаллар билан безаш тажрибасига эга. Фасадларни тугатиш бир вақтнинг ўзида икки хил муаммони ҳал қилади: бинога эстетик кўриниш бериш ва сиртларни ташқи омиллар таъсиридан ҳимоя қилиш.",
          form_heading: "Контактларингизни қолдиринг",
          thanks: "Рахмат! Тез орада сиз билан боғланамиз.",
          name: "Исм",
          phone: "Телефон",
          send: "Юбориш",
          privacy: "Маълумотларингиз махфий сақланади.",
        },
        otziv: {
          title_1: "Бизнинг",
          title_2: "Мижозларимиз",
        },
        narxi: "Narxi",
        summ2: "so'm/m²",
      },
    },
    ru: {
      translation: {
        Boglanish: "Связаться",
        navbar: {
          logoAlt: "Логотип",
          phoneNumber: "+998 99 306 20 20",
          languageAlt: "Текущий язык",
          lang: {
            uz: "Узбекский",
            ru: "Русский",
            en: "Английский",
          },
        },
        links: {
          home: "Главная",
          about_us: "О компании",
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
          button: "Подробнее",
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
            phone: "+998 99 306 20 20",
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
            "ООО ФАСАД МАСТЕР более 10 лет работает на рынке строительных услуг. Территориально компания находится в Ташкенте, имеет в штате более 90+ специалистов и располагает обширной базой собственных материально-технических ресурсов. Наша основная специализация – фасадные работы любой сложности. На счету компании более 400 объектов и опыт отделки фасадов жидким травертином, песчаником, кирпичом, натуральным камнем, различными видами штукатурки и другими материалами. Отделка фасадов решает сразу две задачи: придание зданию эстетического вида и защита поверхностей от воздействия внешних факторов.",
          form_heading: "Оставьте Ваши контакты",
          thanks: "Спасибо! Мы скоро с вами свяжемся.",
          name: "Имя",
          phone: "Телефон",
          send: "Отправить",
          privacy:
            "Ваши данные не будут переданы третьим лицам. Конфиденциально!",
        },
        otziv: {
          title_1: "Наши",
          title_2: "Клиенты",
        },
        narxi: "Цена",
        summ2: "сум/м²",
      },
    },
    en: {
      translation: {
        Boglanish: "Contact Us",
        navbar: {
          logoAlt: "Logo",
          phoneNumber: "+998 99 306 20 20",
          languageAlt: "Current language",
          lang: {
            uz: "Uzbek",
            ru: "Russian",
            en: "English",
          },
        },
        links: {
          home: "Home",
          about_us: "About company",
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
            "FASAD MASTER LLC has been operating in the construction services market for over 10 years. The company is located in Tashkent, employs more than 90 specialists, and has an extensive base of its own material and technical resources. Our main specialization is facade work of any complexity. The company has completed over 400 projects and has experience in finishing facades with liquid travertine, sandstone, brick, natural stone, various types of plaster, and other materials. Facade finishing solves two tasks at once: giving the building an aesthetic appearance and protecting the surface from external factors.",
          paragraph_2:
            "Reputation is our core value. While carrying out finishing works in Tashkent, we adhere to high-quality standards and strive to meet the highest expectations of our clients. We use certified materials, strictly follow contracts, maintain a fair pricing policy, and ensure full self-sufficiency.",
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
            phone: "+998 99 306 20 20",
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
            "FASAD MASTER LLC has been working in the construction services market for over 10 years. The company is located in Tashkent, has over 90+ specialists on staff and has an extensive base of its own material and technical resources. Our main specialization is facade works of any complexity. The company has over 400 objects and experience in finishing facades with liquid travertine, sandstone, brick, natural stone, various types of plaster and other materials. Finishing facades solves two problems at once: giving the building an aesthetic appearance and protecting surfaces from external factors.",
          form_heading: "Leave your contact info",
          thanks: "Thank you! We'll contact you soon.",
          name: "Name",
          phone: "Phone",
          send: "Send",
          privacy: "Your data will be kept confidential.",
        },
        otziv: {
          title_1: "Our",
          title_2: "Clients",
        },
        narxi: "Price",
        summ2: "UZS/m²",
      },
    },
  },
});

export default i18n;
