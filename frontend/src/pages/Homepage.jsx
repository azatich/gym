import React from "react";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import TrainingSection from "../components/TrainingSection";

export default function Homepage() {
  return (
    <>
      <div className="bg-main h-screen">
        <Header />
        <MainContent />
      </div>
      <TrainingSection />
    </>
  );
}
