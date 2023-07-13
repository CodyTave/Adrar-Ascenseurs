import { Link } from "react-scroll";
import { up } from "../assets";
import { useState, useEffect } from "react";
function GoBackUp() {
  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setShowDiv(true);
      } else {
        setShowDiv(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showDiv && (
        <Link
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={-100}
          delay={200}
          duration={1000}
          to="fifth"
        >
          <div className="fixed bottom-10 right-10 cursor-pointer fadeInBlur z-50">
            <img src={up} />
          </div>
        </Link>
      )}
    </>
  );
}

export default GoBackUp;
