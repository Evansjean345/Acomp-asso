import React from "react";
import Navbar from "../layouts/Navbar";
import bg from "../bg.png";
import background from "../background.png"
import Hero from "../components/Hero";
import "../App.css";
import Content from "../components/Content";
import Footer from "../layouts/Footer";

export default function Home() {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${bg})`,
        }}
        className="bg-section bg-contain bg-no-repeat"
      >
        <Navbar />
        <Hero />
      </section>
      <section
        style={{
          backgroundImage: `url(${background})`,
        }}
        className="bg-cover bg-no-repeat"
      >
        <Content />
      </section>
      <Footer/>
    </>
  );
}
