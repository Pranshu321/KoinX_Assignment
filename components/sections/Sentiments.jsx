import React from "react";
import KeyEvents from "./KeyEvents";
import AnalystEstimate from "./AnalystEstimate";

export default function Sentiment() {
  return (
    <div className="p-5 bg-white rounded-md flex flex-col gap-y-4">
      <div className="font-bold text-xl">Sentiment</div>
      <div className="font-bold py-3 text-lg text-gray-500">Key Events</div>
      <KeyEvents />
      <div className="font-bold py-3 text-lg text-gray-500">
        Analyst Estimates
      </div>
      <AnalystEstimate />
    </div>
  );
}
