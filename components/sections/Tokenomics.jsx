"use client";
import { Chart, ArcElement } from "chart.js";
import React from "react";
import { Doughnut } from "react-chartjs-2";

const Tokenomics = () => {
  Chart.register(ArcElement);
  const data = {
    labels: ["Crowdsale investors", "Foundation"],
    datasets: [
      {
        label: "Tokenomics",
        data: [80, 20],
        backgroundColor: ["rgb(0, 130, 255)", "rgb(250, 160, 2)"],
        hoverOffset: 4,
        borderRadius: 3,
      },
    ],
  };
  const config = {
    type: "doughnut",
    data: data,
  };
  return (
    <div className="w-full my-7 p-4 flex flex-col bg-white">
      <div className="text-2xl font-bold">Tokenomics</div>
      <div className="flex flex-col">
        <div className="text-base font-semibold">Initial Distribution</div>
        <div className="flex gap-x-4">
          <div className="flex gap-x-4 w-40 h-40 py-5">
            <Doughnut data={data} />
          </div>
          <div className="flex flex-col gap-y-2 justify-center items-center">
            <div className="flex gap-x-2">
              <div className="w-3 h-3 bg-[#0082ff]"></div>
              <div className="text-sm font-semibold">Crowdsale investors</div>
            </div>
            <div className="flex gap-x-2">
              <div className="w-3 h-3 bg-[#FF9900]"></div>
              <div className="text-sm font-semibold">Foundation</div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-3 pb-8 text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam odio
        accusantium perferendis? In officia adipisci animi exercitationem
        possimus tempora iste a, magnam totam sed dicta culpa rem error, impedit
        accusamus! Voluptates, sit sapiente necessitatibus fugiat tempore
        cupiditate, ullam porro laudantium, harum magni pariatur dolorum! Ea
        quas ducimus vero sit fuga, harum quaerat maiores doloribus animi, ipsa
        at tenetur aut consequatur.
      </div>
    </div>
  );
};

export default Tokenomics;
