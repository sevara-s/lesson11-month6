import React, { useState, useEffect } from "react";
import { Button, Select } from "antd";
import { useTranslation } from "react-i18next";
import i18next from "../../locals/langConfig";

// SVG import
import logo from "../../assets/svgs/logo.svg";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons"; // Icons for the menu toggle

const changeLanguage = (language) => {
  i18next.changeLanguage(language);
  localStorage.setItem("language", language);
};

const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Menu toggled. Current state:", isMenuOpen); // Debugging
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <header className="header p-[0.5rem] sm:p-[1rem] sticky top-0 bg-white z-50 w-full overflow-x-hidden">
      <div className="container flex items-center justify-between max-w-[1200px] mx-auto w-full">
        {/* Logo */}
        <img src={logo} alt="logo" className="w-[4rem] sm:w-[6rem]" />

        {/* Mobile Menu Toggle */}
        <div className="sm:hidden cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? (
            <CloseOutlined style={{ fontSize: "1.25rem" }} />
          ) : (
            <MenuOutlined style={{ fontSize: "1.25rem" }} />
          )}
        </div>

        {/* Navigation Links */}
        <div
          className={`nav_links fixed sm:static top-0 right-[-100%] sm:right-0 h-screen sm:h-auto w-[80%] sm:w-auto bg-white sm:bg-transparent transition-all duration-300 ease-in-out ${
            isMenuOpen ? "right-0" : "right-[-100%]"
          } sm:transform-none flex flex-col sm:flex-row items-start sm:items-center gap-[0.8rem] p-[1.5rem] sm:p-0 z-40`}
        >
          {/* Close Button for Mobile */}
          <div className="sm:hidden self-end cursor-pointer" onClick={toggleMenu}>
            <CloseOutlined style={{ fontSize: "1.25rem" }} />
          </div>

          {/* Navigation Buttons */}
          <Button
            className="!font-[400] !text-[0.8rem] sm:!text-[1rem] !text-[#c7c7c8] w-full sm:w-auto text-left sm:text-center"
            type="text"
          >
            {t("products")}
          </Button>
          <Button
            className="!font-[400] !text-[0.8rem] sm:!text-[1rem] !text-[#c7c7c8] w-full sm:w-auto text-left sm:text-center"
            type="text"
          >
            {t("reviews")}
          </Button>
          <Button
            className="!font-[400] !text-[0.8rem] sm:!text-[1rem] !text-[#c7c7c8] w-full sm:w-auto text-left sm:text-center"
            type="text"
          >
            {t("about_us")}
          </Button>

          {/* Language Selector */}
          <Select
            defaultValue={localStorage.getItem("language") || i18next.language}
            style={{ width: 100 }}
            onChange={changeLanguage}
          >
            <Select.Option value="en">🇬🇧 EN</Select.Option>
            <Select.Option value="uz">🇺🇿 UZ</Select.Option>
            <Select.Option value="ru">🇷🇺 RU</Select.Option>
          </Select>

          {/* Action Button */}
          <Button className="!font-[400] !text-[0.8rem] sm:!text-[1rem] !text-[#333] !border !border-[#3d3d3d] !rounded-[0.5rem] !p-[0.5rem] sm:!p-[0.75rem] w-full sm:w-auto text-left sm:text-center">
            {t("btn")}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;