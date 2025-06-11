import React from "react";

const DashBoard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-4 my-10">
      {/* Add marathon */}

      <div className="card bg-base-100 shadow-sm border-1 px-2 hover:bg-gray-700">
        <div className="card-body">
          <h2 className="font-bold text-xl md:text-2xl lg:text-3xl text-center">
            Add marathon
          </h2>
          <p className="text-center">
            Submit a new marathon to the platform for others to discover
          </p>
        </div>
        <figure>
          <img
            src={"https://i.ibb.co/hxgxF6M7/m6.jpg"}
            alt="Shoes"
            className="w-90  h-56 lg:w-[420px] lg:h-[280px] rounded-lg mb-4"
          />
        </figure>
      </div>

      {/* My marathon list */}

      <div className="card bg-base-100 shadow-sm border-1 px-2 hover:bg-gray-700">
        <div className="card-body">
          <h2 className="font-bold text-xl md:text-2xl lg:text-3xl text-center">
            My marathon list
          </h2>
          <p className="text-center">Your saved marathons at a glance</p>
        </div>
        <figure>
          <img
            src={"https://i.ibb.co/DHVHg2y3/m16.jpgx"}
            alt="Shoes"
            className="w-90  h-56 lg:w-[420px] lg:h-[280px] rounded-lg mb-4"
          />
        </figure>
      </div>

      {/* My applied list */}
      <div className="card bg-base-100 shadow-sm border-1 px-2 hover:bg-gray-700">
        <div className="card-body">
          <h2 className="font-bold text-xl md:text-2xl lg:text-3xl text-center">
            My applied list
          </h2>
          <p className="text-center">Keep track of the marathons you've applied to</p>
        </div>
        <figure>
          <img
            src={"https://i.ibb.co/ZRKtqLvs/m4.jpg"}
            alt="Shoes"
            className="w-90  h-56 lg:w-[420px] lg:h-[280px] rounded-lg mb-4"
          />
        </figure>
      </div>
    </div>
  );
};

export default DashBoard;
