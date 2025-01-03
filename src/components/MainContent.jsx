import React from "react";
import Button from "./Button";

export default function MainContent() {
  return (
    <div className="pt-40 pl-20">
      <div className="max-w-[400px]">
        <p className="text-white text-5xl font-orbitron font-bold">
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "1px red" }}
          >
            Unleash
          </span>{" "}
          your Inner Athlete
        </p>
      </div>
      <div className="mt-10 max-w-[570px]">
        <p className="text-white font-outfit">
          Get ready to sweat it out and achieve your fitness goals with our
          high-energy fitness classes! Our classes are designed to cater to all
          fitness levels and provide a fun and motivating environment to help
          you reach your peak performance.
        </p>
      </div>
      <Button className="mt-10 font-outfit" variant="primary">
        Start free trial
      </Button>
    </div>
  );
}
