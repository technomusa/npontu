import React from "react";
import { Link } from "react-router-dom";
import loginLogo from "../assets/loginback03.jpg";

function PasswordChange() {
  return (
    <div
      className=" bg-cover "
      style={{ backgroundImage: `url(${loginLogo})` }}
    >
      <div className=" bg-cover absolute pl-11 h-1/6 w-2/12 ">
        <img alt="hero" src={deywuroLogo} />
      </div>
      <div
        className="form-wrapper 
     min-h-screen
     [ p-4 md:p-6 lg:p-8 ]
     [ flex justify-center items-center ]"
      >
        <form
          className="signup-form
           max-w-sm
           rounded-2xl
           text-[#1A2421]
           backdrop-blur-sm
           [ p-8 md:p-10 lg:p-10 ]
           [ bg-gradient-to-b from-white/60 to-white/30 ]
           [ border-[1px] border-solid border-white border-opacity-30 ]
           [ shadow-black/70 shadow-2xl ]"
        >
          <h1 className="mb-6 uppercase font-bold [ text-xl md:text-2xl lg:text-2xl ]">
            Change Password
          </h1>
          <p className="mb-6 [ text-sm text-[#1A2421]/70 text-opacity-50 ]">
            Reset password to have access to the platform
          </p>

          <label
            for="password"
            className="form-label relative text-black/50 focus-within:text-[#333] block mb-4"
          >
            <svg
              className="label-icon 
              transition pointer-events-none
              [ w-6 h-6 ] 
              [ absolute top-1/2 left-3 ] 
              [ transform -translate-y-1/2 ]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <g fill="none">
                <path d="M0 0h24v24H0V0z" />
                <path d="M0 0h24v24H0V0z" opacity=".87" />
              </g>
              <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
            </svg>

            <input
              className="block w-full rounded-lg leading-none focus:outline-none placeholder-black/50 
                [ transition-colors duration-200 ] 
                [ py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 pl-12 ] 
                [ bg-black/20 focus:bg-black/25 ] 
                [ text-[#333] focus:text-black ]"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </label>
          <label
            for="cpassword"
            className="form-label relative text-black/50 focus-within:text-[#333] block mb-4"
          >
            <svg
              className="label-icon 
              transition pointer-events-none
              [ w-6 h-6 ] 
              [ absolute top-1/2 left-3 ] 
              [ transform -translate-y-1/2 ]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <g fill="none">
                <path d="M0 0h24v24H0V0z" />
                <path d="M0 0h24v24H0V0z" opacity=".87" />
              </g>
              <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
            </svg>

            <input
              className="block w-full rounded-lg leading-none focus:outline-none placeholder-black/50 
                [ transition-colors duration-200 ] 
                [ py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 pl-12 ] 
                [ bg-black/20 focus:bg-black/25 ] 
                [ text-[#333] focus:text-black ]"
              type="password"
              name="cpassword"
              id="cpassword"
              placeholder="Comfirm Password"
            />
          </label>
          <Link to="/deywuro">
            <button
              className="form-input w-full rounded-lg font-bold text-white focus:outline-none
               [ p-3 md:p-4 lg:p-4 ] 
               [ transition-colors duration-500 ] 
               [ bg-blue-800 hover:bg-blue-700 ]"
            >
              Submit
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default PasswordChange;
