import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Services from "@/components/Services";

export default function Home () {
  return (
    <div className="flex flex-col justify-center items-center bg-[#16181D]">
      <Intro/>
      <div id='projects' className="flex justify-center items-center w-full">
      <Projects/>
      </div>
      <Services/>
      <Contact/>
    </div>
  )
}