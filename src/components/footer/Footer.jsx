import React from "react";

export default function Footer() {
  return (
    <div className="w-full bg-slate-800 p-2 flex items-center  justify-center">
      <p className="text-white text-sm">
        {" "}
        Alpha Pergamino 2022 - Design by{" "}
        <a
          className="hover:text-sky-500"
          href="https://www.linkedin.com/in/lucianofcastro/"
          target={"_blank"}
        >
          Luciano Castro
        </a>
      </p>
    </div>
  );
}
