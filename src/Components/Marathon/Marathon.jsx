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
  const [sort, setSort] = useState("");

  useEffect(() => {
    console.log("hi");
    axios(
      `https://pace-pulse-server.vercel.app/allmarathonswithoutemail?sortOption=${sort}`
      // `http://localhost:3000/allmarathonswithoutemail?sortOption=${sort}`
    )
      .then((res) => {
        setMarathons(res.data);
        setLoad(false);
      })
      .catch((err) => console.log(err));
  }, [sort]);

  return (
    <div className="min-h-screen">
      <div className="text-center text-primary  mb-8 mt-3">
        <select onChange={(e) => setSort(e.target.value)} className="border-2 ">
          <option className="bg-base-200 text-primary " value="">Sort by:</option>
          <option className="bg-base-200 text-primary " value="registration">Registration Deadline</option>
          <option className="bg-base-200 text-primary " value="marathon">Marathon Day</option>
        </select>
      </div>

      {load ? (
        <div className="flex items-center justify-center">
          <span className="loading loading-infinity h-screen mx-auto w-1/6"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {marathons.map((marathon) => (
            <div
              key={marathon._id}
              className="p-2 min-h-[500px] flex flex-col space-y-1 justify-between"
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
