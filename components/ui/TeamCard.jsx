import React from "react";
import Info1 from "../../public/info1.png";
import Image from "next/image";

const TeamCard = ({ name, content }) => {
  return (
    <div className="bg-blue-200 p-3 rounded-lg">
      <div className="flex lg:flex-row justify-center items-center flex-col gap-x-5">
        <div className="flex flex-col">
          <div>
            <Image src={Info1} alt="image" />
          </div>
          <div className="flex mt-2 flex-col items-center">
            <div className="text-sm font-bold">{name}</div>
            <div className="text-xs text-gray-500 mt-1">Designation here</div>
          </div>
        </div>
        <div className="w-full lg:w-[80%] lg:-mt-10 text-gray-800 flex lg:justify-start justify-center lg:text-left text-center lg:items-baseline items-center">
          {content}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
