import React from "react";
import { useTranslation } from "react-i18next";
import FlagEN from "../assets/flags/en.png";
import FlagID from "../assets/flags/id.png";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="fixed top-4 right-4 z-50 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-lg flex gap-3 items-center">
      <button
        onClick={() => changeLanguage("en")}
        className={`w-9 h-9 rounded-full overflow-hidden border-2 ${
          i18n.language === "en"
            ? "border-blue-500 shadow-md"
            : "border-transparent"
        } hover:scale-105 transition-transform duration-200`}
      >
        <img src={FlagEN} alt="EN" className="object-cover w-full h-full" />
      </button>
      <button
        onClick={() => changeLanguage("id")}
        className={`w-9 h-9 rounded-full overflow-hidden border-2 ${
          i18n.language === "id"
            ? "border-red-500 shadow-md"
            : "border-transparent"
        } hover:scale-105 transition-transform duration-200`}
      >
        <img src={FlagID} alt="ID" className="object-cover w-full h-full" />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
