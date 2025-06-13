import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MakeBlurText from "../MakeBlurText.jsx/MakeBlurText";
import { format } from "date-fns";

const MyMarathonList = () => {
  const [marathons, setMarathons] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios(`http://localhost:3000/allmarathons?email=${user.email}`)
      .then((res) => setMarathons(res.data))
      .catch((err) => console.log(err));
  }, [user.email]);

  return (
    <div className="p-4">
      <div className="text-primary text-xl md:text-3xl lg:text-5xl my-6 text-center">
        <MakeBlurText text="My Marathons" />
      </div>

      <div className="overflow-x-auto rounded-xl border border-primary/20">
        <table className="min-w-full text-sm md:text-base text-left text-primary">
          <thead className="text-primary uppercase tracking-wider text-xs md:text-sm border-b border-primary/30">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Location</th>
              <th className="px-4 py-3">Distance</th>
              <th className="px-4 py-3">Reg. End Date</th>
              <th className="px-4 py-3">Marathon Date</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {marathons.map((marathon, index) => (
              <tr
                key={marathon._id}
                className="border-b border-primary/10 hover:bg-primary/5 transition"
              >
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{marathon.title}</td>
                <td className="px-4 py-2">{marathon.location}</td>
                <td className="px-4 py-2">{marathon.category}</td>
                <td className="px-4 py-2">
                  {format(new Date(marathon.endRegDate), "do MMMM, yyyy")}
                </td>
                <td className="px-4 py-2">
                  {format(new Date(marathon.marathonStartDate), "do MMMM, yyyy")}
                </td>
                <td className="px-4 py-2">
                  <div className="flex flex-col gap-1 md:flex-row md:gap-2">
                    <button className="btn btn-xs md:btn-sm btn-primary">Update</button>
                    <button className="btn btn-xs md:btn-sm btn-error">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyMarathonList;
