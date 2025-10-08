import React from "react";

import { FaAppStoreIos } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import bannerImg from "../../assets/hero.png";

const Banner = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-3">
        <h1 className="text-6xl font-bold text-center">
          We Build <br /> <span className="text-blue-500 ">Productive</span>{" "}
          Apps
        </h1>
        <p className="text-[#627382] text-center max-w-5xl">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className="flex gap-5">
          <a
            className="btn btn-outline"
            href="https://play.google.com/store/games?hl=en"
            target="_blank"
          >
            <IoLogoGooglePlaystore />
            Google Play
          </a>
          <a
            className="btn btn-outline"
            href="https://www.apple.com/app-store/"
            target="_blank"
          >
            <FaAppStoreIos></FaAppStoreIos> App Store
          </a>
        </div>
      </div>
      {/* Banner image */}
      <div className="flex justify-center items-center mt-10">
        <img src={bannerImg} alt="A Banner Image" />
      </div>
      {/* Banner State */}
      <div className="bg-[#632EE3] text-white p-[1px]">
        <div className="max-w-[800px] mx-auto  my-2 md:my-5 lg:my-20">
          <h2 className="text-center text-5xl font-bold mb-8">
            Trusted by Millions, Built for You
          </h2>
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="space-y-2 text-center lg:text-left">
              <p>Total Downloads</p>
              <h4 className="font-bold text-5xl">29.6M</h4>
              <p>21% more than last month</p>
            </div>
            <div className="space-y-2 text-center lg:text-left">
              <p>Total Reviews</p>
              <h4 className="font-bold text-5xl">906K</h4>
              <p>46% more than last month</p>
            </div>
            <div className="space-y-2 text-center lg:text-left">
              <p>Active Apps</p>
              <h4 className="font-bold text-5xl">130+</h4>
              <p>31 More Will Launch</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
