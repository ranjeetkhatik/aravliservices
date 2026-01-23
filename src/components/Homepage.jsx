import Navbar from "./Navbar";

const [t,i18n] = useTranslation();
 const toggleLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

function Homepage() {
  return (
    <div className="homepage-container">
      {/* This is where our sections will go */}
      <header>
        <Navbar />
        <h1>{t("greeting")}</h1>
       
      </header>
    </div>
  );
}

export default Homepage;