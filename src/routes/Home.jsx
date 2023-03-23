import React from "react";
import Navbar from "../layouts/Navbar";
import bg from "../bg.png";
import Hero from "../components/Hero";
import "../App.css"
import Content from "../components/Content";



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
        <Hero/>
      </section>
      <Content/>
    </>
  );
}
