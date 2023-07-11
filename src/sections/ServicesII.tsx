import ImageCollage from "../components/ImageCollage";
import { Elevators, Escalators, lifts } from "../constants/constants";
import {
  escImage1,
  escImage2,
  ascImage1,
  ascImage2,
  liftImage1,
  liftImage2,
} from "../assets";

function ServicesII() {
  return (
    <div className="md:mx-0 mx-8" id="second">
      <div className="mb-40 ">
        <div className="grid justify-items-center md:w-[80%] mx-auto ">
          <div className="flex flex-col lg:flex-row md:gap-x-16 ">
            <div className="lg:flex lg:mr-auto">
              <ImageCollage img1={ascImage1} img2={ascImage2} />
            </div>
            <div className="my-10 text-left  lg:w-1/2">
              <h1 className="font-bold text-primary-0 text-3xl mb-5">
                {Elevators.title}
              </h1>
              <p className=" font-normal text-lg  mt-5">{Elevators.text} </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-40">
        <div className="grid justify-items-center md:w-[80%] mx-auto ">
          <div className="flex flex-col lg:flex-row md:gap-x-16 ">
            <div className="my-10 text-left  lg:w-1/2">
              <h1 className="font-bold text-primary-0 text-3xl mb-5">
                {Escalators.title}
              </h1>
              <p className=" font-normal text-lg  mt-5">{Escalators.text} </p>
            </div>
            <div className="lg:flex lg:mx-auto">
              <ImageCollage img1={escImage1} img2={escImage2} />
            </div>
          </div>
        </div>
      </div>
      <div className="mb-40">
        <div className="grid justify-items-center md:w-[80%] mx-auto ">
          <div className="flex flex-col lg:flex-row md:gap-x-16 ">
            <div className="lg:flex lg:mr-auto">
              <ImageCollage img1={liftImage1} img2={liftImage2} />
            </div>
            <div className="my-10 text-left  lg:w-1/2">
              <h1 className="font-bold text-primary-0 text-3xl mb-5">
                {lifts.title}
              </h1>
              <p className=" font-normal text-lg  mt-5">{lifts.text} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesII;
