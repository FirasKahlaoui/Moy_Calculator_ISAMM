import logo from "../assets/img/icons8-math-96.png";
import DarkMode from "./DarkMode/DarkMode";
import { useTranslation } from "react-i18next";

export const NavBar = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="nav--container">
      <nav className="nav">
        <img src={logo} alt="logo" className="nav--icon" />
        <h3 className="nav--logo_text">MyISAMMGrade</h3>
        <h4 className="nav--title">ISAMM - Grade Calculator</h4>
        {i18n.language === "fr" && (
          <button
            className="nav--button"
            onClick={() => {
              i18n.changeLanguage("en");
            }}
          >
            EN
          </button>
        )}
        {i18n.language === "en" && (
          <button
            className="nav--button"
            onClick={() => {
              i18n.changeLanguage("fr");
            }}
          >
            FR
          </button>
        )}
        <DarkMode />
      </nav>
    </div>
  );
};