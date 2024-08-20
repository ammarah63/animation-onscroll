import { useEffect, useState } from "react";
import Image from "next/image";
import ZTFR from "@/public/media/ZTFR-w (1).svg";
import ZoomParallax from "@/components/ZoomParallax";
import ZTFRContent from "@/components/ZTFRContent";

const ZTFRX = () => {
  const [bgColor, setBgColor] = useState("bg-gray-500");
  const [showZoomParallax, setShowZoomParallax] = useState(false);
  const [showZTFRContent, setShowZTFRContent] = useState(false);

  useEffect(() => {
    const colorTimer = setTimeout(() => {
      setBgColor("bg-black");
    }, 5000);

    const zoomParallaxTimer = setTimeout(() => {
      setShowZoomParallax(true);
    }, 7000);

    const contentTimer = setTimeout(() => {
      setShowZoomParallax(false);
      setShowZTFRContent(true);
    }, 10000);

    return () => {
      clearTimeout(colorTimer);
      clearTimeout(zoomParallaxTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <div
      className={`flex h-screen overflow-hidden justify-center items-center transition-colors duration-1000 ${bgColor}`}
    >
      {!showZoomParallax && !showZTFRContent ? (
        <Image src={ZTFR} className="w-2/12 h-2/12 animate-pulse" />
      ) : showZoomParallax ? (
        <ZoomParallax />
      ) : showZTFRContent ? (
        <ZTFRContent />
      ) : null}
    </div>
  );
};

export default ZTFRX;
