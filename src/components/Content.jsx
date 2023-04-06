import React from "react";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
        <div className="w-full lg:w-6/12">
          <h2
            className="w-full font-bold lg:text-4xl text-3xl lg:leading-10 leading-9 text-black"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            Le projet
          </h2>
          <p
            className="font-normal text-xl leading-6 text-gray-800 mt-6"
            data-aos="fade-down"
            data-aos-duration="2500"
          >
            Nous souhaitons créer Acomp'Asso, une SARL située à Angers dont
            l'objectif est de renforcer la collaboration
            associations-entreprises à travers des journées "Acompa'Day".{" "}
          </p>
        </div>
        <div
          className="w-full lg:w-6/12"
          data-aos="flip-left"
          data-aos-duration="2500"
        >
          <img
            className="lg:block hidden w-full"
            src="https://i.ibb.co/RjNH7QB/Rectangle-122-1.png"
            alt="people discussing on board"
          />
          <img
            className="lg:hidden sm:block hidden w-full"
            src="https://i.ibb.co/16fPqrg/Rectangle-122-2.png"
            alt="people discussing on board"
          />
          <img
            className="sm:hidden block w-full"
            src="https://i.ibb.co/Jxhpxh6/Rectangle-122.png"
            alt="people discussing on board"
          />
        </div>
      </div>
      <div className="relative mt-24">
        <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
          <div
            className="z-20 w-12 h-12 bg-[#ffc58a]  rounded-full flex justify-center items-center"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <img src="/image/force.png" alt="" className="p-1" />
          </div>
          <img
            src="/image/faiblesses.png"
            alt=""
            className="h-[48px] w-[48px] bg-[#ffc58a] rounded-full z-20 p-1"
            data-aos="fade-up"
            data-aos-duration="2500"
          />
          <img
            src="/image/menace.png"
            alt=""
            className="z-20 sm:block hidden h-[48px] w-[48px] bg-[#ffc58a] p-1 rounded-full"
            data-aos="fade-up"
            data-aos-duration="1500"
          />
        </div>
        <hr className="z-10 absolute top-2/4 w-full bg-gray-200" />
      </div>
      {/**end items */}
      <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
        <div data-aos="fade-up" data-aos-duration="3000">
          <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">
            Forces
          </p>
          <p className="font-normal text-xl leading-6 text-gray-600 mt-6">
            Nos <strong>Acompa'Day :</strong> des journées favorisant le
            collectif autour de valeurs fortes
            <br />
            <strong>1 &nbsp; thème par mois</strong> pour diversifier les
            rencontres et le réseau
            <br />
            <strong>Notre profil étudiant :</strong> dynamique et créatif
          </p>
        </div>
        <div data-aos="fade-up" data-aos-duration="2500">
          <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">
            Faiblesses
          </p>
          <p className="font-normal text-xl leading-6 text-gray-600 mt-6">
            <strong>Budget</strong> limité
            <br />
            <strong>Réseau</strong> limité
          </p>
        </div>
        <div
          className="sm:block hidden"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">
            Menace
          </p>
          <p className="font-normal text-xl leading-6 text-gray-600 mt-6">
            La <strong>concurrence</strong> angevine : WeAct
          </p>
        </div>
        <div className="sm:block hidden">
          <img
            src="/image/opportunite.png"
            alt=""
            className="h-[48px] w-[48px] bg-[#ffc58a] rounded-full z-20 p-1"
            data-aos="fade-up"
            data-aos-duration="1500"
          />
          <p
            className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            Opportunités
          </p>
          <p
            className="font-normal text-xl leading-6 text-gray-600 mt-6"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <strong>Angers :</strong> une ville étudiante et innovante
            <br />
            La <strong>RSE</strong> très valorisée dans les entreprises
          </p>
        </div>
      </div>
      {/* responsive 4 items start */}
      <div className="sm:hidden block relative mt-8">
        <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
          <img
            src="/image/menace.png"
            alt=""
            className="h-[48px] w-[48px] bg-[#ffc58a] rounded-full z-20 p-1"
          />
          <img
            src="/image/opportunite.png"
            alt=""
            className="h-[48px] w-[48px] bg-[#ffc58a] rounded-full z-20 p-1"
          />
        </div>
        <hr className="z-10 absolute top-2/4 w-full bg-gray-200" />
      </div>
      <div className="sm:hidden grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
        <div>
          <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">
            Menaces
          </p>
          <p className="font-normal text-xl leading-6 text-gray-600 mt-6">
            La <strong>concurrence</strong> angevine : WeAct
          </p>
        </div>
        <div>
          <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">
            Opportunités
          </p>
          <p className="font-normal text-xl leading-6 text-gray-600 mt-6">
            <strong>Angers :</strong> une ville étudiante et innovante
            <br />
            La <strong>RSE</strong> très valorisée dans les entreprises
          </p>
        </div>
      </div>
      {/* Mission start */}
      <div className="flex lg:flex-row flex-col md:gap-14 gap-16 justify-between lg:mt-20 mt-16">
        <div className="w-full lg:w-6/12">
          <h2
            className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            Notre mission
          </h2>
          <p
            className="font-normal text-xl leading-6 text-gray-800 mt-6 w-full lg:w-10/12 xl:w-9/12"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            Nous souhaitons créer Acomp'Asso, une SARL{" "}
            <strong>
              située à Angers dont l'objectif est de renforcer la collaboration
              associations-entreprises à travers des journées "Acompa'Day"
            </strong>
            . Chaque mois, un secteur sera ciblé afin de permettre des
            collaborations variées tout au long de l'année (12 thèmes : art
            visuel, danse et théâtre, cinéma, sport, handicap, séniors, animaux,
            recyclage, réfugiés, environnement, droits des femmes, précarité
            infantile). L'objectif est avant tout de{" "}
            <strong>créer de nouveaux liens</strong>, trouver des solutions
            autour
            <strong>
              {" "}
              du travail collaboratif et valoriser des associations
            </strong>{" "}
            à la recherche de visibilité.
          </p>
          <p
            className="font-normal text-xl leading-6 text-gray-800 w-full lg:w-10/12 xl:w-9/12 mt-10"
            data-aos-duration="2000"
            data-aos="fade-right"
          >
            L’idée est née grâce au certificat étudiant entrepreneur, proposé
            par l'UCO d'Angers. En effet, Acomp’Asso est{" "}
            <strong>un mix entre deux idées principales.</strong> D’une part,
            <strong>
              {" "}
              nous souhaitions mettre en lumière les petites associations
            </strong>{" "}
            et les soutenir dans leur développement. D'autre part, nous aimions
            l'idée de{" "}
            <strong>
              la mise en relation entre les étudiants et les entreprises.
            </strong>{" "}
            Ainsi, nous avons réussi à combiner les deux idées en nous basant
            sur de la mise en relation entre associations et entreprises tout en
            invitant des étudiants à y participer. Nous avons constaté que
            certains problèmes persistent au sein des associations notamment la
            question de l'attractivité plutôt faible et du manque de moyens
            financiers. Ainsi, ce projet permet de répondre à ces enjeux, il a
            un but social, étique et responsable et donne un réel sens à notre
            travail.
          </p>
        </div>
        <div className="w-full lg:w-6/12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10">
            {/* <!-- Team Card --> */}
            <Link to="/about" data-aos-duration="1500" data-aos="fade-left">
              <div className="flex p-4 shadow-md rounded-full bg-[#ffc58a] cursor-pointer">
                <div className="mr-6">
                  <svg
                    className="mr-6"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 15C20.4853 15 22.5 12.9853 22.5 10.5C22.5 8.01472 20.4853 6 18 6C15.5147 6 13.5 8.01472 13.5 10.5C13.5 12.9853 15.5147 15 18 15Z"
                      stroke="white"
                      strokeWidth="2.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M25.5 28.5C27.9853 28.5 30 26.4853 30 24C30 21.5147 27.9853 19.5 25.5 19.5C23.0147 19.5 21 21.5147 21 24C21 26.4853 23.0147 28.5 25.5 28.5Z"
                      stroke="white"
                      strokeWidth="2.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.5 28.5C12.9853 28.5 15 26.4853 15 24C15 21.5147 12.9853 19.5 10.5 19.5C8.01472 19.5 6 21.5147 6 24C6 26.4853 8.01472 28.5 10.5 28.5Z"
                      stroke="white"
                      strokeWidth="2.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="">
                  <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-white">
                    L'equipe
                  </p>
                  <p className="mt-2 font-normal text-xl leading-6 text-white">
                    Découvrez notre equipe
                  </p>
                </div>
              </div>
            </Link>

            {/* <!-- Board Card --> */}
            <Link to="/services" data-aos-duration="2500" data-aos="fade-left">
              <div className="flex p-4 shadow-md rounded-full bg-[#ffc58a] cursor-pointer">
                <div className="mr-6">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5 10.5C12.1569 10.5 13.5 9.15685 13.5 7.5C13.5 5.84315 12.1569 4.5 10.5 4.5C8.84315 4.5 7.5 5.84315 7.5 7.5C7.5 9.15685 8.84315 10.5 10.5 10.5Z"
                      stroke="white"
                      strokeWidth="2.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.5 33V25.5L6 24V18C6 17.6022 6.15804 17.2206 6.43934 16.9393C6.72064 16.658 7.10218 16.5 7.5 16.5H13.5C13.8978 16.5 14.2794 16.658 14.5607 16.9393C14.842 17.2206 15 17.6022 15 18V24L13.5 25.5V33"
                      stroke="white"
                      strokeWidth="2.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M25.5 10.5C27.1569 10.5 28.5 9.15685 28.5 7.5C28.5 5.84315 27.1569 4.5 25.5 4.5C23.8431 4.5 22.5 5.84315 22.5 7.5C22.5 9.15685 23.8431 10.5 25.5 10.5Z"
                      stroke="white"
                      strokeWidth="2.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22.5 33V27H19.5L22.5 18C22.5 17.6022 22.658 17.2206 22.9393 16.9393C23.2206 16.658 23.6022 16.5 24 16.5H27C27.3978 16.5 27.7794 16.658 28.0607 16.9393C28.342 17.2206 28.5 17.6022 28.5 18L31.5 27H28.5V33"
                      stroke="white"
                      strokeWidth="2.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="">
                  <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-white">
                    Nos service
                  </p>
                  <p className="mt-2 font-normal text-xl leading-6 text-white">
                    Découvres les differents services que nous avons à proposés
                  </p>
                </div>
              </div>
            </Link>

            {/* <!-- Press Card --> */}
            <Link to="/services" data-aos-duration="3000" data-aos="fade-right">
              <div className="flex p-4 shadow-md rounded-full bg-[#ffc58a] cursor-pointer">
                <div className="mr-6">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28.5 7.5H7.5C5.84315 7.5 4.5 8.84315 4.5 10.5V25.5C4.5 27.1569 5.84315 28.5 7.5 28.5H28.5C30.1569 28.5 31.5 27.1569 31.5 25.5V10.5C31.5 8.84315 30.1569 7.5 28.5 7.5Z"
                      stroke="white"
                      strokeWidth="2.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.5 10.5L18 19.5L31.5 10.5"
                      stroke="white"
                      strokeWidth="2.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="">
                  <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-white">
                    Nous
                  </p>
                  <p className="mt-2 font-normal text-xl leading-6 text-white">
                    Prenez contact avec notre equipe
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
