import React from "react";
import { Link } from "react-router";
import BlurText from "../BlurText/BlurText";

const DashBoard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-4 my-10">
      {/* Add marathon */}

      <Link to={"/addmarathon"}>
        <div className="card bg-base-100 shadow-sm border-1 px-2 hover:bg-gray-700 h-[430px]">
          <div className="card-body">
            <h2 className="font-bold text-xl md:text-2xl lg:text-3xl text-center">
              <BlurText
                text="Add marathon"
                delay={150}
                animateBy="words"
                direction="top"
                className="text-center"
              />
            </h2>

            <BlurText
              text="Submit a new marathon to the platform for others to discover"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-center"
            />
          </div>
          <figure>
            <img
              src={"https://i.ibb.co/hxgxF6M7/m6.jpg"}
              alt="Shoes"
              className="w-90  h-56 lg:w-[420px] lg:h-[280px] rounded-lg mb-4"
            />
          </figure>
        </div>
      </Link>

      {/* My marathon list */}

      <Link to={"/mymarathonlist"}>
        <div className="card bg-base-100 shadow-sm border-1 px-2 hover:bg-gray-700 h-[430px]">
          <div className="card-body">
            <h2 className="font-bold text-xl md:text-2xl lg:text-3xl text-center">
              <BlurText
                text="My marathon list"
                delay={150}
                animateBy="words"
                direction="top"
                className="text-center"
              />
            </h2>
            <BlurText
              text="Your saved marathons at a glance"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-center"
            />
          </div>
          <figure>
            <img
              src={"https://i.ibb.co/DHVHg2y3/m16.jpgx"}
              alt="Shoes"
              className="w-90  h-56 lg:w-[420px] lg:h-[280px] rounded-lg mb-4"
            />
          </figure>
        </div>
      </Link>

      {/* My applied list */}
      <Link to={"/myapplylist"}>
        <div className="card bg-base-100 shadow-sm border-1 px-2 hover:bg-gray-700 h-[430px]">
          <div className="card-body">
            <h2 className="font-bold text-xl md:text-2xl lg:text-3xl text-center">
              <BlurText
                text="My apply list"
                delay={150}
                animateBy="words"
                direction="top"
                className="text-center"
              />
            </h2>
            <BlurText
              text=" Keep track of the marathons you've applied to"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-center"
            />
          </div>
          <figure>
            <img
              src={"https://i.ibb.co/ZRKtqLvs/m4.jpg"}
              alt="Shoes"
              className="w-90  h-56 lg:w-[420px] lg:h-[280px] rounded-lg mb-4"
            />
          </figure>
        </div>
      </Link>
    </div>
  );
};

export default DashBoard;
