import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Advantages from "../../components/adventages/adventages";
import Contacts from "../../components/contacts/contacts";
import Portfolios from "../../components/portfolios/portfolios";
import ContactForm from "../../components/about-2";
import CompanyHistory from "../../components/history";
import AboutMain from "../../components/about-main/about";

const HistoryPage = () => {
  return (
    <>
      <Navbar />
      <div className="mt-10">
        <AboutMain />
      </div>
      <CompanyHistory />
      <Advantages />
      <ContactForm />
      <Footer />
    </>
  );
};

export default HistoryPage;
