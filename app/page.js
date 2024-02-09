import Image from "next/image";
import HeroSection from "./Comp/HeroSection";
import Navbar from "./Comp/Navbar";
import AboutSec from "./Comp/AboutSec";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-950">
    <Navbar />
    <div class="container mt-24 mx-auto px-12 py-4">
      <HeroSection/> 
      <AboutSec/>
    </div>
    </main>
  );
}