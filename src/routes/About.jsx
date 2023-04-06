import React, { useState } from "react";
import { Link } from "react-router-dom";
import Contact from "../components/Contact";
import Team from "../components/Team";
import Footer from "../layouts/Footer";

export default function About() {
    const [show, setShow] = useState(false); 
  return (
    <>
        <div className="lg:px-6 xl:px-0 bg-white z-50">
        <div className="container mx-auto relative z-20">
          <nav className="w-full absolute">
            <div className="hidden lg:flex w-full f-f-p justify-between items-center py-6 relative">
              <div className="w-2/3">
                <img
                  src="/image/logo.png"
                  alt=""
                  className="w-[200px] h-full"
                />
              </div>
              <div className="md:w-1/2 xl:w-1/3">
                <ul className="flex justify-evenly w-full items-center text-gray-600">
                  <li className="pb-1">
                    <Link
                      to="/"
                      className="btn btn-ghost normal-case text-3xl text-black"
                    >
                      Home
                    </Link>
                  </li>
                  <li className=" pb-1">
                    <Link
                      to="/services"
                      className="btn btn-ghost normal-case text-3xl text-black"
                    >
                      Services
                    </Link>
                  </li>
                  <li className="border-b-4 border-[#ffc58a] pb-1">
                    <Link
                      to="/about"
                      className="btn btn-ghost normal-case text-3xl text-black"
                    >
                      About
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/*Nav responsive */}
          <nav className="lg:hidden">
            <div
              className={
                show
                  ? "bg-white flex justify-between items-center px-4"
                  : "flex justify-between items-center px-4"
              }
            >
              <div>
                <img
                  src="/image/logo.png"
                  alt=""
                  className="w-[130px] h-[110px] md:h-[200px] md:w-[200px]"
                />
              </div>
              <div className=" flex items-center">
                {show && (
                  <ul
                    id="list"
                    className=" p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-24 md:mt-16 h-[100vh] z-50"
                  >
                    <li className="flex cursor-pointer text-gray-600 text-4xl justify-center leading-3 tracking-normal mt-20 py-2 hover:text-[#ffc58a] focus:text-[#ffc58a] focus:outline-none">
                      <Link to="/">
                        <span className="ml-2 font-bold">Home</span>
                      </Link>
                    </li>
                    <li
                      className="flex flex-col cursor-pointer text-gray-600  text-4xl leading-3 tracking-normal mt-20 py-2 hover:text-[#ffc58a] focus:text-[#ffc58a] focus:outline-none items-center justify-center"
                      onclick="dropdownHandler(this)"
                    >
                      <Link to="/services">
                        <span className="ml-2 font-bold ">Services</span>
                      </Link>
                    </li>
                    <li className="flex cursor-pointer text-gray-600 text-4xl justify-center leading-3 mt-20 tracking-normal py-2 hover:text-[#ffc58a]  items-center focus:text-[#ffc58a] focus:outline-none">
                      <Link to="/about">
                        <span className="ml-2 font-bold">About</span>
                      </Link>
                    </li>
                  </ul>
                )}
                <div className="xl:hidden" onClick={() => setShow(!show)}>
                  {show ? (
                    <div id="close" className=" close-m-menu">
                      <svg
                        aria-label="Close"
                        xmlns="http://www.w3.org/2000/svg"
                        width={44}
                        height={44}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-slate-500"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <line x1={18} y1={6} x2={6} y2={18} />
                        <line x1={6} y1={6} x2={18} y2={18} />
                      </svg>
                    </div>
                  ) : (
                    <svg
                      id="open"
                      aria-haspopup="true"
                      aria-label="Main Menu"
                      xmlns="http://www.w3.org/2000/svg"
                      className="show-m-menu icon icon-tabler icon-tabler-menu text-slate-500 mb-6"
                      width={48}
                      height={48}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <line x1={4} y1={8} x2={20} y2={8} />
                      <line x1={4} y1={16} x2={20} y2={16} />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/** */}
      <Team/>
      <Contact/>
      <Footer/>
    </>
  )
}
