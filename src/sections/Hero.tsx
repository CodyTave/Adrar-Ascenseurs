import { heroImage1, heroImage2 } from "../assets";
import ElevatorNav from "../components/ElevatorNav";
import ImageCollage from "../components/ImageCollage";

function Hero() {
  return (
    <>
      <div className="sm:h-[80vh] xxxl:h-full md:mx-0 mx-8">
        <div className="grid justify-items-center md:w-[80%] mx-auto ">
          <div className="flex md:gap-16 ">
            <div className="my-10 text-left  lg:w-1/3">
              <h1 className="font-bold text-primary-0 text-3xl">
                Solutions de Mobilité Verticale de Qualité
              </h1>
              <p className=" font-medium text-xl mt-5">
                Notre vaste expertise en conception et installation d'ascenseurs
                sur mesure, adaptés à vos besoins spécifiques
              </p>
              <button className="py-2 px-8 rounded-full font-semibold bg-primary-0 text-light-0 mt-5 hover:bg-primary-2 transall">
                En Savoir Plus
              </button>
            </div>
            <div className="lg:flex hidden">
              <ImageCollage img1={heroImage1} img2={heroImage2} />
            </div>
            <div className="ml-auto my-auto">
              <ElevatorNav />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
