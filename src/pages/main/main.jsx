import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Hero from "../../components/hero/hero";
import About from "../../components/about/about";
import Contacts from "../../components/contacts/contacts";

import Adventages from "../../components/adventages/adventages";
import Services from "../../components/services/services";
import Catalog from "../../components/catalog/catalog";
import Portfolios from "../../components/portfolios/portfolios";

import "./main.scss";

const Main = () => {
  return (
    <>
      <div className="container">
        <div className="bg">
          <Navbar />
          <Hero />
        </div>
      </div>
      <About />
      <Contacts />
      <Portfolios />

      <Adventages />
      <Catalog />
      <Services />
      <Footer />
    </>
  );
};

export default Main;
