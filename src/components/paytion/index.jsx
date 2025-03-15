import React from "react";
import { Button } from "antd";
import { useTranslation } from "react-i18next";

import person from "../../assets/imgs/person.png";
import s from "../../assets/imgs/signature.png";

// img imports

import banner from "../../assets/imgs/banner.png";
import logo from "../../assets/imgs/logo.png";
import qr from "../../assets/imgs/qr.png";
import l1 from "../../assets/imgs/l1.png";
import l2 from "../../assets/imgs/l2.png";

const Paytion = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="paytion pt-[90px]">
        <div className="container">
          <div className="ceo flex  gap-[50px] border border-[#3d3d3d] p-[20px] rounded-[20px]">
            <img src={person} className="h-[420px] w-[340px]"></img>

            <div className="about">
              <p className="font-[400] text-[24px] text-[#f1f1f1]">
                {t("about")}
              </p>

              <div className="items_all pt-[50px] flex items-center gap-[30px]">
                <div className="l flex flex-col gap-[15px] items-start">
                  <h5 className="font-[600] text-[28px] text-[#f1f1f1]">
                    {t("name")}
                  </h5>
                  <p className="font-[400] text-[14px] text-[#bebebe]">
                    {t("job")}
                  </p>
                  <Button>{t("btn3")}</Button>
                </div>

                <img src={s} alt="" />
              </div>
            </div>
          </div>

          <div className="banner pt-[70px]">
            <div className="container2 grid grid-cols-2 gap-[10px] max-[420px]:p-[15px] items-center max-[690px]:flex flex-col-reverse showcase border border-[#3d3d3d] rounded-2xl p-[40px]">
              <div className="flex flex-col gap-[20px]">
                <img src={logo} alt="" className="!w-[120px]" />

                <p className="font-normal text-[16px] leading-[130%] text-[#bebebe]">
                  {t("banner")}
                </p>

                <div className="flex justify-start items-center gap-[10px]">
                  <img src={qr} alt="" />
                  <div className="flex flex-col gap-[10px]">
                    <img src={l1} alt="" />
                    <img src={l2} alt="" />
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center max-[775px]:hidden">
                <img src={banner} alt="" className="h-[440px] object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Paytion;
