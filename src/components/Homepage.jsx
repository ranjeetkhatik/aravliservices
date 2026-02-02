import { useTranslation } from "react-i18next";
import Navbar from "./Navbar";
import ContactForm from "./contactform";



function Homepage() {
  const { t } = useTranslation();

  return (
    <div className="homepage-container">
     
      <header>
        <Navbar />
       <p>{t('greeting')}</p>

     <ContactForm />
      </header>
    </div>
  );
}

export default Homepage;