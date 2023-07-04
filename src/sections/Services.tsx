import { useState } from "react";
import Elevator from "../components/Elevator";
import { elevatorButtons, elevator } from "../constants/constants";
import { motion, AnimatePresence } from "framer-motion";

function Services() {
  const [isOpen, setOpen] = useState(false);
  const [floorStop, setStop] = useState(0);
  const [isAnimating, setAnimate] = useState(false);
  function Ascend(index: number) {
    if (!isAnimating && floorStop !== index) {
      if (isOpen) {
        setOpen(false);
        setAnimate(true);
        setTimeout(() => {
          setStop(index);
          setOpen(true);
          setAnimate(false);
        }, 2000);
      } else {
        setStop(index);
        setOpen(true);
      }
    }
  }
  return (
    <div className="h-[80vh]">
      <div className="grid lg:grid-cols-2 gap-y-20">
        <div className="grid grid-cols-2 gap-10 my-auto text-light-0 font-semibold">
          <div
            onClick={() => {
              if (!isAnimating) {
                setOpen(!isOpen);
              }
            }}
            className="flex cursor-pointer justify-center items-center text-primary-0"
          >
            Services
          </div>
          {elevator.map((floor, index) => (
            <div key={floor.id} className="flex  justify-center items-center">
              <button
                onClick={() => {
                  Ascend(index);
                }}
                className=" bg-primary-0 w-48 py-3 rounded-full"
              >
                {floor.title}
              </button>
            </div>
          ))}
        </div>
        <div className="flex justify-center ">
          <div className="relative">
            <div className=" flex justify-center items-center bg-primary-0 w-40 h-10 mb-5  mx-auto rounded-lg overflow-hidden">
              <motion.div
                className="flex justify-center items-center h-10  font-Segment text-light-0"
                key={floorStop}
              >
                {elevator[floorStop].title}
              </motion.div>
            </div>
            <Elevator
              isOpen={isOpen}
              setOpen={() => {
                setOpen(!isOpen);
              }}
            />
            <div className="absolute top-1/2 mt-8 w-[70%]  -translate-y-1/2 translate-x-1/2 right-1/2 -z-50 font-semibold text-primary-0 text-left">
              {elevator[floorStop].text}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;