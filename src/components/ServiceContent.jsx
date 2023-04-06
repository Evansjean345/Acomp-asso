const ServiceContent = () => (
  <div className="overflow-y-hidden">
    <div className="pb-16">
      {/* Code block starts */}
      <dh-component>
        <section className="mx-auto container bg-white pt-16">
          <div className="px-4 lg:px-0">
            <div role="contentinfo" className="flex items-center flex-col px-4">
              <h1
                tabIndex={0}
                className="focus:outline-none text-5xl lg:text-4xl pt-4 font-extrabold text-center leading-tight text-gray-800 lg:w-7/12 md:w-9/12 xl:w-5/12"
              >
                Chiffre d'Affaire
              </h1>
              <h1
                tabIndex={0}
                className="focus:outline-none text-5xl lg:text-4xl pt-4 font-extrabold text-center leading-tight text-gray-800 lg:w-7/12 md:w-9/12 xl:w-5/12"
              >
                CA = 2 250€ /événement ; 49 500€/an
              </h1>
            </div>
          </div>
        </section>
        <section className="bg-[#ffc58a] py-12 mt-12">
          <div
            tabIndex={0}
            aria-label="group of cards"
            className="focus:outline-none px-4 lg:px-0"
          >
            <div className="mx-auto container flex flex-wrap px-2 lg:px-24">
              <div
                tabIndex={0}
                aria-label="card 1"
                className="focus:outline-none flex sm:w-full md:w-1/2 lg:border-r md:border-r sm:border-r-0 border-white pb-10 lg:pt-10"
              >
                <div className=" flex flex-shrink-0 mr-5 text-white">
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/indigo_bg_with_divider-svg1.svg"
                    alt="drawer"
                  />
                </div>
                <div className="md:w-9/12 lg:w-9/12">
                  <h2
                    tabIndex={0}
                    className="focus:outline-none text-lg font-semibold leading-5 text-white"
                  >
                    Le chiffre d'affaire
                  </h2>
                  <p
                    tabIndex={0}
                    className="focus:outline-none text-base text-white leading-normal xl:w-10/12 pt-2"
                  >
                    Le chiffre d'affaires est obtenu par les places vendus aux
                    entreprises (9 personnes par Acompa'Day), ainsi que les
                    aides obtenues par la mairie.{" "}
                  </p>
                </div>
              </div>
              <div
                tabIndex={0}
                aria-label="card 2"
                className="focus:outline-none flex sm:w-full md:w-1/2 lg:pb-10 lg:pt-10"
              >
                <div className=" flex flex-shrink-0 sm:ml-0 md:ml-10 lg:ml-10 mr-5 text-white">
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/indigo_bg_with_divider-svg2.svg"
                    alt="check"
                  />
                </div>
                <div className="md:w-9/12 lg:w-9/12 ">
                  <h2
                    tabIndex={0}
                    className="focus:outline-none text-lg font-semibold leading-5 text-white"
                  >
                    Nombre d'événements
                  </h2>
                  <p
                    tabIndex={0}
                    className="focus:outline-none text-base text-white leading-normal xl:w-10/12 pt-2"
                  >
                    Nombre d'événements 2/mois
                  </p>
                </div>
              </div>
              <div
                tabIndex={0}
                aria-label="card 3"
                className="focus:outline-none flex sm:w-full md:w-1/2 lg:border-t md:border-t sm:border-t-0 lg:border-r md:border-r sm:border-r-0 border-white pt-10 lg:pb-20"
              >
                <div className=" flex flex-shrink-0 mr-5 text-white">
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/indigo_bg_with_divider-svg3.svg"
                    alt="html-tag"
                  />
                </div>
                <div className="md:w-9/12 lg:w-9/12 ">
                  <h2
                    tabIndex={0}
                    className="focus:outline-none text-lg font-semibold leading-5 text-white"
                  >
                    Nombre de salariés
                  </h2>
                  <p
                    tabIndex={0}
                    className="focus:outline-none text-base text-white leading-normal xl:w-10/12 pt-2"
                  >
                    Nombre de salariés payant leur place 9/événement
                  </p>
                </div>
              </div>
              <div
                tabIndex={0}
                aria-label="card 4"
                className="focus:outline-none flex sm:w-full md:w-1/2 lg:border-t md:border-t sm:border-t-0 border-white pt-10 lg:pb-20"
              >
                <div className=" flex flex-shrink-0 sm:ml-0 md:ml-10 lg:ml-10 mr-5 text-white">
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/indigo_bg_with_divider-svg4.svg"
                    alt="display"
                  />
                </div>
                <div className="md:w-9/12 lg:w-9/12 ">
                  <h2
                    tabIndex={0}
                    className="focus:outline-none text-lg font-semibold leading-5 text-white"
                  >
                    Prix d'une place
                  </h2>
                  <p
                    tabIndex={0}
                    className="focus:outline-none text-base text-white leading-normal xl:w-10/12 pt-2"
                  >
                    Prix d'une place pour un salarié d'entreprise 250€/perso
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </dh-component>
      {/* Code block ends */}
    </div>
  </div>
);
export default ServiceContent;
