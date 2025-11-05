import React from "react";
import {  bride, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={bride}
          alt="billing"
          className="w-[60%] h-[100%] relative z-[5] rounded-2xl"
        />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Learn. Grow. Shine.
          <br className="sm:block hidden" />{" "}
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Join COCOMIIIU Academy — where passion becomes profession.
        </p>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Get hands-on training from industry experts and certified diploma
          courses in Cosmetology & Semi-Permanent Makeup.
        </p>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        “At COCOMIIIU, we don’t just teach makeup — we shape confident creators.”
        </p>

       
      </div>
    </section>
  );
};

export default Billing;
