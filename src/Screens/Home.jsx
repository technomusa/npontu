import React from "react";
import { Link } from "react-router-dom";
import reactLogo from "../assets/react.svg";

function Home() {
  return (
    <div className="w-screen h-screen text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div class="container mx-auto flex px-3 py-14 items-center justify-center flex-col">
        <img
          class="lg:w-1/6 md:w-4/6 w-5/6 mb-10 object-cover object-center"
          alt="hero"
          src={reactLogo}
        />
        <div class="text-center lg:w-5/12 w-full">
          <h1 className="my-4 text-5xl font-bold leading-tight">
            freelancerandra@gmail.com production-ready frontend project
          </h1>
          <p className="text-2xl mb-8">
            Submiting assignment for UI/UX Designer
          </p>
          <div className="flex justify-center mx-auto">
            <Link to="deywuro">
              <button className="hover:bg-sky-800 hover:text-white bg-white text-gray-800 font-bold rounded  py-4 px-8 capitalize">
                Deywuro
              </button>
            </Link>
            <Link to="kedebah">
              <button className="ml-4 hover:bg-sky-800 hover:text-white bg-white text-gray-800 font-bold rounded  py-4 px-8 capitalize">
                Kedebah ERP
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
