import React from "react";
import BlogImg from "../assets/test.jpg";

function BlogCard() {
  return (
    <div className="bg-gray-800 rounded-lg max-w-sm shadow-lg">
      <img src={BlogImg} alt="" className="rounded-t-lg" />
      <div className="p-3">
        <h1 className="text-slate-300 text-3xl font-bold">Blog Title 1</h1>
        <p className="text-slate-400 mt-2">
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <button className="bg-gray-700 hover:bg-gray-600 text-slate-300 font-bold py-2 px-4 rounded mt-3">
          Read More
        </button>
      </div>
    </div>
  );
}

export default BlogCard;
