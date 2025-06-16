import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import axios from "axios";
import MarathonCard from "../MarathonCard/MarathonCard";
import Faq from "../Faq/Faq";
import UpcomingMarathon from "../UpcomingMarathon/UpcomingMarathon";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [faq, setFaq] = useState([]);
  const [marathons, setMarathons] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  console.log(upcoming);

  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
    fetch("faq.json")
      .then((res) => res.json())
      .then((data) => setFaq(data));

    axios("http://localhost:3000/featuredmarathon")
      .then((res) => setMarathons(res.data))
      .catch((err) => console.log(err));

    axios("http://localhost:3000/upcomingmarathon")
      .then((res) => {
        // console.log(res.data);

        setUpcoming(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Banner></Banner>
      <MarathonCard marathons={marathons}></MarathonCard>

      {upcoming && <UpcomingMarathon upcoming={upcoming}></UpcomingMarathon>}

      <Blog blogs={blogs}></Blog>
      <Faq faq={faq}></Faq>
    </div>
  );
};

export default Home;
