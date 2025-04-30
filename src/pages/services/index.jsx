import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Advantages from "../../components/adventages/adventages";
import AboutMain from "../../components/about-main/about";
import Contacts from "../../components/contacts/contacts";
import Portfolios from "../../components/portfolios/portfolios";
import ServiceByCategoryIdDetails from "../../components/services-details";

const ServicesPage = () => {
  return (
    <>
      <Navbar />
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
