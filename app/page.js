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
    <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Omar Alali's Portfolio</title>
        <meta name="description" content="Discover Omar Alali's portfolio: a blend of innovative design and tech. See how creativity and expertise shape impactful digital experiences."/>
        <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://www.3spoen.de/"/>
        <meta property="og:title" content="Omar Alali's Portfolio"/>
        <meta property="og:description" content="Discover Omar Alali's portfolio: a blend of innovative design and tech. See how creativity and expertise shape impactful digital experiences."/>
        {/* Add og:image tag with an absolute URL to an image */}
        <meta property="og:image" content="https://www.3spoen.de/images/LOGO_2.png"/>
      </Head>
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
    </>

  );
}