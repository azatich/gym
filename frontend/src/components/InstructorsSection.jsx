import React from "react";
import instructor1 from "../assets/images/instructor1.png";
import instructor2 from "../assets/images/instructor2.png";
import instructor3 from "../assets/images/instructor3.png";
import instructor4 from "../assets/images/instructor4.png";

export default function InstructorsSection() {
  return (
    <div className="relative h-screen mt-16">
      <h1 className="text-center text-white text-4xl font-outfit font-medium">
        Instructors
      </h1>
      <div className="grid grid-cols-4 px-24 mt-10">
        <div className="flex justify-center">
          <div>
            <img
              src={instructor1}
              alt="trainer one"
              className="max-w-[15rem]"
            />
            <h1 className="text-white font-outfit text-center text-2xl mt-5">
              Jacon Jones
            </h1>
            <h3 className="text-white font-outfit text-center font-light">
              Gym trainer
            </h3>
          </div>
        </div>
        <div className="flex justify-center">
          <div>
            <img
              src={instructor2}
              alt="trainer one"
              className="max-w-[15rem]"
            />
            <h1 className="text-white font-outfit text-center text-2xl mt-5">
              Leslie Alexander
            </h1>
            <h3 className="text-white font-outfit text-center font-light">
              Gym trainer
            </h3>
          </div>
        </div>
        <div className="flex justify-center">
          <div>
            <img
              src={instructor3}
              alt="trainer one"
              className="max-w-[15rem]"
            />
            <h1 className="text-white font-outfit text-center text-2xl mt-5">
              Isenbai Merey
            </h1>
            <h3 className="text-white font-outfit text-center font-light">
              Gym trainer
            </h3>
          </div>
        </div>
        <div className="flex justify-center">
          <div>
            <img
              src={instructor4}
              alt="trainer one"
              className="max-w-[15rem]"
            />
            <h1 className="text-white font-outfit text-center text-2xl mt-5">
              Anna Cooper
            </h1>
            <h3 className="text-white font-outfit text-center font-light">
              Gym trainer
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
