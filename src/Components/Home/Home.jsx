import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import axios from "axios";
import MarathonCard from "../MarathonCard/MarathonCard";
import Faq from "../Faq/Faq";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [faq, setFaq] = useState([]);
  const [marathons, setMarathons] = useState([]);
  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
    fetch("faq.json")
      .then((res) => res.json())
      .then((data) => setFaq(data));

    axios("http://localhost:3000/upcomingmarathon")
      .then((res) => setMarathons(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Banner></Banner>
      <MarathonCard marathons={marathons}></MarathonCard>
      <Blog blogs={blogs}></Blog>
      <Faq faq={faq}></Faq>
    </div>
  );
};

export default Home;
