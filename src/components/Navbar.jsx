
import { useTranslation } from 'react-i18next';
 // Assume you have a CSS file for styling


const Navbar = () => {
  const { t } = useTranslation();


  return (
    <nav className="flex justify-between items-center p-4 bg-gray-700 shadow-md">
      <div className="text-3xl font-bold text-yellow-100">अरावली ई सर्विसेज</div>
      <div>
        <ul className="hidden md:flex space-x-6 text-yellow-100 items-center">
        <li className="hover:text-blue-500 cursor-pointer">{t('home')}</li>
        <li className="hover:text-blue-500 cursor-pointer">{t('features')}</li>
       
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          {t('get_started')}
        </button>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;