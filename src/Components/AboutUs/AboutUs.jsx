import React from "react";

const AboutUs = () => {
  return (
    <section className="px-4 py-12 bg-base-200 text-base-content min-h-[500px]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
          About Pace Pulse
        </h2>
        <p className="text-base md:text-lg mb-4">
          Pace Pulse is your go-to platform for organizing and managing marathon
          events. Whether you're hosting a local charity run or a national-level
          race, Pace Pulse simplifies everything—from event listing to
          participant registration.
        </p>
        <p className="text-sm md:text-base text-gray-600">
          Built with modern web technologies, Pace Pulse delivers a smooth
          experience for organizers and runners alike. Join us in promoting
          health, community, and energy.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
