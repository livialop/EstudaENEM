import React from "react";
import "../App.css";
import Navbar from "./homepage/Navbar";
import Hero from "./homepage/Hero";
import Features from "./homepage/Features";
import Footer from "./homepage/Footer";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </>
  );
}
