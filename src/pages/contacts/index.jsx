import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import ContactForm from "../../components/about-2";
import { useTranslation } from "react-i18next";

const ContactsPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Navbar />

      <div className="mt-20 ">
        <div className="relative h-48 md:h-64">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/contacts.png')" }}
          />
          <div className="absolute inset-0 bg-black opacity-50" />
          <div className="relative flex items-center justify-center h-full text-white text-2xl md:text-4xl font-semibold">
            {t("contact_form.heading")}
          </div>
        </div>
        <ContactForm />
      </div>
      <Footer />
    </>
  );
};

export default ContactsPage;
