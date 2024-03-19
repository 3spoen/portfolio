import Image from "next/image";
import HeroSection from "./Comp/HeroSection";
import Navbar from "./Comp/Navbar";
import AboutSec from "./Comp/AboutSec";
import ProjectsSection from "./Comp/ProjectsSection";
import { EmailSection } from "./Comp/EmailSection";
import { Footer } from "./Comp/Footer";
import Achievment from "./Comp/AchievementsSection"
import Head from "next/head";


export default function Home() {
  return (
    <>
    
    <Head>
        <title>Omar Alali: Crafting Digital Experiences</title>
        <meta name="description" content="Discover Omar Alali's portfolio: a blend of innovative design and tech. See how creativity and expertise shape impactful digital experiences" />
        {/* Add other meta tags as needed */}
      </Head>
    <main className="flex min-h-screen flex-col bg-slate-950">
    <Navbar />
    <div class="container mt-24 mx-auto px-12 py-4">
      <HeroSection/> 
      {/*<Achievment/>*/}
      <AboutSec/>
      <ProjectsSection/>
      <EmailSection/>
    </div>
    <Footer/>
    </main>
    </>

  );
}