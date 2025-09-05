import React, { useState } from "react";
import { ChevronDown, Check } from "lucide-react";

export default function LangBar() {
  const [activeLang, setActiveLang] = useState("ქართული");
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "ka", name: "ქართული" },
    { code: "en", name: "English" },
  ];

  const handleLanguageSelect = (language) => {
    setActiveLang(language);
    setIsOpen(false);
  };

  return (
    <div className="w-[155px] relative max-600:w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="border w-full border-[#E0E0E0] flex px-3 h-10 items-center justify-between rounded-lg bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="text-[14px]">{activeLang}</span>
        <ChevronDown
          width={16}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute w-full mt-1 rounded-lg bg-white border border-[#E0E0E0] shadow-lg z-10">
          <ul className="py-2">
            {languages.map((lang) => (
              <li key={lang.code}>
                <button
                  onClick={() => handleLanguageSelect(lang.name)}
                  className="w-full flex items-center justify-between px-3 py-2 text-[14px] hover:bg-gray-100 transition-colors"
                >
                  <span>{lang.name}</span>
                  {activeLang === lang.name && (
                    <Check width={16} className="text-blue-600" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
