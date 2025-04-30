import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Catalog from "../../components/catalog/catalog";
import Advantages from "../../components/adventages/adventages";
import AboutMain from "../../components/about-main/about";
import Contacts from "../../components/contacts/contacts";
import Portfolios from "../../components/portfolios/portfolios";

const ServicesAllPage = () => {
  return (
    <>
      <Navbar />
      <Catalog />
      <Advantages />
      <AboutMain />
      <Contacts />
      <Portfolios />
      <Footer />
    </>
  );
};

export default ServicesAllPage;
