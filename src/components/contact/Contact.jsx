import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { RiRoadMapFill } from "react-icons/ri";
export default function Contact() {
  return (
    <div
      name="contacto"
      className="w-full px-2 py-10 bg-blue-600 relative z-20"
    >
      <div data-aos="zoom-in" className="max-w-[1200px] mx-auto p-6">
        <div class="text-white grid grid-cols-2 lg:grid-cols-5 md:grid-cols-2 gap-6 my-8 justify center items-center">
          <div class="  col-span-2  my-2 lg:col-span-1 text-4xl font-bold text-center ">
            ¡Sigamos en Contacto!
          </div>
          <div class=" col-span-2 lg:col-span-3 lg:flex gap-2">
            <div class="flex mr-6 items-center justify-start gap-2 col-span-3 md:col-span-1 hover:text-slate-800 text-white">
              <a href="https://linkr.bio/alpha.pergamino" target="_blank">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="flex justify-center items-center text-5xl md:text-6xl  hover:scale-110 hover:transition-[0.8s]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </a>
              <div class="flex flex-col justify-start">
                <h3 class="md:text-2xl mt-4 font-bold text-white">
                  2477-562250
                </h3>
                <p class="text-white md:text-lg font-semibold">
                  Lun a Dom <br /> 8:00am - 8:00pm
                </p>
              </div>
            </div>
            <div class="flex justify-start items-center gap-2 col-span-3 md:col-span-1 hover:text-slate-800 text-white">
              <a
                href="https://www.google.com/maps/place/Alpha+Pergamino/@-33.9152264,-60.6477446,17z/data=!3m1!4b1!4m5!3m4!1s0x95b84bc33b5c2223:0x96711a0a38716bc6!8m2!3d-33.9152309!4d-60.6455559"
                target="_blank"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  class="flex justify-center items-center text-5xl md:text-6xl  hover:scale-110"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M16.95 11.95a6.996 6.996 0 0 0 1.858-6.582l2.495-1.07a.5.5 0 0 1 .697.46V19l-7 3-6-3-6.303 2.701a.5.5 0 0 1-.697-.46V7l3.129-1.341a6.993 6.993 0 0 0 1.921 6.29L12 16.9l4.95-4.95zm-1.414-1.414L12 14.07l-3.536-3.535a5 5 0 1 1 7.072 0z"></path>
                  </g>
                </svg>
              </a>
              <div class="flex flex-col justify-start ">
                <h3 class="md:text-2xl text-white font-bold  ">
                  Alpha Pergamino
                </h3>
                <p class="text-white md:text-lg font-semibold">
                  RN8 Km 232.5, Pergamino, Bs As.
                </p>
              </div>
            </div>
          </div>
          <div class="col-span-3 md:col-span-1 text-4xl flex lg:flex-row  items-center justify-center gap-4">
            <a href="https://www.facebook.com/alpha.pergamino" target="_blank">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                class="hover:scale-110"
                height="1.5em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
              </svg>
            </a>
            <a href="https://www.instagram.com/alpha.pergamino" target="_blank">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 448 512"
                class="hover:scale-110"
                height="1.5em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
