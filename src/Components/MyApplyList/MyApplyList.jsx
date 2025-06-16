import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MakeBlurText from "../MakeBlurText.jsx/MakeBlurText";
import { format } from "date-fns";
import Swal from "sweetalert2";
import UpdateMyAppliedMarathon from "../UpdateMyAppliedMarathon/UpdateMyAppliedMarathon";

const MyApplyList = () => {
  const { user } = useContext(AuthContext);
  const [id, setId] = useState();
  // const [single, setSingle] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [marathons, setMarathons] = useState([]);
  const [registrations, setRegistrations] = useState([]);
  // console.log(single);

  useEffect(() => {
    axios(`http://localhost:3000/applied?email=${user.email}`, {
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => {
        console.log(res.data);

        setRegistrations(res.data);
      })
      .catch((err) => console.log(err));

    axios(`http://localhost:3000/aggregate?email=${user.email}`, {
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => {
        console.log(res);

        setMarathons(res.data);
      })
      .catch((err) => console.log(err));
  }, [refresh]);
  console.log(marathons);

  return (
    <div className="p-4">
      <div className="text-primary text-xl md:text-3xl lg:text-5xl my-6 text-center">
        <MakeBlurText text="My Applied Marathons" />
      </div>

      <div className="overflow-x-auto rounded-xl border border-primary/20">
        <table className="min-w-full text-sm md:text-base text-left text-primary">
          <thead className="text-primary uppercase tracking-wider text-xs md:text-sm border-b border-primary/30">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Location</th>
              <th className="px-4 py-3">Distance</th>
              <th className="px-4 py-3">Contact</th>
              <th className="px-4 py-3">Marathon Date</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {registrations.map((registration, index) => (
              <tr
                key={registration._id}
                className="border-b border-primary/10 hover:bg-primary/5 transition"
              >
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">
                  {
                    marathons.find((mar) => mar._id == registration.marathonId)
                      ?.title
                  }
                </td>
                <td className="px-4 py-2">
                  {
                    marathons.find((mar) => mar._id == registration.marathonId)
                      ?.location
                  }
                </td>
                <td className="px-4 py-2">
                  {
                    marathons.find((mar) => mar._id == registration.marathonId)
                      ?.category
                  }
                </td>
                <td className="px-4 py-2">{registration.contactNumber}</td>
                <td className="px-4 py-2">
                  {(() => {
                    const marathon = marathons.find(
                      (mar) => mar._id.toString() === registration.marathonId
                    );

                    if (marathon && marathon.marathonStartDate) {
                      const date = new Date(marathon.marathonStartDate);
                      if (!isNaN(date.getTime())) {
                        return format(date, "do MMMM, yyyy");
                      }
                    }

                    return "Date not available";
                  })()}
                </td>
                <td className="px-4 py-2">{registration.userEmail}</td>
                <td className="px-4 py-2">
                  <div className="flex flex-col gap-1 md:flex-row md:gap-2">
                    <button
                      className="btn btn-xs md:btn-sm btn-primary"
                      onClick={() => {
                        setId(registration._id);

                        document.getElementById("my_modal_2").showModal();
                      }}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-xs md:btn-sm btn-error"
                      onClick={() => {
                        // setSingle(registration.marathonId);
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
                            try {
                              axios
                                .delete(
                                  `http://localhost:3000/registrations/${registration._id}`
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
                                });

                              axios.patch(
                                `http://localhost:3000/marathon/decrement/${registration.marathonId}`
                              );
                            } catch (error) {
                              console.log(error);
                            }
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
          {id && (
            <UpdateMyAppliedMarathon
              registrationId={id}
              refresh={refresh}
              setRefresh={setRefresh}
            ></UpdateMyAppliedMarathon>
          )}
        </dialog>
      </div>
    </div>
  );
};

export default MyApplyList;
