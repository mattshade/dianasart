import { Navigation } from "@/app/components/Navigation";
import { Hero } from "@/app/components/Hero";
import { Introduction } from "@/app/components/Introduction";
import { WhyFlowArt } from "@/app/components/WhyFlowArt";
import { WhatToExpect } from "@/app/components/WhatToExpect";
import { WorkshopDetails } from "@/app/components/WorkshopDetails";
import { Pricing } from "@/app/components/Pricing";
import { AboutFacilitator } from "@/app/components/AboutFacilitator";
import { Contact } from "@/app/components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Introduction />
      <WhyFlowArt />
      <WhatToExpect />
      <WorkshopDetails />
      <Pricing />
      <AboutFacilitator />
      <Contact />
    </div>
  );
}