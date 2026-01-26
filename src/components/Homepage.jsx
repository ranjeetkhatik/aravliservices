import { useTranslation } from "react-i18next";
import Navbar from "./Navbar";



function Homepage() {
  const { t } = useTranslation();

  return (
    <div className="homepage-container">
     
      <header>
        <Navbar />
       <p>{t('greeting')}</p>
      </header>
    </div>
  );
}

export default Homepage;