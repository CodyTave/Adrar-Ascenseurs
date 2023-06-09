import { gsap } from "gsap";
interface props {
  toggled: boolean;
  setToggle: () => void;
}
function ToggleBurger({ toggled, setToggle }: props) {
  function Animate() {
    if (toggled) {
      gsap.to(".one", {
        duration: 0.3,
        ease: "cubic-bezier(0.4, 0, 0.2, 1)",
        y: "0",
      });
      gsap.to(".two", {
        duration: 0.3,
        ease: "cubic-bezier(0.4, 0, 0.2, 1)",
        width: "45",
      });
      gsap.to(".three", {
        duration: 0.3,
        ease: "cubic-bezier(0.4, 0, 0.2, 1)",
        width: "45",
      });
    } else {
      gsap.to(".one", {
        duration: 0.3,
        ease: "cubic-bezier(0.4, 0, 0.2, 1)",
        y: "12",
      });
      gsap.to(".two", {
        duration: 0.3,
        ease: "cubic-bezier(0.4, 0, 0.2, 1)",
        width: "20",
      });
      gsap.to(".three", {
        duration: 0.3,
        ease: "cubic-bezier(0.4, 0, 0.2, 1)",
        width: "40",
      });
    }
  }
  return (
    <>
      <svg
        onClick={() => {
          Animate();
          setToggle();
        }}
        width="45"
        height="29"
        viewBox="0 0 45 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          className="one "
          y="0"
          width="20"
          height="5"
          rx="2.5"
          fill="#BD1820"
        />
        <rect
          className="two"
          y="12"
          width="45"
          height="5"
          rx="2.5"
          fill="#BD1820"
        />
        <rect
          className="three"
          y="24"
          width="45"
          height="5"
          rx="2.5"
          fill="#222222"
        />
      </svg>
    </>
  );
}

export default ToggleBurger;
