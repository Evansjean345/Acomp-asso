import React from "react";
function Team() {
  return (
    <div className="md:pt-44">
      <div className="container flex justify-center mx-auto pt-16">
        <div>
          <p className="text-gray-500 text-lg text-center font-normal pb-3">
            Découvrez notre équipe
          </p>
          <h1 className="xl:text-3xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
            La Team
          </h1>
        </div>
      </div>
      <div className="w-full bg-gray-100 px-10 pt-10">
        <div className="container mx-auto">
          <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
            <div className="xl:w-1/2 sm:w-2/4 md:w-2/4 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/4">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src="/image/12.png"
                      alt
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <div className="font-bold text-3xl text-center pb-1">
                    Maurine THIBAUDEAU
                  </div>
                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    Date de naissance : 08/02/2002
                    <br />
                    Adresse : 44 rue de Brissac, Angers Française 07 68 09 49 83
                    mthibaudeau302@gmail.com
                    <br />
                    Étudiante en L3 économie et gestion à l'UCO d'Angers -
                    stagiaire en audit Brissac Activités : Sport, dessin, voyage
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/2 sm:w-2/4 md:w-2/4 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/4">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src="/image/11.png"
                      alt
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <div className="font-bold text-3xl text-center pb-1">
                  Cedric andjou
                  </div>
                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    Date de naissance : 27/﻿05/1999
                    <br />
                    Adresse : 7 rue du quinconce, Angers Français 07 49 49 19 49
                    An﻿djouc@gmail.com
                    <br />
                    Étudiant en L3 économie et gestion à l'UCO d'Angers -
                    salarié - stage en communication, événementiel
                    <br />
                    Activités : Foot, dessin, voyage
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
