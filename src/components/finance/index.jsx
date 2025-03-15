import React from "react";
import { useTranslation } from "react-i18next";

// img imports

import task1 from "../../assets/imgs/task1.png";
import task2 from "../../assets/imgs/task2.png";
import task3 from "../../assets/imgs/task3.png";

const tasks = [
  {
    id: 1,
    task: "c1",
    img: task1,
  },
  {
    id: 2,
    task: "c2",
    img: task2,
  },
  {
    id: 3,
    task: "c3",
    img: task3,
  },
];

const Finance = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="finance pt-[50px]">
        <div className="container flex flex-col gap-[25px]">
          <h1 className="font-[800] text-[48px] text-[#f1f1f1]">{t("h1")}</h1>
          <div className="tasks grid grid-cols-3 gap-[30px]">
            {tasks.map((task) => (
              <div key={task.id} className="task flex flex-col gap-[20px] border border-[#3d3d3d] rounded-[20px] p-[20px]">
                <img src={task.img} alt="" />
                <p className="font-[600px] text-[18px] text-[#f1f1f1]">{t(task.task)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Finance;
