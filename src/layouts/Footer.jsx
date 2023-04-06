import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer class="text-gray-600 body-font">
        <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <Link class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
           <img src="/image/logo.png" alt="" className="w-24 h-24" />
            <span class="ml-3 text-xl">Acompasso</span>
          </Link>
          <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2023 Acompassoo —
            <a
              href="https://twitter.com/knyttneve"
              class="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @gmail.com
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
