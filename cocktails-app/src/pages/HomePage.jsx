import React from "react";
import Hero from "../components/Hero";
import Cocktails from "../components/Cocktails";

const HomePage = () => {
  return (
    <main className="container-xl h-screen">
      <Hero />
      <Cocktails />
      <div></div>
    </main>
  );
};

export default HomePage;
