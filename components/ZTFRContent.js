import ZTFR from "@/public/media/ZTFRX B.svg";
import Image from "next/image";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const ZTFRContent = () => {
  const [text] = useTypewriter({
    words: ["CONTENT CREATOR."],
    loop: 1, // Set to false for a one-time typing effect
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 1500, // Delay after typing
  });

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <Image src={ZTFR} className="w-[32vw] h-[32vh] invert" alt="ZTFR" />
      <div className="w-full max-w-3xl flex justify-start">
        <p className="text-2xl">
          {text}
          <Cursor />
        </p>
      </div>
    </div>
  );
};

export default ZTFRContent;
