import axios from "axios";
import React, { useState, useEffect } from "react";
import MarathonCard from "../MarathonCard/MarathonCard";
import { format } from "date-fns";
import MakeBlurText from "../MakeBlurText.jsx/MakeBlurText";
import { Link } from "react-router";
import Loader from "../Loader/Loader";

const Marathon = () => {
  const [marathons, setMarathons] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    axios("https://pace-pulse-server.vercel.app/allmarathonswithoutemail")
      .then((res) => {
        setMarathons(res.data);
        setLoad(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {load ? (
        <div className="flex items-center justify-center">
          <span className="loading loading-infinity h-screen mx-auto w-1/6"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {marathons.map((marathon) => (
            <div
              key={marathon._id}
              className="p-2 min-h-[450px] flex flex-col space-y-1 justify-center"
            >
              <div className="mb-2 ">
                <img
                  src={marathon.photo}
                  alt=""
                  className="w-full h-74 object-center rounded-2xl"
                />
              </div>

              <div className="text-primary text-lg md:text-xl lg:text-2xl">
                <MakeBlurText text={marathon.title}></MakeBlurText>
              </div>
              <div className="text-gray-400 text-xs md:text-md lg:text-lg">
                <MakeBlurText text={marathon.location}></MakeBlurText>
                <MakeBlurText
                  text={`Registration date: ${format(
                    marathon.startRegDate,
                    "do MMMM, yyyy"
                  )}`}
                ></MakeBlurText>
              </div>
              <div className="flex justify-end">
                <Link to={`/marathons/${marathon._id}`}>
                  <button className="btn-sm md:btn lg:btn-lg btn-primary">
                    See details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Marathon;
