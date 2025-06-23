import { Benefits } from "@/components/landing/Benefits";
import { Features } from "@/components/landing/Features";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { Navbar } from "@/components/landing/Navbar";
import Pricing from "@/components/landing/Pricing";
import React from "react";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Pricing/>
      <Benefits />
      <Footer />
    </div>
  );
};

export default Landing;
