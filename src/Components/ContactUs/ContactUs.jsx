import React, { useState } from "react";

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We'll get back to you soon.");
    // You can integrate with EmailJS, Web3Forms, or your backend here
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="px-4 py-12 bg-base-100 text-base-content min-h-[500px]">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Contact info */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            Contact Us
          </h2>
          <p>
            Email:{" "}
            <span className="link link-hover text-primary">
              wasefudvash@gmail.com
            </span>
          </p>
          <p>Phone: +880-1234-567890</p>
          <p>Location: Dhaka, Bangladesh</p>
        </div>

        {/* Contact form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="input input-bordered w-full"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="input input-bordered w-full"
            required
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="textarea textarea-bordered w-full"
            rows="5"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary w-full md:w-auto">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
