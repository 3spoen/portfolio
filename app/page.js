import Image from "next/image";
import HeroSection from "./Comp/HeroSection";
import Navbar from "./Comp/Navbar";
import AboutSec from "./Comp/AboutSec";
import ProjectsSection from "./Comp/ProjectsSection";
import { EmailSection } from "./Comp/EmailSection";
import { Footer } from "./Comp/Footer";
import Achievment from "./Comp/AchievementsSection"



export default function Home() {
  return (


    <main className="flex min-h-screen flex-col bg-slate-950">
    <Navbar />
    <div className="container mt-24 mx-auto px-12 py-4">
      <HeroSection/> 
      {/*<Achievment/>*/}
      <AboutSec/>
      <ProjectsSection/>
      <EmailSection/>
    </div>
    <Footer/>
    </main>

  );
}