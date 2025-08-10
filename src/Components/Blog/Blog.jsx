import React from "react";
import BlurText from "../BlurText/BlurText";

const Blog = ({ blogs }) => {
  return (
    <div className="mt-10 mb-20">
      <BlurText
        text="Blogs"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-primary text-xl md:text-3xl lg:text-5xl font-bold my-4"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-2 lg:gap-4 mb-4">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-base-200 rounded-xl shadow p-5 hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={blog.photoUrl}
                alt={blog.username}
                className="w-14 h-14 rounded-full object-center object-cover border"
              />
              <div>
                <div className="font-semibold">
                  <BlurText
                    text={blog.username}
                    delay={150}
                    animateBy="words"
                    direction="top"
         
                  />
                </div>
                <p className="text-sm text-gray-500">Rating: {blog.rating}⭐</p>
              </div>
            </div>
            <div className="text-white">
              <BlurText
                text={blog.comment}
                delay={150}
                animateBy="words"
                direction="top"
              
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
