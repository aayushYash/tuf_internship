import React from "react";

import Header from "../components/Headers";
import Title from "../components/Title";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="pt-5 flex flex-col items-center  w-full">

      <div className="container h-fit py-4 px-5 mt-[50px] justify-self-center place-self-center z-10 text-center mx-auto">
        <h1 className="text-white  text-[46px] xs:text-[22px] font-dmSans text-center font-bold">
          Gear Up for <span className="text-[#d41f30]"> Success: </span> Your
          Ultimate Preparation Hub!
        </h1>
        <span class="text-[#7A7A7A] font-medium md:text-[16px] text-[12px] text-center  mt-1">
          Navigate Your Learning Adventure: Explore DSA, Master CS Concepts,
          Design Systems, Hone Competitive Skills, and Ace Interviews
          Effortlessly
        </span>
      </div>

      <div class="border max-w-[1024px] w-full  border-zinc-800 bg-[#191919] lg:px-12 lg:py-8 px-6 py-6 rounded-2xl flex md:flex-row flex-col justify-between items-center mt-[65px] mx-auto">
        <div class="flex md:flex-row flex-col items-center gap-x-3">
          <div class="bg-[#FFF9EB] px-2 py-8 rounded-3xl">
            <svg
              width="78"
              height="34"
              viewBox="0 0 78 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_803_3230)">
                <path
                  d="M0 10.9477H7.66113L4.75143 26H10.8853L13.565 10.9477H21.0611L21.64 8H0.58366L0 10.9477Z"
                  fill="black"
                ></path>
                <path
                  d="M23.5761 8L21.1914 21.4717L24.9171 26H41.3113L44.4408 8H38.4422L35.797 23.0044H28.3448L27.1532 21.5463L29.4628 8H23.5761Z"
                  fill="black"
                ></path>
                <path
                  d="M43.3301 26H49.2379L50.1947 19.983H65.1454L65.7392 17H50.7565L51.4489 12.4678L53.1983 10.9124H60.8219L60.2281 13.9911H66.2016L67.2578 8H50.9208L45.6733 12.5008L43.3301 26Z"
                  fill="black"
                ></path>
                <path
                  d="M77.4479 13.9032H74.2495L73.6252 17.0353H70.7108L71.3351 13.9032H68.1367L68.6852 11.1321H71.8836L72.5095 8H75.4239L74.7995 11.1321H77.9979L77.4479 13.9032Z"
                  fill="#D41F30"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_803_3230">
                  <rect width="77.9979" height="34" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
          <div class="flex flex-col md:items-start items-center justify-center">
            <p class="font-medium text-white text-center md:text-[18px] text-[14px] md:mt-0 mt-4">
              Elevate Your Learning Journey with TUF+ Course
            </p>
            <p class="text-[#7A7A7A] text-center font-medium md:text-[16px] text-[12px] md:mt-0 mt-2">
              Curated learning, approach-wise solutions, personalized
            </p>
            <p class="text-[#7A7A7A] text-center font-medium md:text-[16px] text-[12px]">
              roadmaps, expert doubt assistance, and more!
            </p>
          </div>
        </div>
        <Link to={'/learn'} >
        <a
          class="rounded-full lg:text-[16px] text-[14px] lg:px-8 px-6 py-2 md:mt-0 mt-4 lg:py-3 bg-red-600  text-white hover:bg-[#d41f30]"
          href="/learn"
        >
          Start Preparation
        </a>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
