import React from "react";

export default function InfoBar() {
  return (
    <div className="flex gap-5 mt-3 lg:px-0 px-4 border-b-2 border-gray-300 overflow-auto">
      <div className="font-semibold pb-3 text-sm text-blue-700 border-blue-700 border-b-4">
        Overview
      </div>
      <div className="font-semibold text-gray-700 pb-3 text-sm">
        Fundamentals
      </div>
      <div className="font-semibold text-gray-700 pb-3 text-sm text-nowrap">
        News Insigts
      </div>
      <div className="font-semibold text-gray-700 border-b-4 text-sm">
        Sentiments
      </div>
      <div className="font-semibold text-gray-700 pb-3 text-sm">Team</div>
      <div className="font-semibold text-gray-700 pb-3 text-sm">Technical</div>
      <div className="font-semibold text-gray-700 pb-3 text-sm">Technomics</div>
    </div>
  );
}
