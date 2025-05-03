import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Advantages from "../../components/adventages/adventages";
import AboutMain from "../../components/about-main/about";
import Contacts from "../../components/contacts/contacts";
import Portfolios from "../../components/portfolios/portfolios";
import ServiceByCategoryIdDetails from "../../components/services-details";
import { useTranslation } from "react-i18next";

const ServicesPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <div
        className="relative w-full h-52 md:h-64 bg-cover bg-center rounded-xl mb-10"
        style={{ backgroundImage: "url('/contacts.png')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50 rounded-xl flex items-center justify-center">
          <h1 className="text-white text-2xl md:text-4xl font-semibold">
            {t("catalog.title_1")} {t("catalog.title_2")}
          </h1>
        </div>
      </div>
      <ServiceByCategoryIdDetails />
      <Advantages />
      <AboutMain />
      <Contacts />
      <Portfolios />
      <Footer />
    </>
  );
};

export default ServicesPage;
