import { Link } from "react-scroll";
import { LogotWhite } from "../assets";

function Footer() {
  return (
    <footer
      id="zero"
      className="flex flex-col justify-center items-center  py-28 px-10 gap-16"
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
      <h1 className="text-light-0 text-left font-semibold line-clamp-3">
        © COPYRIGHT 2023 , ADRAR ASCENSEURS TOUS LES DROITS SONT RÉSERVÉS.
      </h1>
    </footer>
  );
}

export default Footer;
