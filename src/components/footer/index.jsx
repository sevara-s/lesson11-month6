import React from "react";
import { useTranslation } from "react-i18next";

// svg imports
import logo from "../../assets/imgs/logo.png";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <footer className="footer pt-[60px] pb-[10px]">
        <div className="container">
          <div className="footer_top grid grid-cols-4 gap-[30px]">
            <div className="f1 flex flex-col gap-[10px]">
              <img src={logo} alt="" />
              <p className="font-[400] text-[16px] text-[#f1f1f1]">{t("f1")}</p>
            </div>

            <div className="f2 flex flex-col gap-[10px]">
              <p className="font-[400] text-[16px] text-[#f1f1f1]">{t("f2")}</p>
              <p className="font-[400] text-[16px] text-[#f1f1f1]">{t("f3")}</p>
              <p className="font-[400] text-[16px] text-[#f1f1f1]">{t("f4")}</p>
            </div>

            <div className="f3 flex flex-col gap-[10px]">
              <p className="font-[400] text-[16px] text-[#f1f1f1]">{t("f5")}</p>
              <p className="font-[400] text-[16px] text-[#f1f1f1]">{t("f6")}</p>
              <p className="font-[400] text-[16px] text-[#f1f1f1]">{t("f7")}</p>
              <p className="font-[400] text-[16px] text-[#f1f1f1]">{t("f8")}</p>
              <p className="font-[400] text-[16px] text-[#f1f1f1]">{t("f9")}</p>
              <p className="font-[400] text-[16px] text-[#f1f1f1]">
                {t("f10")}
              </p>
            </div>

            <div className="f4">
              <p className="font-[400] text-[16px] text-[#f1f1f1]">
                {t("f11")}
              </p>
              <p className="font-[400] text-[16px] text-[#f1f1f1]">
                {t("f12")}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
