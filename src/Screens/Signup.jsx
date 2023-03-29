import React, { useState } from "react";

function Signup() {
  const [steps, setSteps] = useState(1);
  console.log(steps);
  return (
    <>
      <div className="bg-[url('https://source.unsplash.com/qDbaQGEwPtI/2400x1823')]">
        <div
          className="form-wrapper 
         min-h-screen
         [ p-4 md:p-6 lg:p-8 ]
         [ flex justify-center items-center ]"
        >
          {steps === 1 ? (
            <form
              className="signup-form
               max-w-2xl
               rounded-2xl
               text-[#1A2421]
               backdrop-blur-lg
               [ p-8 md:p-10 lg:p-10 ]
               [ bg-gradient-to-b from-white/60 to-white/30 ]
               [ border-[1px] border-solid border-white border-opacity-30 ]
               [ shadow-black/70 shadow-2xl ]"
            >
              <h1 className="mb-2 uppercase font-bold [ text-xl md:text-2xl lg:text-2xl ]">
                Company / Individual Registration
              </h1>
              <div className="mb-5 ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-arrow-right mr-2"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
                1/2 Step
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative mb-2" data-te-input-wrapper-init>
                  <label
                    htmlFor="countries"
                    className="form-label relative text-black/50 focus-within:text-[#333] block mb-4"
                  >
                    <select
                      id="countries"
                      className="focus:ring-blue-500 focus:border-blue-500 p-2.5
                  block w-full rounded-lg leading-none focus:outline-none placeholder-black/50 
                    [ transition-colors duration-200 ] 
                    [ py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 pl-12 ] 
                    [ bg-black/20 focus:bg-black/25 ] 
                    [ text-[#333] focus:text-black ]
                  "
                      defaultValue={"DEFAULT"}
                    >
                      <option value="DEFAULT" disabled>
                        Register As
                      </option>
                      <option value="client">Client</option>
                      <option value="reseller">Reseller</option>
                    </select>
                  </label>
                </div>
                <div className="relative mb-2" data-te-input-wrapper-init>
                  <label
                    htmlFor="namecompany"
                    className="form-label relative text-black/50 focus-within:text-[#333] block mb-4"
                  >
                    <input
                      className="block w-full rounded-lg leading-none focus:outline-none placeholder-black/50 
                    [ transition-colors duration-200 ] 
                    [ py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 pl-12 ] 
                    [ bg-black/20 focus:bg-black/25 ] 
                    [ text-[#333] focus:text-black ]"
                      type="text"
                      name="password"
                      id="namecompany"
                      placeholder="Name Of Company / Individual"
                    />
                  </label>
                </div>
              </div>
              {/* second row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative mb-2" data-te-input-wrapper-init>
                  <label
                    htmlFor="nature"
                    className="form-label relative block mb-4 text-black/50 focus-within:text-[#333]"
                  >
                    <select
                      id="countries"
                      className="focus:ring-blue-500 focus:border-blue-500 p-2.5
                  block w-full rounded-lg leading-none focus:outline-none placeholder-black/50 
                    [ transition-colors duration-200 ] 
                    [ py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 pl-12 ] 
                    [ bg-black/20 focus:bg-black/25 ] 
                    [ text-[#333] focus:text-black ]
                  "
                      defaultValue={"DEFAULT"}
                    >
                      <option value="DEFAULT" disabled>
                        Nature Of Business
                      </option>
                      <option value="utilities">Utilities</option>
                      <option value="others">Other Service</option>
                      <option value="insurance">Insurance</option>
                    </select>
                  </label>
                </div>
                <div className="relative mb-2" data-te-input-wrapper-init>
                  <label
                    htmlFor="location"
                    className="form-label relative text-black/50 focus-within:text-[#333] block mb-4"
                  >
                    <input
                      className="block w-full rounded-lg leading-none focus:outline-none placeholder-black/50 
                    [ transition-colors duration-200 ] 
                    [ py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 pl-12 ] 
                    [ bg-black/20 focus:bg-black/25 ] 
                    [ text-[#333] focus:text-black ]"
                      type="text"
                      name="location"
                      id="location"
                      placeholder="Business Location"
                    />
                  </label>
                </div>
              </div>
              {/* third row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative mb-2" data-te-input-wrapper-init>
                  <label
                    htmlFor="phone"
                    className="form-label relative block mb-4 text-black/50 focus-within:text-[#333]"
                  >
                    <input
                      className="form-input 
                    block w-full rounded-lg leading-none focus:outline-none placeholder-black/50 
                    [ transition-colors duration-200 ] 
                    [ py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 pl-12 ] 
                    [ bg-black/20 focus:bg-black/25 ] 
                    [ text-[#333] focus:text-black ]"
                      type="number"
                      name="phone"
                      id="phone"
                      placeholder="Company / Individual Phone number"
                    />
                  </label>
                </div>
                <div className="relative mb-2" data-te-input-wrapper-init>
                  <label
                    htmlFor="momo"
                    className="form-label relative block mb-4 text-black/50 focus-within:text-[#333]"
                  >
                    <input
                      className="form-input 
                    block w-full rounded-lg leading-none focus:outline-none placeholder-black/50 
                    [ transition-colors duration-200 ] 
                    [ py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 pl-12 ] 
                    [ bg-black/20 focus:bg-black/25 ] 
                    [ text-[#333] focus:text-black ]"
                      type="number"
                      name="momo"
                      id="momo"
                      placeholder="Mobile Money Number"
                    />
                    <span className="text-red-700">
                      (Credit purchase can be done on this number or changed
                      upon credit purchasing)
                    </span>
                  </label>
                </div>
              </div>
              {/* fourth row */}

              <div className="grid grid-cols-2 gap-4">
                <div className="relative mb-2" data-te-input-wrapper-init>
                  <label
                    htmlFor="file_input"
                    className="form-label relative block mb-4 text-black/50 focus-within:text-[#333]"
                  >
                    <input
                      className="file:-my-[1.15rem] file:-mx-1 py-[1.15rem] min-w-0 relative
                      file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[1.15rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.60rem]  hover:file:bg-neutral-200
                      block w-full cursor-pointer rounded-lg leading-none focus:outline-none placeholder-black/50 
                    [ transition-colors duration-200 ] 
                    [  pr-3  md:pr-4  lg:pr-4  ] 
                    [ bg-black/20 focus:bg-black/25 ] 
                    [ text-[#333] focus:text-black ]
                     "
                      id="file_input"
                      type="file"
                    />

                    {/* <input
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
                    /> */}
                  </label>
                </div>
                <div className="relative mb-2" data-te-input-wrapper-init>
                  <label
                    htmlFor="username"
                    className="form-label relative text-black/50 focus-within:text-[#333] block mb-4"
                  >
                    <input
                      className="block w-full rounded-lg leading-none focus:outline-none placeholder-black/50 
                    [ transition-colors duration-200 ] 
                    [ py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 pl-12 ] 
                    [ bg-black/20 focus:bg-black/25 ] 
                    [ text-[#333] focus:text-black ]"
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Preferred Username "
                    />
                  </label>
                </div>
              </div>

              <button
                type="button"
                className="form-input w-full rounded-lg font-bold text-white focus:outline-none
                   [ p-3 md:p-4 lg:p-4 ] 
                   [ transition-colors duration-500 ] 
                   [ bg-blue-800 hover:bg-blue-700 ]"
                onClick={() => setSteps(2)}
              >
                Continue
              </button>
            </form>
          ) : (
            steps === 2 && (
              <form
                className="signup-form
             max-w-full
             rounded-2xl
             text-[#1A2421]
             backdrop-blur-lg
             [ p-8 md:p-10 lg:p-10 ]
             [ bg-gradient-to-b from-white/60 to-white/30 ]
             [ border-[1px] border-solid border-white border-opacity-30 ]
             [ shadow-black/70 shadow-2xl ]"
              >
                <h1 className="mb-2 uppercase font-bold [ text-xl md:text-2xl lg:text-2xl ]">
                  Company / Individual Registration
                </h1>
                <div className="mb-5 ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-arrow-right mr-2"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                  2/2 Step
                </div>
                <label className="form-label flex text-black/80 focus-within:text-[#333]  mb-4 uppercase justify-center underline bold">
                  Contact Person Information
                </label>

                <div className="grid grid-cols-2 gap-4">
                  <div className="relative mb-2" data-te-input-wrapper-init>
                    <label
                      htmlFor="personalname"
                      className="form-label relative block mb-4 text-black/50 focus-within:text-[#333]"
                    >
                      <input
                        className="form-input 
                  block w-full rounded-lg leading-none focus:outline-none placeholder-black/50 
                  [ transition-colors duration-200 ] 
                  [ py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 pl-12 ] 
                  [ bg-black/20 focus:bg-black/25 ] 
                  [ text-[#333] focus:text-black ]"
                        type="text"
                        name="personalname"
                        id="personalname"
                        placeholder="Contact Personal Name"
                      />
                    </label>
                  </div>

                  <div className="relative mb-2" data-te-input-wrapper-init>
                    <label
                      htmlFor="email"
                      className="form-label relative block mb-4 text-black/50 focus-within:text-[#333]"
                    >
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
                  </div>
                </div>
                {/* second row  */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative mb-2" data-te-input-wrapper-init>
                    <label
                      htmlFor="number"
                      className="form-label relative text-black/50 focus-within:text-[#333] block mb-4"
                    >
                      <input
                        className="block w-full rounded-lg leading-none focus:outline-none placeholder-black/50 
                  [ transition-colors duration-200 ] 
                  [ py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 pl-12 ] 
                  [ bg-black/20 focus:bg-black/25 ] 
                  [ text-[#333] focus:text-black ]"
                        type="number"
                        name="number"
                        id="number"
                        placeholder="Phone Number"
                      />
                      <span className="text-red-700">
                        (All OTPs for verification will be sent to this number)
                      </span>
                    </label>
                  </div>
                  <div className="relative mb-2" data-te-input-wrapper-init>
                    <label
                      htmlFor="fileinput"
                      className="form-label relative block mb-4 text-black/50 focus-within:text-[#333]"
                    >
                      <input
                        className="file:-my-[1.15rem] file:-mx-1 py-[1.15rem] min-w-0 relative
                      file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[1.15rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.60rem]  hover:file:bg-neutral-200
                      block w-full cursor-pointer rounded-lg leading-none focus:outline-none placeholder-black/50 
                    [ transition-colors duration-200 ] 
                    [  pr-3  md:pr-4  lg:pr-4  ] 
                    [ bg-black/20 focus:bg-black/25 ] 
                    [ text-[#333] focus:text-black ]
                     "
                        id="fileinput"
                        type="file"
                      />

                      {/* <input
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
                    /> */}
                    </label>
                  </div>
                </div>

                <button
                  type="button"
                  className="form-input w-full rounded-lg font-bold text-white focus:outline-none
                 [ p-3 md:p-4 lg:p-4 ] 
                 [ transition-colors duration-500 ] 
                 [ bg-blue-800 hover:bg-blue-700 ]"
                  onClick={() => setSteps(1)}
                >
                  Submit
                </button>
              </form>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default Signup;
