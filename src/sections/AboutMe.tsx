import React from "react";
import aboutmepng from "../assets/aboutme.svg";

function AboutMe() {
  return (
    <section
      id="aboutme"
      className="flex flex-col justify-center items-center min-h-svh"
    >
      <div className="flex items-center justify-center gap-x-20">
        <div className="flex flex-col space-y-5">
          <h1 className="text-slate-400 font-semibold text-7xl">
            About{" "}
            <span className="bg-gradient-to-r from-blue-800 to-blue-500 inline-block text-transparent bg-clip-text">
              Me
            </span>
          </h1>
          <p className="text-slate-400 text-left max-w-md">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the rel
          </p>
        </div>
        <div className="w-1/3">
          <img className="" src={aboutmepng} alt="" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
