import React from "react";
import background from "../background.png";
import "../App.css";

export default function ServiceHero() {
  return (
    <section style={{ backgroundImage: `url(${background})` }}>
      <div className="xl:mx-auto xl:container py-20 md:pt-48  lg 2xl:px-0 px-6">
        <div className="lg:flex items-center justify-between md:px-60">
          <div
            className=" lg:w-1/2 w-full"
            data-aos-duration="2500"
            data-aos="fade-right"
          >
            <h1
              role="heading"
              className="md:text-5xl text-3xl font-bold leading-10 mt-3 text-gray-800"
            >
              Le service et le Marché
            </h1>
            <p
              role="contentinfo"
              className="text-base leading-5 mt-5 text-gray-600"
            >
              Description d'une journée type
            </p>
          </div>
          <div
            className="xl:w-1/2 lg:w-7/12 relative w-full lg:mt-0 mt-12 md:px-8"
            role="list"
          >
            <img
              src="https://i.ibb.co/0n6DSS3/bgimg.png"
              className="absolute w-full -ml-12 mt-24"
              alt="background circle images"
            />
            <div
              data-aos-duration="1500"
              data-aos="fade-right"
              role="listitem"
              className="bg-[#ffc58a] cursor-pointer shadow rounded-lg p-8 relative z-30"
            >
              <div className="md:flex items-center justify-between">
                <h2 className="text-2xl font-semibold leading-6 text-black">
                  Petit Déjeuner
                </h2>
                <p className="text-2xl font-semibold md:mt-0 mt-4 leading-6 text-black">
                  9h
                </p>
              </div>
              <p className="md:w-80 text-base leading-6 mt-4 text-gray-600">
                Rencontre des equipes{" "}
              </p>
              <img src="/image/coffee.png" alt="" className="w-16" />
            </div>
            <div
              role="listitem"
              className="bg-[#ffc58a] cursor-pointer shadow rounded-lg mt-3 flex relative z-30"
              data-aos-duration="2500"
              data-aos="fade-right"
            >
              <div className="w-2.5  h-auto bg-black rounded-tl-md rounded-bl-md" />
              <div className="w-full p-8">
                <div className="md:flex items-center justify-between">
                  <h2 className="text-2xl font-semibold leading-6 text-gray-800">
                    Phase d'introduction de la journée
                  </h2>
                  <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-gray-800">
                    10<span className="font-normal text-base">h</span>
                  </p>
                </div>
                <p className="md:w-80 text-base leading-6 mt-4 text-gray-600">
                  {" "}
                  Recherche d'idées et concepts en équipe
                </p>
              </div>
            </div>
            <div
              role="listitem"
              className="bg-[#ffc58a] cursor-pointer shadow rounded-lg p-8 relative z-30 mt-7"
              data-aos-duration="3000"
              data-aos="fade-right"
            >
              <div className="md:flex items-center justify-between">
                <h2 className="text-2xl font-semibold leading-6 text-gray-800">
                  Mise en commun
                </h2>
                <img src="/image/light.png" alt="" className="w-16" />
              </div>
              <p className="md:w-80 text-base leading-6 mt-4 text-gray-600">
                des idées de toutes les équipes et chois d'un projet
              </p>
            </div>
          </div>
        </div>
      </div>
      {/************ */}
      <div className="xl:mx-auto xl:container py-20 md:pt-48  lg 2xl:px-0 px-6">
        <div className="lg:flex items-center justify-between md:px-60">
          <div className="order-2 lg:w-1/2 w-full"
             data-aos-duration="1500"
            data-aos="fade-left"
          >
            <h1
              role="heading"
              className="md:text-5xl text-3xl font-bold leading-10 mt-3 text-gray-800"
            >
              Après-midi
            </h1>
            <p
              role="contentinfo"
              className="text-base leading-5 mt-5 text-gray-600"
            >
              Description d'une journée type
            </p>
          </div>
          <div
            className="xl:w-1/2 lg:w-7/12 relative w-full lg:mt-0 mt-12 md:px-8"
            role="list"
          >
            <img
              src="https://i.ibb.co/0n6DSS3/bgimg.png"
              className="absolute w-full -ml-12 mt-24"
              alt="background circle images"
            />
            <div
              role="listitem"
              className="bg-[#ffc58a] cursor-pointer shadow rounded-lg p-8 relative z-30"
              data-aos-duration="1500"
            data-aos="fade-left"
            >
              <div className="md:flex items-center justify-between">
                <h2 className="text-2xl font-semibold leading-6 text-black">
                  Developpement et reflexion
                </h2>
                <p className="text-2xl font-semibold md:mt-0 mt-4 leading-6 text-black">
                  11h30
                </p>
              </div>
              <p className="md:w-80 text-base leading-6 mt-4 text-gray-600">
                à traves de jeux et activitées animés
              </p>
              <img src="/image/d.png" alt="" className="w-16" />
            </div>
            <div
              role="listitem"
              className="bg-[#ffc58a] cursor-pointer shadow rounded-lg mt-3 flex relative z-30"
              data-aos-duration="2s500"
            data-aos="fade-left"
            >
              <div className="w-2.5  h-auto bg-black rounded-tl-md rounded-bl-md" />
              <div className="w-full p-8">
                <div className="md:flex items-center justify-between">
                  <h2 className="text-2xl font-semibold leading-6 text-gray-800">
                    Pause Déjeuner
                  </h2>
                  <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-gray-800">
                    11<span className="font-normal text-base">h30</span>
                  </p>
                </div>
                <img src="/image/coffee.png" alt="" className="w-16" />
              </div>
            </div>
            <div
              role="listitem"
              className="bg-[#ffc58a] cursor-pointer shadow rounded-lg p-8 relative z-30 mt-7"
              data-aos-duration="3000"
            data-aos="fade-left"
            >
              <div className="md:flex items-center justify-between">
                <h2 className="text-2xl font-semibold leading-6 text-gray-800">
                  création,action
                </h2>
                <img src="/image/panel.png" alt="" className="w-32" />
              </div>
            </div>
            <div
              role="listitem"
              className="bg-[#ffc58a] cursor-pointer shadow rounded-lg p-8 relative z-30 mt-7"
              data-aos-duration="3000"
            data-aos="fade-left"
            >
              <div className="md:flex items-center justify-between">
                <h2 className="text-2xl font-semibold leading-6 text-black">
                  Feedback
                </h2>
                <p className="text-2xl font-semibold md:mt-0 mt-4 leading-6 text-black">
                  17h30
                </p>
              </div>
              <p className="md:w-80 text-base leading-6 mt-4 text-gray-600">
                et création d'une fiche de solution
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
