import React from "react";
import { Button } from "antd";
import { useTranslation } from "react-i18next";

// img imports

import p1 from "../../assets/imgs/p1.svg";
import p2 from "../../assets/imgs/p2.svg";
import p3 from "../../assets/imgs/p3.png";

const products = [
  {
    id: 1,
    title: "p1_title",
    text: "p1",
    img:p1
  },
  {
    id: 2,
    title: "p2_title",
    text: "p2",
    img:p2
  },
  {
    id: 3,
    title: "p3_title",
    text: "p3",
    img:p3
  },
];

const Products = () => {
  const { t } = useTranslation();
  return (
    <section className="products pt-[50px]">
      <div className="container">
        <h1 className="font-[800] text-[48px] text-[#f1f1f1]">{t("h1")}</h1>

        <div className="products flex flex-col gap-[20px]">
            {products.map((product)=>(
                <div key={product.id} className="pr flex items-center justify-between border border-[#3d3d3d] rounded-[20px] p-[20px]">
                    <div className="left flex flex-col items-start gap-[25px] ">
                        <h2 className="font-[800] text-[48px] text-[#f1f1f1]">{t(product.title)}</h2>
                        <p className="font-[400] text-[18px] text-[#bebebe]">{t(product.text)}</p>
                        <Button>{t("btn1")}</Button>
                    </div>

                   <img src={product.img} alt="" />

                </div>
            ))}


        </div>
      </div>
    </section>
  );
};

export default Products;
