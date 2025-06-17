import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";

const RegisterMarathon = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  const navigate = useNavigate();

  const marathon = location?.state || {};

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const registration = Object.fromEntries(formData.entries());
    registration.userEmail = user.email;
    registration.marathonId = marathon._id;

    try {
      await axios.post("http://localhost:3000/registrations", registration);
      const res = await axios.patch(
        `http://localhost:3000/marathon/increment/${marathon._id}`
      );
      if (res.data.modifiedCount) {
        Swal.fire({
          title: "Registration complete!",
          icon: "success",
          draggable: true,
        });
        form.reset();
        navigate("/dashboard/myapplylist");
      }
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded-lg shadow-md bg-base-100">
      <h2 className="text-2xl font-semibold text-primary mb-4">
        Register for Marathon
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>Email (auto-filled)</label>
          <input
            type="email"
            readOnly
            value={user.email}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label>Marathon Title</label>
          <input
            type="text"
            readOnly
            value={marathon.title}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label>Marathon Start Date</label>
          <input
            type="text"
            readOnly
            value={new Date(marathon.marathonStartDate).toLocaleDateString()}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            required
            // value={formData.firstName}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            required
            // value={formData.lastName}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label>Contact Number</label>
          <input
            type="text"
            name="contactNumber"
            required
            // value={formData.contactNumber}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label>Additional Info</label>
          <textarea
            name="additionalInfo"
            // value={formData.additionalInfo}
            className="textarea textarea-bordered w-full"
          />
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Submit Registration
        </button>
      </form>
    </div>
  );
};

export default RegisterMarathon;
