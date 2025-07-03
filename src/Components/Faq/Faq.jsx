import React from "react";
import BlurText from "../BlurText/BlurText";
import MakeBlurText from "../MakeBlurText/MakeBlurText";

const Faq = ({ faq }) => {
  return (
    <div className="mb-4">
      <BlurText
        text="FAQ"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-primary text-xl md:text-3xl lg:text-5xl font-bold my-4"
      />
      {faq.map((f, index) => (
        <div
          key={index}
          className="collapse collapse-arrow bg-base-100 border border-base-300"
        >
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title font-semibold">
            <BlurText
              text={`${f.question}`}
              delay={80}
              animateBy="words"
              direction="top"
              //   className="text-primary text-xl md:text-3xl lg:text-5xl font-bold my-4"
            />
            {/* <MakeBlurText ></MakeBlurText> */}
          </div>
          <div className="collapse-content text-sm">
            <BlurText
              text={`${f.answer}`}
              delay={10}
              animateBy="words"
              direction="top"
              //   className="text-primary text-xl md:text-3xl lg:text-5xl font-bold my-4"
            />
            {/* <MakeBlurText text={`${f.answer}`}></MakeBlurText> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
