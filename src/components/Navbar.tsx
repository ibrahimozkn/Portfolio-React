import React from "react";
import { CiLogin } from "react-icons/ci";
import { FiUser } from "react-icons/fi";

function Navbar(props: { title: string }) {
  let { title } = props;
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto p-4 flex justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-white font-bold">{title}</h1>
          <div className="space-x-4">
            <a
              href="#home"
              className="px-2 py-3 rounded-md text-sm font-medium text-white bg-gray-900"
            >
              Home
            </a>
            <a
              href="#aboutme"
              className="p-2 rounded-md text-sm font-medium text-gray-400"
            >
              About Me
            </a>
            <a
              href="#projects"
              className="p-2 rounded-md text-sm font-medium text-gray-400"
            >
              Projects
            </a>
            <a
              href="http://"
              className="p-2 rounded-md text-sm font-medium text-gray-400"
            >
              Blog
            </a>
          </div>
        </div>
        <div className="flex space-x-4">
          <button className="text-sm text-gray-400 flex items-center space-x-1">
            <CiLogin className="" />
            <h2>Login</h2>
          </button>
          <button className="text-sm text-gray-400 flex items-center space-x-1">
            <FiUser className="" />
            <h2>Register</h2>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
