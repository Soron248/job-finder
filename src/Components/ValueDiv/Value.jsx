import React from "react";

const Value = () => {
  return (
    <div className=" w-[85%] m-auto mt-10 p-10 flex gap-10 flex-col">
      <h1 className="text-4xl font-bold w-[600px] ">
        The value that holds us true and to account
      </h1>

      <div className="flex gap-5">
        <div className=" space-y-5 h-fit rounded-md p-5 shadow-2xl hover:bg-pink-400 cursor-pointer">
          <div className="flex justify-between items-center">
            <div className=" w-8 h-8 bg-pink-200 flex justify-center items-center rounded-md">
              <img src="/v1.png" alt="" className="w-6 h-6" />
            </div>
            <h2 className="text-gray-400 font-semibold">Simplicity</h2>
          </div>
          <p className="font-semibold text-justify">
            Things beinf made beautifull simple are at the heart everything we
            do.
          </p>
        </div>

        <div className=" space-y-5 h-fit rounded-md p-5 shadow-2xl hover:bg-red-400 cursor-pointer">
          <div className="flex justify-between items-center">
            <div className=" w-8 h-8 bg-red-300 flex justify-center items-center rounded-md">
              <img src="/v2.png" alt="" className="w-6 h-6" />
            </div>
            <h2 className="text-gray-400 font-semibold">Simplicity</h2>
          </div>
          <p className="font-semibold text-justify">
            We belve in making things better for everyone, even if just by a
            little bit!
          </p>
        </div>

        <div className=" space-y-5 h-fit rounded-md p-5 shadow-2xl hover:bg-green-400 cursor-pointer">
          <div className="flex justify-between items-center">
            <div className=" w-8 h-8 bg-green-200 flex justify-center items-center rounded-md">
              <img src="/v3.png" alt="" className="w-6 h-6" />
            </div>
            <h2 className="text-gray-400 font-semibold">Simplicity</h2>
          </div>
          <p className="font-semibold text-justify">
            We work on the basis of creating trust which can be nurtured through
            outhenticity and transparency
          </p>
        </div>
      </div>

      <div className="w-full h-52 bg-gray-200 rounded-lg flex justify-between items-center px-44">
        <div>
          <h3 className="text-3xl font-bold text-purple-500">
            Ready to switch a career?
          </h3>
          <p className="text-xl font-semibold">Let's get started</p>
        </div>
        <button className="w-52 h-16 rounded-lg text-lg font-semibold border-4 border-purple-400 text-purple-600">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Value;
