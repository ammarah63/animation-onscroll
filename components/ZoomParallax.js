import React, { useEffect, useRef } from "react";
import ZTFRX from "@/public/media/ZTFRX 2 Trans W.svg";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const ZoomParallax = () => {
  const containerRef1 = useRef(null);

  useEffect(() => {
    gsap.to(containerRef1.current, {
      scale: 135,
      duration: 3,
      ease: "power1.inOut",
    });
  }, []);
  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <Image ref={containerRef1} src={ZTFRX} className="w-2/12 h-2/12" />
      </div>
    </>
  );
};

export default ZoomParallax;
