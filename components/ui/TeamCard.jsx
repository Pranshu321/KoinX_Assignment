import React from "react";
import Info1 from "../../public/info1.png";
import Image from "next/image";

const TeamCard = ({ name, content }) => {
  return (
    <div className="bg-blue-200 p-3 rounded-lg">
      <div className="flex gap-x-5">
        <div className="flex flex-col">
          <div>
            <Image src={Info1} alt="image" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-sm">{name}</div>
            <div className="text-xs text-gray-500">Designation here</div>
          </div>
        </div>
        <div className="w-[80%] text-gray-800 pt-5 flex justify-center">
          {content}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
