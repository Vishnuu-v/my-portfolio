import Image from "next/image";
import TechIcons from "./TechIcons";
import { FaChevronDown } from "react-icons/fa";

export default function Intro() {
  return (
    <div className="bg-intro-bg bg-cover mt-14 w-full flex flex-col items-center text-xl gap-4 sm:gap-6 relative pb-12 sm:pb-16 px-4">

      <div className="flex items-center mb-4">
        <Image
          src="/images/myphoto.svg"
          alt="Developer image"
          width={80}
          height={80}
          className="rounded-full border-2 border-orange-500 bg-yellow-200"
          priority
        />
      </div>

      <p className="text-[#C0C4CE] text-lg sm:text-xl text-center">
        Hi there! I&apos;m <span className="text-[#E3646E]">Vishnu V</span>, and I bring ideas to life as a
      </p>

      <h1 className="text-[#E2E4E9] text-3xl sm:text-4xl md:text-5xl text-center font-bold">
        Fullstack Developer
      </h1>

      <p className="text-[#878EA1] text-sm sm:text-base md:text-lg text-center max-w-xl sm:max-w-3xl">
        I turn ideas into dynamic, functional applications that evolve with your needs. Driven by a passion for technology, I create systems that not only solve complex problems but also inspire innovation and deliver lasting impact.
      </p>

      <TechIcons />

      <a href="#projects" className="absolute bottom-4 sm:bottom-6 flex flex-col items-center cursor-pointer">
        <FaChevronDown className="text-[#C0C4CE] text-2xl sm:text-3xl animate-bounce" />
      </a>
    </div>
  );
}
