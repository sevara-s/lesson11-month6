import React from "react";
import { Button } from "antd";
import { useTranslation } from "react-i18next";

// svg import
import logo from "../../assets/svgs/main.svg";

import icon1 from "../../assets/imgs/icon1.png";
import icon2 from "../../assets/imgs/icon2.png";
import icon3 from "../../assets/imgs/icon3.png";

const carts = [
  {
    id: 1,
    cart: "sh1",
    img: icon1,
  },
  {
    id: 2,
    cart: "sh2",
    img: icon2,
  },
  {
    id: 3,
    cart: "sh3",
    img: icon3,
  },
];

import shw from "../../assets/imgs/shw.png";

const Showcase = () => {
  const { t } = useTranslation();
  return (
    <section className="showcase pt-[50px]">
      <div className="container">
        <div className="showcase_top flex justify-between max-[1095px]:flex-col">
          <div className="showcase_left flex flex-col gap-[20px] items-start">
            <img src={logo} alt="" />
            <p className="font-[400] text-[#f1f1f1] text-[22px]">
              {t("show1")}
            </p>
            <Button>{t("btn1")}</Button>

            <div className="carts grid grid-cols-3 gap-[20px]">
                 {carts.map((cart)=>(
                    <div key={cart.id} className="cart1 border border-[#3d3d3d] rounded-[20px] p-[20px] flex flex-col items-start gap-[10px] ">
                        <img src={cart.img} alt="" />
                        <p className="font-[600] text-[16px] text-[#f1f1f1]">{t(cart.cart)}</p>
                    </div>
                 ))}
            </div>
          </div>

          <div className="showcase_right">
            <img src={shw} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
