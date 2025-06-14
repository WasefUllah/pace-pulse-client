import axios from "axios";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";

const UpdateMarathon = ({ marathonId, refresh, setRefresh }) => {
  const [marathon, setMarathon] = useState({});
  //   const [refresh, setRefresh] = useState(false);
  const [startRegDate, setStartRegDate] = useState(null);
  const [endRegDate, setEndRegDate] = useState(null);
  const [marathonStartDate, setMarathonStartDate] = useState(null);
  const [category, setCategory] = useState(null);
  useEffect(() => {
    axios(`http://localhost:3000/marathons/${marathonId}`)
      .then((res) => {
        setMarathon(res.data);
        setStartRegDate(marathon.startRegDate);
        setEndRegDate(marathon.endRegDate);
        setMarathonStartDate(marathon.marathonStartDate);
      })
      .catch((err) => console.log(err));
  }, [marathonId]);

  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const marathonData = Object.fromEntries(formData.entries());

    marathonData.startRegDate = startRegDate;
    marathonData.endRegDate = endRegDate;
    marathonData.marathonStartDate = marathonStartDate;

    axios
      .put(`http://localhost:3000/marathon/${marathonId}`, marathonData)
      .then((response) => {
        console.log(response);

        if (response?.data?.modifiedCount) {
          Swal.fire({
            title: "Marathon updated successfully!",
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
          Update Marathon
        </h2>

        <form onSubmit={handleForm} className="grid grid-cols-1 gap-6">
          <div className="flex flex-between items-start gap-2">
            <div>
              {/* Marathon Title */}
              <div>
                <label className="block font-medium text-white mb-1">
                  Marathon Title
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Marathon title"
                  defaultValue={marathon.title}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  defaultValue={marathon.location}
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
                  value={category || marathon.category}
                  required
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full border bg-base-100 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select distance</option>
                  <option value="25k">25k</option>
                  <option value="10k">10k</option>
                  <option value="3k">3k</option>
                </select>
              </div>
            </div>

            <div>
              {/* Start Registration Date */}
              <div>
                <label className="block font-medium text-white mb-1">
                  Start Registration Date
                </label>
                <DatePicker
                  //   selected={startRegDate}
                  onChange={(date) => setStartRegDate(date)}
                  selected={startRegDate || marathon.startRegDate}
                  electedDates={marathon.startRegDate}
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
                  selected={endRegDate || marathon.endRegDate}
                  onChange={(date) => setEndRegDate(date)}
                  selectedDates={marathon.endRegDate}
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
                  selected={marathonStartDate || marathon.marathonStartDate}
                  onChange={(date) => setMarathonStartDate(date)}
                  selectedDates={marathon.marathonStartDate}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholderText="Select a date"
                />
              </div>
            </div>
          </div>
          <div>
            {/* Description */}
            <div>
              <label className="block font-medium text-white mb-1">
                Description
              </label>
              <textarea
                rows="4"
                name="description"
                placeholder="Write description"
                defaultValue={marathon.description}
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
                defaultValue={marathon.photo}
                className="w-full border border-gray-300 rounded-md px-4 py-2 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-white file:bg-blue-500 hover:file:bg-blue-600"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
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

export default UpdateMarathon;
