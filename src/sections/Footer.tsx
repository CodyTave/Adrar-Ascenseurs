import { Link } from "react-scroll";
import { LogotWhite } from "../assets";

function Footer() {
  return (
    <div
      id="zero"
      className="flex flex-col justify-center items-center bg-dark-0 p-28 gap-16"
    >
      <Link
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={-100}
        delay={200}
        duration={1000}
        to="fifth"
      >
        <img className="w-28 cursor-pointer" src={LogotWhite} />
      </Link>
      <h1 className="text-light-0 font-semibold">
        © COPYRIGHT 2023 , ADRAR ASCENSEURS TOUS LES DROITS SONT RÉSERVÉS.
      </h1>
    </div>
  );
}

export default Footer;
