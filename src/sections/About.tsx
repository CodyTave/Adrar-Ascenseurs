import ImageCollage from "../components/ImageCollage";
import { AboutText } from "../constants/constants";
import { aboutImage1, aboutImage2 } from "../assets";
function About() {
  return (
    <>
      <div id="third" className="mb-52">
        <div className="grid justify-items-center md:w-[80%] mx-auto ">
          <div className="flex md:gap-16 ">
            <div className="my-10 text-left  lg:w-1/2">
              <h1 className="font-bold text-primary-0 text-3xl mb-5">
                {AboutText.title}
              </h1>
              <p className=" font-normal text-lg  mt-5">
                <span className="text-primary-0 font-semibold">
                  Adrar Ascenseurs
                </span>{" "}
                {AboutText.text}
              </p>
            </div>
            <div className="lg:flex hidden">
              <ImageCollage img1={aboutImage1} img2={aboutImage2} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
