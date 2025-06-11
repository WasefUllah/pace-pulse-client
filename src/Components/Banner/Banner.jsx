import React from "react";
import BlurText from "../BlurText/BlurText";

const Banner = () => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  return (
    <div>
      <div className="carousel w-full">
        <div
          id="item1"
          className="carousel-item w-full bg-[url(https://i.ibb.co/n8f2BsMX/m10.jpg)] h-[520px] bg-cover bg-center rounded-2xl"
        >
          <div className="flex flex-col">
            <BlurText
              text="Run Beyond Limits"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-3xl md:text-6xl lg:text-8xl text-blue-700 font-bold mt-44 ml-5 md:ml-10 md:mt-40 lg:ml-20 lg:mt-40 "
            />
            <BlurText
              text="Discover marathons that match your pace and passion."
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-xl md:text-3xl lg:text-4xl text-blue-400 font-bold mt-2 ml-5 md:ml-10 md:mt-4 lg:ml-20 lg:mt-3"
            />
          </div>
        </div>
        <div
          id="item1"
          className="carousel-item w-full bg-[url(https://i.ibb.co/bSVSSQ8/m3.jpg)] h-[520px] bg-cover bg-center rounded-2xl"
        >
          <div className="flex flex-col">
            <BlurText
              text="Your Marathon Journey Starts Here"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-3xl md:text-6xl lg:text-8xl text-blue-700  font-bold mt-44 ml-5 md:ml-10 md:mt-40 lg:ml-20 lg:mt-40 "
            />
            <BlurText
              text="Browse, apply, and prepare for races around the globe."
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-xl md:text-3xl lg:text-4xl text-blue-400 font-bold mt-2 ml-5 md:ml-10 md:mt-4 lg:ml-20 lg:mt-3"
            />
          </div>
        </div>
        <div
          id="item1"
          className="carousel-item w-full bg-[url(https://i.ibb.co/9Ht0JtJS/m11.jpg)] h-[520px] bg-cover bg-center rounded-2xl"
        >
          <div className="flex flex-col">
            <BlurText
              text="Track. Train. Triumph."
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-3xl md:text-6xl lg:text-8xl text-blue-700 font-bold mt-44 ml-5 md:ml-10 md:mt-40 lg:ml-20 lg:mt-40 "
            />
            <BlurText
              text="Keep your marathon goals in focus—one step at a time.."
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-xl md:text-3xl lg:text-4xl text-blue-400 font-bold mt-2 ml-5 md:ml-10 md:mt-4 lg:ml-20 lg:mt-3"
            />
          </div>
        </div>
        <div
          id="item1"
          className="carousel-item w-full bg-[url(https://i.ibb.co/7x3NBNM4/m14.jpg)] h-[520px] bg-cover bg-center rounded-2xl"
        >
          <div className="flex flex-col">
            <BlurText
              text="Chase the Finish Line"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-3xl md:text-6xl lg:text-8xl text-blue-700 font-bold mt-44 ml-5 md:ml-10 md:mt-40 lg:ml-20 lg:mt-40 "
            />
            <BlurText
              text="Join marathons, track your progress, and celebrate every mile."
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-xl md:text-3xl lg:text-4xl text-blue-400 font-bold mt-2 ml-5 md:ml-10 md:mt-4 lg:ml-20 lg:mt-3"
            />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs"></a>
        <a href="#item2" className="btn btn-xs"></a>
        <a href="#item3" className="btn btn-xs"></a>
        <a href="#item4" className="btn btn-xs"></a>
      </div>
    </div>
  );
};

export default Banner;
