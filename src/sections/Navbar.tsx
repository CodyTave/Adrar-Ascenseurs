import { useState } from "react";
import { logo } from "../assets";
import { navLinks } from "../constants/constants";
import ToggleBurger from "../components/ToggleBurger";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

function Navbar() {
  const [toggled, setToggle] = useState(false);
  return (
    <>
      <nav
        id="fifth"
        className="md:flex hidden  justify-center items-center gap-20 font-semibold mb-20"
      >
        {navLinks.map((nav) => (
          <div
            key={nav.id}
            className={`${nav.order} ${
              nav.id === "home" && "text-primary-0"
            } hover:text-primary-0  transall cursor-pointer`}
          >
            <Link
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-50}
              delay={200}
              duration={1000}
              to={nav.floor}
            >
              {nav.title}
            </Link>
          </div>
        ))}
        <img className="order-1 cursor-pointer" src={logo} />
      </nav>
      <nav id="fifth" className="grid md:hidden gap-10 ">
        <div className="flex  justify-center items-center gap-20 ">
          <img className="cursor-pointer" src={logo} />
          <ToggleBurger
            toggled={toggled}
            setToggle={() => {
              setToggle(!toggled);
            }}
          />
        </div>
        <AnimatePresence>
          {toggled && (
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="grid gap-10 font-semibold "
            >
              {navLinks.map((nav, index) => (
                <div
                  key={nav.id}
                  className={`${nav.order} ${
                    nav.id === "home" && "text-primary-0"
                  } hover:text-primary-0  transall cursor-pointer`}
                >
                  <Link
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={-50}
                    delay={200}
                    duration={1000}
                    to={nav.floor}
                  >
                    {nav.title}
                  </Link>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}

export default Navbar;
