import React from "react";
import BlogCard from "../components/BlogCard.tsx";
function Blog() {
  return (
    <section className="min-h-svh">
      <div className="mx-auto flex flex-col my-20 max-w-6xl items-center justify-center">
        <h1 className="text-slate-400 font-semibold text-7xl">
          Personal{" "}
          <span className="bg-gradient-to-r from-blue-800 to-blue-500 inline-block text-transparent bg-clip-text">
            Blog
          </span>
        </h1>
        <div className="flex space-x-5 mt-10">
          <BlogCard />
        </div>
      </div>
    </section>
  );
}

export default Blog;
