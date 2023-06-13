import { useState } from "react";
import { elevatorLinks } from "../constants/constants";

function ElevatorNav() {
  const [activeFloor, goTo] = useState(0);
  return (
    <div className="xlp:flex hidden">
      <div className="grid grid-cols-2 gap-5">
        {elevatorLinks.map((floor) => (
          <div
            key={floor.id}
            className={`font-semibold cursor-pointer 
             transall  text-xl 
              w-10 h-10 rounded-full flex justify-center ${
                activeFloor === floor.Number
                  ? "bg-primary-0 hover:bg-primary-2 text-light-0"
                  : "border-2 border-primary-0 text-primary-0 hover:bg-primary-0 hover:text-light-0 "
              }
            items-center`}
          >
            {floor.Number}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ElevatorNav;
