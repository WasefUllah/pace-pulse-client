import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import MakeBlurText from "../MakeBlurText.jsx/MakeBlurText";
import { format } from "date-fns";
import Swal from "sweetalert2";

const ShowMarathonDetails = () => {
  const marathon = useLoaderData();
  const now = new Date().getTime();
  const start = new Date(marathon.startRegDate).getTime();
  const end = new Date(marathon.endRegDate).getTime();
  const navigate = useNavigate();

  const handleRegBtn = () => {
    if (now > start && now < end) {
      navigate("/registermarathon");
    } else {
      if (now < start) {
        Swal.fire({
          icon: "error",
          title: "Registration hasn't started yet",
        });
      } else if (now > end) {
        Swal.fire({
          icon: "error",
          title: "Registration is over",
        });
      }
    }
  };

  return (
    <div>
      <div className="relative h-[450px] flex items-center justify-center overflow-hidden">
        <img
          src={marathon.photo}
          alt="Marathon Background"
          className="absolute inset-0 w-full h-full object-cover opacity-70 rounded-md"
        />

        <div className="relative z-10 text-blue-500 font-bold text-2xl md:text-4xl lg:text-6xl">
          <MakeBlurText text={marathon.title} />
        </div>
      </div>
      <div className=" mt-4 p-6  shadow-lg rounded-xl space-y-4 text-blue-300">
        <div className="text-base md:text-lg text-primary flex justify-start items-start gap-0.5">
          <span className="font-semibold">
            <MakeBlurText text="Description: " />
          </span>
          <span>
            {" "}
            <MakeBlurText text={marathon.description} />
          </span>
        </div>

        <div className="text-base md:text-lg text-primary flex justify-start items-center gap-0.5">
          <span className="font-semibold">
            <MakeBlurText text="Location: " />
          </span>
          <MakeBlurText text={marathon.location} />
        </div>

        <div className="text-base md:text-lg text-primary flex justify-start items-center gap-0.5">
          <span className="font-semibold">
            <MakeBlurText text="Registration Start Date: " />
          </span>
          <MakeBlurText
            text={format(new Date(marathon.startRegDate), "do MMMM, yyyy")}
          />
        </div>

        <div className="text-base md:text-lg text-primary flex justify-start items-center gap-0.5">
          <span className="font-semibold">
            <MakeBlurText text="Registration End Date: " />
          </span>
          <MakeBlurText
            text={format(new Date(marathon.endRegDate), "do MMMM, yyyy")}
          />
        </div>

        <div className="text-base md:text-lg text-primary flex justify-start items-center gap-0.5">
          <span className="font-semibold">
            <MakeBlurText text="Marathon Start Date: " />
          </span>
          <MakeBlurText
            text={format(new Date(marathon.marathonStartDate), "do MMMM, yyyy")}
          />
        </div>

        <div className="text-base md:text-lg flex justify-between items-center">
          <p className="font-semibold">
            Total registration number: {marathon.regCount}
          </p>
          <button
            onClick={handleRegBtn}
            className="btn btn-xs md:btn-md lg:btn-lg btn-primary"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowMarathonDetails;
