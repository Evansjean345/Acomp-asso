import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import background from "../background.png";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qyjd47b",
        "template_ttz2c8e",
        form.current,
        "5XOYzmav8Y9FNP7Kb"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    alert("votre demande a bien été prise en compte ");
    e.target.reset();
  };

  return (
    <>
      <div
        class="mt-8 lg:w-full lg:mx-6"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div class="w-full px-8 py-10 mx-auto overflow-hidden bg-[#ffc58a] rounded-lg shadow-2xl lg:max-w-xl shadow-gray-300/50 ">
          <h1 class="text-3xl font-semibold  capitalizetext-white lg:text-3xl text-white">
            Devenez Partenaire
          </h1>

          <form class="mt-6" ref={form} onSubmit={sendEmail}>
            <div class="flex-1">
              <label
                class="block font-semibold mb-2 text-sm text-white "
                for="name"
              >
                Nom et prénoms
              </label>
              <input
                id="name"
                name="from_name"
                type="text"
                placeholder="Entrez votre nom"
                class="block w-full px-5 py-3 mt-2 text-gray-300 placeholder-gray-400 bg-gray-200 rounded-lg border border-gray-200  dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 focus:border-red-700 dark:focus:border-red-700 focus:ring-red-700 focus:outline-none focus:ring focus:ring-opacity-40"
                required
              />
            </div>

            <div class="flex-1 mt-6">
              <label
                for="email"
                class="block font-semibold mb-2 text-sm text-white"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="entrez votre addresse mail"
                class="block w-full px-5 py-3 mt-2 text-gray-300 placeholder-gray-400 bg-gray-200 rounded-lg border-gray-200  dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 focus:border-red-700 dark:focus:border-red-700 focus:ring-red-700 focus:outline-none focus:ring focus:ring-opacity-40"
                required
              />
            </div>
            <div class="flex-1 mt-6 ">
              <label
                for="work"
                class="block font-semibold mb-2 text-sm text-gray-300"
              >
                Profession
              </label>
              <div>
                <select
                  name="work"
                  class="text-gray-400 font-bold w-full bg-gray-200 rounded-lg  border border-gray-300  focus:ring-2 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  id="work"
                  color="black"
                  required
                >
                  <option
                    value="particulier"
                    class="hover:bg-gray-700 text-gray-300 "
                  >
                    veuillez selectionnez une option
                  </option>
                  <option value="entreprise">entreprise</option>
                  <option value="particulier">particulier</option>
                  <option value="etudiant">etudiant</option>
                </select>
              </div>
            </div>
            <br />
            <div class="flex-1">
              <label
                for="tel"
                class="block font-semibold mb-2 text-sm text-white "
              >
                Telephone
              </label>
              <input
                id="tel"
                name="number"
                type="text"
                placeholder="entrez votre numero de telephone"
                class="block w-full px-5 py-3 mt-2 text-gray-300 placeholder-gray-400 bg-gray-200 rounded-lg border border-gray-200  dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 focus:border-red-700 dark:focus:border-red-700 focus:ring-red-700 focus:outline-none focus:ring focus:ring-opacity-40"
                required
              />
            </div>

            <div class="w-full mt-6">
              <label class="block mb-2 text-sm text-white font-semibold">
                Message
              </label>
              <textarea
                class="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-gray-200 rounded-lg border border-gray-200  md:h-48 dark:placeholder-gray-600 bg-black-900  dark:border-gray-700 focus:border-red-700 dark:focus:border-red-700 focus:ring-red-700 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Message"
                required
                name="message"
              ></textarea>
            </div>

            <button class="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-black capitalize transition-colors duration-300 transform bg-white  hover:bg-white hover:text-black focus:outline-none focus:ring  focus:ring-opacity-50">
              Envoyez
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
