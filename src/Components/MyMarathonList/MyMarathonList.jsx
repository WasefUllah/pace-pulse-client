import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MakeBlurText from "../MakeBlurText/MakeBlurText";
import { format } from "date-fns";
import UpdateMarathon from "../UpdateMarathon/UpdateMarathon";
import Swal from "sweetalert2";

const MyMarathonList = () => {
  const [marathons, setMarathons] = useState([]);
  const { user } = useContext(AuthContext);
  const [id, setId] = useState(null);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    axios(
      `https://pace-pulse-server.vercel.app/allmarathons?email=${user.email}`,
      {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      }
    )
      .then((res) => setMarathons(res.data))
      .catch((err) => console.log(err));
  }, [user.email, refresh]);

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
              <th className="px-4 py-3">Registration Count</th>
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
                  {format(
                    new Date(marathon.marathonStartDate),
                    "do MMMM, yyyy"
                  )}
                </td>
                <td className="px-4 py-2">{marathon.regCount}</td>
                <td className="px-4 py-2">
                  <div className="flex flex-col gap-1 md:flex-row md:gap-2">
                    <button
                      className="btn btn-xs md:btn-sm btn-primary"
                      onClick={() => {
                        setId(marathon._id);
                        document.getElementById("my_modal_2").showModal();
                      }}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-xs md:btn-sm btn-error"
                      onClick={() => {
                        Swal.fire({
                          title: "Are you sure?",
                          text: "You won't be able to revert this!",
                          icon: "warning",
                          showCancelButton: true,
                          confirmButtonColor: "#3085d6",
                          cancelButtonColor: "#d33",
                          confirmButtonText: "Yes, delete it!",
                        }).then((result) => {
                          if (result.isConfirmed) {
                            axios
                              .delete(
                                `https://pace-pulse-server.vercel.app/allmarathons/${marathon._id}`
                              )
                              .then((res) => {
                                if (res.data.deletedCount) {
                                  Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success",
                                  });
                                  setRefresh(!refresh);
                                }
                              })
                              .catch((err) => console.log(err));
                          }
                        });
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <dialog id="my_modal_2" className="modal">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              id="close-btn-my-marathon"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
          {id && (
            <UpdateMarathon
              marathonId={id}
              refresh={refresh}
              setRefresh={setRefresh}
            ></UpdateMarathon>
          )}
        </dialog>
      </div>
    </div>
  );
};

export default MyMarathonList;
