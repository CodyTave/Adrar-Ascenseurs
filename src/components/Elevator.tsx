import { gsap } from "gsap";
import { useEffect } from "react";
interface props {
  isOpen: boolean;
  setOpen: () => void;
}
function Elevator({ isOpen }: props) {
  function OperateElev() {
    if (!isOpen) {
      gsap.to(".left", {
        duration: 1.4,
        translateX: 0,
        ease: "cubic-bezier(0.4, 0, 0.2, 1)",
      });
      gsap.to(".right", {
        duration: 1.4,
        translateX: 0,
        ease: "cubic-bezier(0.4, 0, 0.2, 1)",
      });
    } else {
      gsap.to(".left", {
        duration: 1.4,
        translateX: -250,
        ease: "cubic-bezier(0.4, 0, 0.2, 1)",
      });
      gsap.to(".right", {
        duration: 1.4,
        translateX: 250,
        ease: "cubic-bezier(0.4, 0, 0.2, 1)",
      });
    }
  }
  useEffect(() => {
    OperateElev();
  }, [isOpen]);

  return (
    <>
      <svg
        className="msm:w-[450px] w-full"
        viewBox="0 0 469 538"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="left"
          d="M234.349 18.5172H22.3765V520.984H234.349V18.5172Z"
          fill="#212121"
          stroke="#161616"
          strokeWidth="2"
        />
        <path
          className="right"
          d="M446.321 18.5172H234.349V520.984H446.321V18.5172Z"
          fill="#212121"
          stroke="#161616"
          strokeWidth="2"
        />
        <path
          opacity="0.22"
          d="M436.645 18.267H425.456H43.2411H33.8671H22.3765V520.984H43.2411V35.7832H425.456V520.984H446.321V18.267H436.645Z"
          fill="#222222"
        />
        <path d="M22.3765 9.25861H0V537.75H22.3765V9.25861Z" fill="#161616" />
        <path d="M469 538V9.25861L446.321 9.50884V538H469Z" fill="#161616" />
        <path
          d="M456.3 0H12.7002H0V18.5172H469V0.250233L456.3 0Z"
          fill="#161616"
        />
        <path
          d="M446.321 520.984H22.3765V538H446.321V520.984Z"
          fill="#161616"
        />
        <path
          d="M446.321 524.487H22.3765V527.74H446.321V524.487Z"
          fill="#161616"
        />
        <path
          d="M446.321 531.244H22.3765V534.497H446.321V531.244Z"
          fill="#222222"
        />
      </svg>
    </>
  );
}

export default Elevator;
