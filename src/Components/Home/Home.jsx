import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      <Banner></Banner>
      <Blog blogs={blogs}></Blog>
    </div>
  );
};

export default Home;
