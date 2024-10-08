import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Lenis from "lenis";
import Image from "next/image";
import SvgTransition from "@/components/SvgTransition";
import Logo from "@/public/Group 3005.svg";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const containerRef1 = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.1,
      duration: 1.2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-400vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "80% top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  useEffect(() => {
    gsap.fromTo(
      containerRef1.current,
      { scale: 1 }, // Initial scale
      {
        scale: 200, // Final scale
        transformOrigin: "center center",
        duration: 10,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#zoomable-logo",
          scrub: 1,
          start: "top top",
          end: "+=100% 0",
          pin: true,
          markers: true,
        },
      }
    );
  }, []);

  return (
    <>
      <div
        id="zoomable-logo"
        className="relative h-screen w-full bg-black overflow-x-hidden overflow-y-hidden"
      >
        <svg
          ref={containerRef1}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[284px] text-white"
          xmlns="http://www.w3.org/2000/svg"
          width="184.896"
          height="50"
          viewBox="0 0 184.896 50"
        >
          <path
            id="Path_7808"
            data-name="Path 7808"
            d="M231.6,160.265v-1.046a16.737,16.737,0,0,0-1.046-4.949c-1.155-2.888-3.1-5.6-4.758-8.47-3.069-5.325-6.523-11.478-9.612-16.844-2.543-4.418-4.914-10.1-11.229-10.183-6.567-.091-8.751,5.708-11.134,9.9-7.567,13.3-23.031,40.066-23.031,40.066h7.137s14.755-26.108,22.079-39.3c.936-1.688,2.793-3.9,4.949-3.9,3.27,0,4.906,3.893,6.376,6.567,3.935,7.163,7.727,14.018,11.42,20.936,1.161,2.177,3.517,5.04,1.9,7.994-1.053,1.927-3.174,1.81-6.186,1.81,0,.049-29.121,0-29.121,0v5.9H215.8a62.376,62.376,0,0,0,8.754-.285C228.735,167.665,231.006,164.424,231.6,160.265Z"
            transform="translate(-46.703 -118.772)"
            fill="#fff"
          />
          <g id="Group_3285" data-name="Group 3285">
            <g id="Group_3282" data-name="Group 3282">
              <path
                id="Path_7809"
                data-name="Path 7809"
                d="M93.858,118.772v1.237a2.5,2.5,0,0,1-.494,1.448L61.632,165.768H93.576v3H56.826v-1.308a2.174,2.174,0,0,1,.425-1.272l31.8-44.418H57.745v-3Z"
                transform="translate(-56.826 -118.772)"
                fill="#fff"
              />
            </g>
            <g
              id="Group_3283"
              data-name="Group 3283"
              transform="translate(49.257)"
            >
              <path
                id="Path_7810"
                data-name="Path 7810"
                d="M105.7,168.772h-3.64v-50h3.64Z"
                transform="translate(-102.065 -118.772)"
                fill="#fff"
              />
            </g>
            <g
              id="Group_3284"
              data-name="Group 3284"
              transform="translate(68.951)"
            >
              <path
                id="Path_7811"
                data-name="Path 7811"
                d="M145.1,156.333c.142-.376.289-.748.442-1.113a9.271,9.271,0,0,1,.513-1.043L165.7,119.443a1.283,1.283,0,0,1,.566-.565,2.282,2.282,0,0,1,.777-.106h2.509v50h-3.18V126.156a18.937,18.937,0,0,1,.107-1.944L146.8,159.161a1.542,1.542,0,0,1-1.413.918h-.566a1.59,1.59,0,0,1-1.412-.918l-20.213-34.983a19.193,19.193,0,0,1,.106,1.978v42.616h-3.145v-50h2.474a2.443,2.443,0,0,1,.795.106,1.255,1.255,0,0,1,.584.565l20.176,34.771A14.409,14.409,0,0,1,145.1,156.333Z"
                transform="translate(-120.152 -118.772)"
                fill="#fff"
              />
            </g>
          </g>
        </svg>
      </div>
      <section className="scroll-section-outer overflow-hidden">
        <div ref={triggerRef}>
          <div
            ref={sectionRef}
            className="scroll-section-inner h-screen w-[2000vw] flex flex-row relative"
          >
            <div className="scroll-section h-screen w-screen flex justify-center items-center relative">
              <section className="flex-shrink-0 w-screen h-screen bg-black text-[#BE9F56] flex items-center justify-center scroll-snap-start">
                <Image src={Logo} />
                <div class="text-center mx-3 lg:text-[25px] 2xl:text-[30px] tracking-wider uppercase">
                  <p>We are the global platform.</p>
                  <p class="mt-3">
                    Services in over one hundred and twenty countries.
                  </p>
                </div>
              </section>
            </div>
            <div className="scroll-section h-screen w-screen flex justify-center items-center relative">
              <section className="flex-shrink-0 w-screen h-screen bg-[#737373] text-white flex flex-col items-center justify-center scroll-snap-start">
                <h2 class="text-[25px] font-normal uppercase tracking-wider">
                  Bringing the world closer together.
                </h2>
                <Image src={Logo} />
              </section>
            </div>
            <div className="scroll-section h-screen w-screen flex justify-center items-center relative">
              <section className="flex-shrink-0 w-screen h-screen bg-[#BE9F56] text-white flex items-center justify-center scroll-snap-start">
                <div class="flex justify-center items-center min-h-screen relative z-10">
                  <h4 class="text-[16px] lg:text-[25px] text-center uppercase text-white tracking-wider ">
                    A REAL ESTATE AND PROPERTY PLATFORM THAT WILL CHANGE THE
                    WORLD.
                  </h4>
                </div>
              </section>
            </div>
            <div className="scroll-section h-screen w-screen flex justify-center items-center relative">
              <section className="flex-shrink-0 w-screen h-screen bg-black text-white flex items-center justify-center scroll-snap-start">
                <SvgTransition />
              </section>
            </div>
            <div className="scroll-section h-screen w-screen flex justify-center items-center relative">
              <section className="flex-shrink-0 w-screen h-screen bg-black text-white flex items-center justify-center scroll-snap-start">
                <Image src={Logo} />
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
