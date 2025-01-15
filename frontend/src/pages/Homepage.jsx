import React from "react";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import TrainingSection from "../components/TrainingSection";
import SubscriptionSection from "../components/SubscriptionSection";
import InstructorsSection from "../components/InstructorsSection";

export default function Homepage() {
  return (
    <div className="bg-black">
      <div className="bg-main bg-cover bg-no-repeat h-screen">
        <Header />
        <MainContent />
      </div>
      <TrainingSection />
      <SubscriptionSection />
      <InstructorsSection />
    </div>
  );
}
