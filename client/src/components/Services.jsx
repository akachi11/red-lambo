import React from "react";
import lambo from "../images/lambo.png";
import { RiNumber1, RiNumber2, RiNumber3  } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex md:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-2">
          About
          <br />
          <span className="rubik-font bg-gradient-to-r from-[#f70c1e] to-[#530018] inline-block text-transparent bg-clip-text">RED LAMBO</span>
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          Red Lambo is the official car meme coin cruising on the Avalanche blockchain. <br />
          Our strong community is steering through market turns and accelerating towards collective prosperity. <br />
          Ready for the ride? Hold $LAMBO with your seat belt fastened! <br />
          Don't ask when $LAMBO; own $LAMBO!
        </p>
      </div>

      <div className="flex-1 flex flex-col text-white justify-start">
        <img src={lambo} alt="" />
        <div className="text-left pt-[2rem] flex">
          <RiNumber1 className="bg-[#530018] p-1.5 mr-[1rem] text-[1.8rem] rounded-full" />
          <span>Symbol: LAMBO</span>
        </div>
        <div className="text-left pt-[2rem] flex">
          <RiNumber2 className="bg-[#530018] p-1.5 mr-[1rem] text-[1.8rem] rounded-full" />
          <span>Total Supply: 1 Trillion LAMBO</span>
        </div>
        <div className="text-left pt-[2rem] flex">
          <RiNumber3 className="bg-[#530018] p-1.5 mr-[1rem] text-[1.8rem] rounded-full" />
          <span>Network: AVAX</span>
        </div>
      </div>
    </div>
  </div>
);

export default Services;