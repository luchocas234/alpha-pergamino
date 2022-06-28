import React from "react";
import cessna1 from "../../media/cessna/cessna-1.jpg";
import cessna2 from "../../media/cessna/cessna-2.jpg";
import cessna3 from "../../media/cessna/cessna-3.jpg";
import Carousel from "../about/Carousel";

import luscombe1 from "../../media/luscombe/luscombe-1.jpg";
import luscombe2 from "../../media/luscombe/luscombe-2.jpg";
import luscombe3 from "../../media/luscombe/luscombe-3.jpg";
import luscombe4 from "../../media/luscombe/luscombe-4.jpg";

export default function Flotas() {
  return (
    <div name="flota" className="w-full h-full bg-white">
      <div className="max-w-[1000px] mx-auto p-8">
        <h2 className="text-6xl text-slate-800 text-center font-bold p-4">
          Nuestra Flota
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
          <div className="my-8 w-full  gap-4 flex flex-col bg-blue-700  justify-beetwen rounded-lg">
            <Carousel
              className="flex-1"
              img1={cessna1}
              img2={cessna2}
              img3={cessna3}
              clase1={"w-full h-[35vh] rounded-lg "}
            />
            <div className="  flex flex-col justify-between p-4 gap-4 ">
              <div>
                <h3 className="text-2xl text-white font-bold">Cessna 150</h3>
                <p className="text-slate-200 ">
                  Avión biplaza de propósito general equipado con tren de
                  aterrizaje triciclo fijo y ala alta. Equipado con pantalla G5.
                  La mejor opción para navegaciones largas.
                </p>
              </div>

              <a
                className="text-lg font-semibold  text-cyan-400 hover:underline "
                href="https://linkr.bio/alpha.pergamino"
                target={"_blank"}
              >
                {" "}
                Más Info
              </a>
            </div>
          </div>

          <div className="my-8 w-full  gap-4 flex flex-col bg-blue-700  justify-beetwen rounded-lg">
            <Carousel
              className="flex-1"
              img1={luscombe1}
              img2={luscombe2}
              img3={luscombe3}
              img4={luscombe4}
              clase1={"w-full h-[35vh] rounded-lg "}
            />
            <div className=" flex flex-col justify-between p-4 gap-4 ">
              <div>
                <h3 className="text-2xl text-white font-bold">Luscombe 8A</h3>
                <p className="text-slate-200">
                  Monoplano de ala alta y asientos lado a lado con tren de
                  aterrizaje convencional. Te ayudará adaptarte en tu camino
                  hacia la licencia de Piloto Aeroaplicador{" "}
                </p>
              </div>
              <a
                className="text-lg font-semibold text-cyan-400 hover:underline "
                href="https://linkr.bio/alpha.pergamino"
                target={"_blank"}
              >
                {" "}
                Más Info
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
