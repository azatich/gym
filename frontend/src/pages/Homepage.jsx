import React, { useRef } from "react";
import Header from "../components/Header";
import MainContent from "../components/MainSection";
import ClassesSection from "../components/ClassesSection";
import MembershipSection from "../components/MembershipSection";
import InstructorsSection from "../components/InstructorsSection";
import { useNavigation } from "react-router-dom";
import Loader from "../components/Loader";

export default function Homepage() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  const classes = useRef(null);
  const membership = useRef(null);
  const instructors = useRef(null);

  return (
    <div className="bg-black">
      {isLoading && <Loader />}

      <div className="bg-main bg-cover bg-no-repeat h-screen">
        <Header
          classes={classes}
          membership={membership}
          instructors={instructors}
        />
        <MainContent />
      </div>
      <ClassesSection classes={classes} />
      <MembershipSection membership={membership} />
      <InstructorsSection instructors={instructors} />
    </div>
  );
}
