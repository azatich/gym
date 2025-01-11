import React from "react";

export default function GradientCirclesForLoginPage() {
  return (
    <div>
      <div className="absolute left-[35rem] top-[3rem] w-[150px] h-[150px] rounded-full bg-gradient-to-r from-red-500 to-violet-800" />
      <div className="absolute right-[30rem] bottom-[7rem] w-[130px] h-[130px] rounded-full bg-gradient-to-r from-fuchsia-300 to-violet-950" />
      <div className="absolute left-[38rem] bottom-[5rem] w-[100px] h-[100px] rounded-full bg-gradient-to-r from-blue-500 to-violet-800" />
    </div>
  );
}
