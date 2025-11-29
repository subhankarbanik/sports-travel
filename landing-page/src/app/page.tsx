"use client";

import Hero from "../components/Hero";
import TopPackages from "../components/TopPackages";
import FeaturedEvent from "../components/FeaturedEvent";
import WhyChooseUs from "../components/WhyChooseUs";
import HowItWorks from "../components/HowItWorks";
import ItineraryScroller from "../components/ItineraryScroller";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="font-sans  bg-[url('/image.tsx')] bg-cover bg-center bg-no-repeat bg-[#F9FAFC]" >
      <Navbar />
      <Hero />
      

      <div className="space-y-10" >
        <TopPackages />
        {/* <FeaturedEvent /> */}
        <WhyChooseUs />
        <HowItWorks />
        <ItineraryScroller />
      </div>
    </main>
  );
}
