import React from "react";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { GrContactInfo } from "react-icons/gr";
import DownArrow from "../components/DownArrow.tsx";

function Home() {
  return (
    <section
      id="home"
      className="flex flex-col items-center min-h-svh relative"
    >
      <div className="my-auto mx-auto items-center justify-between">
        <div className="flex flex-col space-y-5 max-w-prose text-center">
          <h1 className="text-slate-400 font-semibold text-7xl">
            IBRAHIM{" "}
            <span className="bg-gradient-to-r from-blue-800 to-blue-500 inline-block text-transparent bg-clip-text">
              OZKAN
            </span>
          </h1>
          <p className="text-slate-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the rel
          </p>
          <div className="flex items-center justify-center space-x-9">
            <button className="flex items-center bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
              <FaGithubSquare className="mr-1" />
              Github
            </button>
            <button className="flex items-center bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
              <FaLinkedin className="mr-1" />
              Linkedin
            </button>
            <button className="flex items-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              <GrContactInfo className="mr-1" />
              Resume
            </button>
          </div>
        </div>
      </div>
      <button
        className="absolute bottom-2 right-1/2 rounded-full w-10 h-10 p-2 items-center flex justify-center bg-[#1d2840]"
        onClick={() =>
          document
            .getElementById("aboutme")
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        <DownArrow color="#111827" />
      </button>
    </section>
  );
}

export default Home;
