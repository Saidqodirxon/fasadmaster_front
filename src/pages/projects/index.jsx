import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Advantages from "../../components/adventages/adventages";
import AboutMain from "../../components/about-main/about";
import Contacts from "../../components/contacts/contacts";
import Portfolios from "../../components/portfolios/portfolios";
import ContactForm from "../../components/about-2";

const ProjectsPage = () => {
  return (
    <>
      <Navbar />
      <div className="mt-10">
        <Portfolios />
      </div>
      <Contacts />
      <Advantages />
      <ContactForm />
      <Footer />
    </>
  );
};

export default ProjectsPage;
