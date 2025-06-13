import React from "react";
import MakeBlurText from "../MakeBlurText.jsx/MakeBlurText";
import BlurText from "../BlurText/BlurText";

const MarathonCard = ({ marathons }) => {
  return (
   <div>

    <BlurText
        text="Upcoming Marathons"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-primary text-xl md:text-3xl lg:text-5xl font-bold my-4"
      />
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-2 lg:gap-4">
      {marathons.map((marathon) => (
        <div key={marathon._id} className="p-2 min-h-[450px] flex flex-col space-y-1 justify-center">
          <div className="mb-2 ">
            <img src={marathon.photo} alt=""  className="w-full h-74 object-center rounded-2xl"/>
          </div>

          <div className="text-primary text-lg md:text-xl lg:text-2xl">
            <MakeBlurText text={marathon.title}></MakeBlurText>
          </div>
          <div className="text-gray-400 text-xs md:text-md lg:text-lg">
            <MakeBlurText text={marathon.location}></MakeBlurText>
            <MakeBlurText text={marathon.startRegDate}></MakeBlurText>
          </div>
          <div className="flex justify-end">
            <button className="btn-sm md:btn lg:btn-lg btn-primary">See details</button>
          </div>
        </div>
        
        
      ))}
    </div>
   </div>
  );
};

export default MarathonCard;
