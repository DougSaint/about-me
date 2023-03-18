import React from "react";
import { scroller } from "react-scroll";




export default function ButtonProjects() {

   const scrollDown = () => {
        scroller.scrollTo('projects', {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
          });
      };

  return (
    <button
      type="button"
      onClick={scrollDown}
      class="flex bg-gradient-to-r from-indigo-900 via-purple-600 to-pink-400 hover:from-indigo-600 hover:via-pink-600 hover:to-red-600 focus:outline-none text-white text-2xl uppercase font-bold shadow-md rounded-lg mx-auto p-2 mt-3"
    >
      <div class="flex sm:flex-cols-12 gap-6">
        <div class="col-span-1">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
            />
          </svg>
        </div>
        <div class="col-span-2 pt-1.5">Projetos</div>
      </div>
    </button>
  );
}
