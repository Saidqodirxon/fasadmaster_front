import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Hero from "../../components/hero/hero";
import Contacts from "../../components/contacts/contacts";

import Adventages from "../../components/adventages/adventages";
import Portfolios from "../../components/portfolios/portfolios";

import "./main.scss";
import ServicesMain from "../../components/services-main/main";
import ServicesGridMain from "../../components/category-services-main";
import WhyChooseUs from "../../components/whychoose/why";
import AboutMain from "../../components/about-main/about";
import Testimonials from "../../components/otziv";

const Main = () => {
  return (
    <>
      <div className="container">
        <div className="bg">
          <Navbar />
          <Hero />
        </div>
      </div>
      <ServicesMain />
      <Adventages />
      <ServicesGridMain />
      <WhyChooseUs />
      <AboutMain />
      <Contacts />
      <Portfolios />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Main;
