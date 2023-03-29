import React from "react";
import { Link } from "react-router-dom";
import deywuroLogo from "../../public/deywuro_too.png";
import loginLogo from "../assets/loginback03.jpg";

function Deywuro() {
  return (
    <>
      {/* <div class="w-screen h-screen bg-gray-200">
        <div class=" container mx-auto flex items-center justify-center flex-col">
          <img
            class="w-full h-screen object-cover object-center"
            alt="hero"
            src={loginLogo}
          />
        </div>
      </div> */}

      <div
        className=" bg-cover relative bg-[url('../assets/loginback03.jpg')]"
        // style={{ backgroundImage: `url(${loginLogo})` }}
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
              Login To Account
            </h1>
            <p className="mb-6 [ text-sm text-[#1A2421]/70 text-opacity-50 ]">
              Enter a valid email email &amp; password in the fields below to
              get started.
            </p>

            <label
              for="email"
              className="form-label relative block mb-4 text-black/50 focus-within:text-[#333]"
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
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M12 1.95c-5.52 0-10 4.48-10 10s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57v-1.43c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57v-1.43c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
              </svg>
              <input
                className="form-input 
                    block w-full rounded-lg leading-none focus:outline-none placeholder-black/50 
                    [ transition-colors duration-200 ] 
                    [ py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 pl-12 ] 
                    [ bg-black/20 focus:bg-black/25 ] 
                    [ text-[#333] focus:text-black ]"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
            </label>

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

            <button
              className="form-input w-full rounded-lg font-bold text-white focus:outline-none
                   [ p-3 md:p-4 lg:p-4 ] 
                   [ transition-colors duration-500 ] 
                   [ bg-blue-800 hover:bg-blue-700 ]"
            >
              Continue
            </button>

            <div className="form-footer mt-8 flex justify-around text-center">
              <Link className="w-max p-3 -ml-3" to="/signup">
                <span class="text-sm tracking-wide">Create new account</span>
              </Link>
              <Link className="w-max p-3 -ml-3" to="/forgotten">
                <span class="text-sm tracking-wide text-red-700">
                  Forgotten password
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Deywuro;
