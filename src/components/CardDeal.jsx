import React from "react";
import {   makeupCourses } from "../assets";
import Button from "./Button";
import styles, { layout } from "../style";

const CardDeal = () => {
  return (
    <section id="why-choose" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Why Choose <br className="sm:block hidden" />
          COCOMIIIU?
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          At COCOMIIIU, we believe beauty is more than appearance — it’s a
          reflection of confidence and individuality. Our brides trust us for a
          skin-like finish and natural glow, perfected through years of
          expertise in fashion and bridal artistry. Every face is unique, and we
          tailor each look with personalized care to enhance natural beauty
          effortlessly.
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={layout.sectionImg}>
        <img src={  makeupCourses} alt="card" className="w-[60%] h-[100%] rounded-2xl" />
      </div>
    </section>
  );
};

export default CardDeal;
