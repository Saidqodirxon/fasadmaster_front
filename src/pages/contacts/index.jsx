import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import ContactForm from "../../components/about-2";

const ContactsPage = () => {
  return (
    <>
      <Navbar />
      <div className="mt-10">
        <ContactForm />
      </div>
      <Footer />
    </> 
  );
};

export default ContactsPage;
