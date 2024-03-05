import React from "react";
import TeamCard from "../ui/TeamCard";

const Team = () => {
  const teamArray = [
    {
      name: "Johm Smith",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ipsam necessitatibus dolorem id, ullam aliquid mollitia nostrum accusantium cumque fugiat. Eveniet incidunt corrupti rem voluptatibus quibusdam aperiam officia? Autem architecto numquam fugit culpa blanditiis consequuntur?",
      image: "",
    },
    {
      name: "Johm Smith",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ipsam necessitatibus dolorem id, ullam aliquid mollitia nostrum accusantium cumque fugiat. Eveniet incidunt corrupti rem voluptatibus quibusdam aperiam officia? Autem architecto numquam fugit culpa blanditiis consequuntur?",
      image: "",
    },
    {
      name: "Johm Smith",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ipsam necessitatibus dolorem id, ullam aliquid mollitia nostrum accusantium cumque fugiat. Eveniet incidunt corrupti rem voluptatibus quibusdam aperiam officia? Autem architecto numquam fugit culpa blanditiis consequuntur?",
      image: "",
    },
  ];
  return (
    <div className="p-4 bg-white rounded-md">
      <div className="text-2xl font-bold">Team</div>
      <div className="w-full flex flex-col gap-y-8 py-4">
        {/* Content */}
        <div className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ipsam
          necessitatibus dolorem id, ullam aliquid mollitia nostrum accusantium
          cumque fugiat. Eveniet incidunt corrupti rem voluptatibus quibusdam
          aperiam officia? Autem architecto numquam fugit culpa blanditiis
          consequuntur?
        </div>
        <div className="flex flex-col gap-y-4">
          {teamArray.map((item, idx) => (
            <TeamCard
              key={idx + 1}
              content={item.content}
              image={item.image}
              name={item.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
