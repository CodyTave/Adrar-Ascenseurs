import { useEffect, useState } from "react";
import { elevatorLinks } from "../constants/constants";
import { Link } from "react-scroll";
import { logo } from "../assets";
import { useInView } from "react-intersection-observer";

function ElevatorNav() {
  const [activeFloor, goTo] = useState(5);
  const [ref, inView] = useInView({
    threshold: 1, // Trigger when section is fully visible
  });
  useEffect(() => {
    if (inView) {
      // The section is in the viewport
      goTo(5);
      // Trigger your desired event here
    }
  }, [inView]);

  return (
    <div ref={ref} className="xlp:flex hidden gap-5">
      <div className="">
        <div className="grid grid-cols-2 gap-5">
          {elevatorLinks.map((floor) => (
            <Link
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-100}
              delay={200}
              duration={1000}
              to={floor.id}
            >
              <button
                onClick={() => goTo(floor.Number)}
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
              </button>
            </Link>
          ))}
        </div>
      </div>
      <img className="w-10" src={logo} />
    </div>
  );
}

export default ElevatorNav;
