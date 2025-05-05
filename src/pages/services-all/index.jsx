import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Advantages from "../../components/adventages/adventages";
import AboutMain from "../../components/about-main/about";
import Contacts from "../../components/contacts/contacts";
import Portfolios from "../../components/portfolios/portfolios";

import { useTranslation } from "react-i18next";
import CatalogText from "../../components/catalog/catalogText";

const ServicesAllPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <div className="relative h-48 md:h-64 mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/contacts.png')" }}
        />
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative flex items-center justify-center h-full text-white text-2xl md:text-4xl font-semibold text-center">
          {t("catalog.title_1")} {t("catalog.title_2")}
        </div>
      </div>
      <CatalogText />
      <Advantages />
      <AboutMain />
      <Contacts />
      <Portfolios />
      <Footer />
    </>
  );
};

export default ServicesAllPage;
