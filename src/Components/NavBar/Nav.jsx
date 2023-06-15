import React from "react";

const Nav = () => {
  return (
    <div className="flex justify-between items-center w-[85%] m-auto mt-10">
      <h1 className="font-extrabold text-purple-600 text-3xl">
        JOB<span className="font-normal">HUNT</span>
      </h1>
      <div>
        <ol className="flex gap-5 h-6 text-gray-500">
          <li>Jobs</li>
          <li>Companies</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Login</li>
          <li>Register</li>
        </ol>
      </div>
    </div>
  );
};

export default Nav;
