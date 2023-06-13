import { useState } from "react";
import { logo } from "../assets";
import { navLinks } from "../constants/constants";
import ToggleBurger from "../components/ToggleBurger";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [active, setActive] = useState(0);
  const [toggled, setToggle] = useState(false);
  return (
    <>
      <nav className="md:flex hidden  justify-center items-center gap-20 font-semibold">
        {navLinks.map((nav, index) => (
          <div
            onClick={() => {
              setActive(index);
            }}
            key={nav.id}
            className={`${nav.order} ${
              active === index && "text-primary-0"
            } hover:text-primary-0  transall cursor-pointer`}
          >
            {nav.title}
          </div>
        ))}
        <img className="order-1 cursor-pointer" src={logo} />
      </nav>
      <nav className="grid gap-10 ">
        <div className="flex md:hidden justify-center items-center gap-20 ">
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
                  onClick={() => {
                    setActive(index);
                  }}
                  key={nav.id}
                  className={`${nav.order}  ${
                    active === index && "text-primary-0"
                  } hover:text-primary-0  transall cursor-pointer`}
                >
                  {nav.title}
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
