import React from "react";
import { BiTimeFive } from "react-icons/bi";
import Data from "../../CardData/data.json";

const Job = () => {
  return (
    <div className=" w-[85%] m-auto mt-10 p-10 flex gap-6 flex-wrap items-center justify-center">
      {Data.map((data, i) => {
        return (
          <div
            key={i}
            className="group flex flex-col bg-white shadow-2xl w-72 items-center p-5 rounded-xl hover:bg-purple-400 "
          >
            <div className="flex justify-between w-full">
              <div>
                <h1 className="font-bold group-hover:text-white">
                  {data.Pname}
                </h1>
                <p className="font-thin text-gray-500 group-hover:font-bold">
                  {data.country}
                </p>
              </div>
              <div className="flex items-center gap-1 text-gray-600">
                <BiTimeFive />
                <p>{data.time}</p>
              </div>
            </div>

            <hr className="w-full text-black mt-5" />

            <div>
              <p className="text-center w-full mt-5 font-semibold text-gray-500 group-hover:text-black group-hover:font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti ducimus iste.
              </p>
              <div className="flex items-center gap-3 mt-5">
                <img src={data.img} alt="comp. logo" className="w-10 h-10" />
                <h2 className="font-semibold group-hover:text-white">
                  {data.Cname}
                </h2>
              </div>
            </div>

            <div className="mt-5 w-full">
              <button className="w-full h-12 bg-purple-500 rounded-md text-white font-semibold group-hover:text-black group-hover:bg-white">
                Apply Now
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Job;
