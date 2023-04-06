import React from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <>
      <div className="sm:h-[1000px] h-[300px] w-full pt-10 pl-2 lg:pt-72 md:pl-32">
        <div>
          <strong
            className="text-4xl text-black md:text-[120px]"
            data-aos="fade-down"
            data-aos-duration="2500"
          >
            ACOMP'ASSO
            <br />
            <strong className="text-sm md:text-[30px] font-thin">
              Un reseau pour vous accomppagner
            </strong>
          </strong>
          <br />
          <br />
          <br />
          <label
            tabIndex={0}
            className="hover:bg-white text-xl hover:text-[#de781f] bg-[#de781f] rounded-full p-3 px-10 text-white w-[180px] mt-6 cursor-pointer transition-all"
            onClick={() => navigate("/services")}
            data-aos="fade-down"
            data-aos-duration="2500"
          >
            Je découvre
          </label>
        </div>
      </div>
    </>
  );
}
