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
    <title>Omar Alali&apos;s Portfolio</title>
    <meta name="description" content="Discover Omar Alali's portfolio: a blend of innovative design and tech. See how creativity and expertise shape impactful digital experiences."/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content="https://www.3spoen.de/"/>
    <meta property="og:title" content="Omar Alali's Portfolio"/>
    <meta property="og:description" content="Discover Omar Alali's portfolio: a blend of innovative design and tech. See how creativity and expertise shape impactful digital experiences."/>

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