import React from "react";
import img1 from "../assets/images/img1.png";
import zumba from "../assets/images/zumba.png";
import yoga from "../assets/images/yoga.png";
import martial from "../assets/images/martial.png";

export default function TrainingSection() {
  return (
    <div className="h-screen bg-[#1E1E1E]">
      <h1 className="text-center text-white text-4xl font-outfit font-medium">
        Find What Moves You
      </h1>
      <div className="flex items-center justify-center mt-8 space-x-4">
        <div className="flex justify-center w-5/12">
          <div className="flex flex-col items-center">
            <img
              src={img1}
              alt="gym"
              className="w-full h-auto rounded-tl-[150px]"
            />
            <div className="flex gap-10 max-w-[511px] mt-4">
              <span className="text-white font-outfit text-6xl">GYM</span>
              <p className="text-white font-outfit text-sm">
                Expect a heart-pumping workout that will leave you feeling
                energized and accomplished. Our supportive community of
                like-minded individuals.
              </p>
            </div>
          </div>
        </div>
        <div className="w-2/12">
          <img
            src={zumba}
            alt="zumba"
            className="w-40 object-cover rounded-tl-[50px]"
          />
        </div>
        <div className="w-2/12">
          <img
            src={yoga}
            alt="yoga"
            className="w-40 object-cover rounded-tl-[50px]"
          />
        </div>
        <div className="w-2/12">
          <img
            src={martial}
            alt="martial"
            className="w-40 object-cover rounded-tl-[50px]"
          />
        </div>
      </div>
    </div>
  );
}
