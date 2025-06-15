import axios from "axios";
import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const AddMarathon = () => {
  const {user} = useContext(AuthContext);
  const [startRegDate, setStartRegDate] = useState(null);
  const [endRegDate, setEndRegDate] = useState(null);
  const [marathonStartDate, setMarathonStartDate] = useState(null);
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const marathonData = Object.fromEntries(formData.entries());
    marathonData.regCount = 0;
    marathonData.createdAt = new Date();
    marathonData.startRegDate = startRegDate;
    marathonData.endRegDate = endRegDate;
    marathonData.marathonStartDate = marathonStartDate;
    marathonData.createdBy = user.email;
   

    axios
      .post("http://localhost:3000/marathon", marathonData)
      .then((response) => {
        console.log(response);
        
        if (response?.data?.insertedId) {

          Swal.fire({
            title: "Marathon added successfully!",
            icon: "success",
            draggable: true,
          });
          form.reset();
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">
      <div className="max-w-3xl mx-auto  p-8 rounded-xl shadow-md bg-base-100">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-8">
          Add Marathon
        </h2>

        <form onSubmit={handleForm} className="grid grid-cols-1 gap-6">
          {/* Marathon Title */}
          <div>
            <label className="block font-medium text-white mb-1">
              Marathon Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Marathon title"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Start Registration Date */}
          <div>
            <label className="block font-medium text-white mb-1">
              Start Registration Date
            </label>
            <DatePicker
              selected={startRegDate}
              onChange={(date) => setStartRegDate(date)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholderText="Select a date"
            />
          </div>

          {/* End Registration Date */}
          <div>
            <label className="block font-medium text-white mb-1">
              End Registration Date
            </label>
            <DatePicker
              selected={endRegDate}
              onChange={(date) => setEndRegDate(date)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholderText="Select a date"
            />
          </div>

          {/* Marathon Start Date */}
          <div>
            <label className="block font-medium text-white mb-1">
              Marathon Start Date
            </label>
            <DatePicker
              selected={marathonStartDate}
              onChange={(date) => setMarathonStartDate(date)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholderText="Select a date"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block font-medium text-white mb-1">
              Location
            </label>
            <input
              type="text"
              name="location"
              placeholder="Location"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Running Distance */}
          <div>
            <label className="block font-medium text-white mb-1">
              Running Distance
            </label>
            <select
              name="category"
              className="w-full border bg-base-100 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select distance</option>
              <option value="25k">25k</option>
              <option value="10k">10k</option>
              <option value="3k">3k</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium text-white mb-1">
              Description
            </label>
            <textarea
              rows="4"
              name="description"
              placeholder="Write description"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Marathon Image */}
          <div>
            <label className="block font-mediumtext-white mb-1">
              Marathon Image
            </label>
            <input
              type="text"
              name="photo"
              placeholder="PhotoURL"
              className="w-full border border-gray-300 rounded-md px-4 py-2 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-white file:bg-blue-500 hover:file:bg-blue-600"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-2 rounded-md transition-all duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMarathon;
