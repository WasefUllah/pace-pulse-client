import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const UpdateMyAppliedMarathon = ({ registrationId, refresh, setRefresh }) => {
  //   console.log(registrationId, refresh);
  const [registration, setRegistration] = useState([]);
  useEffect(() => {
    axios(
      `https://pace-pulse-server.vercel.app/registrations/${registrationId}`
    )
      .then((res) => setRegistration(res.data))
      .catch((err) => console.log(err));
  }, [registrationId, refresh]);

  const handleForm = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const registrationData = Object.fromEntries(formData.entries());

    axios
      .put(
        `https://pace-pulse-server.vercel.app/registrations/${registrationId}`,
        registrationData
      )
      .then((response) => {
        if (response?.data?.modifiedCount) {
          setRefresh(!refresh);
          document.getElementById("close-btn-my-apply").click();
          Swal.fire({
            title: "Registration updated successfully!",
            icon: "success",
            draggable: true,
          });
          setRefresh(!refresh);
          form.reset();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="py-2 rounded-2xl bg-base-200 px-4">
      <div className="max-w-3xl mx-auto  p-8 rounded-xl shadow-md bg-base-100">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-2">
          Update Registration From
        </h2>

        <form onSubmit={handleForm}>
          <div>
            <label className="block font-medium text-white mb-1">
              User Email
            </label>
            <input
              type="text"
              name="userEmail"
              readOnly
              defaultValue={registration.userEmail}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium text-white mb-1">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              defaultValue={registration.firstName}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium text-white mb-1">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              defaultValue={registration.lastName}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium text-white mb-1">
              Contact Number
            </label>
            <input
              type="text"
              name="contactNumber"
              placeholder="Contact Number"
              defaultValue={registration.contactNumber}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium text-white mb-1">
              Additional Information
            </label>
            <input
              type="text"
              name="additionalInfo"
              placeholder="Additional Information"
              defaultValue={registration.additionalInfo}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="text-center mt-2">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-2 rounded-md transition-all duration-200"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateMyAppliedMarathon;
