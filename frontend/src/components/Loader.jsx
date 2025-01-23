import React from "react";
import { BlinkBlur } from "react-loading-indicators";

export default function Loader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm z-10">
      <BlinkBlur color="#d12a28" size="medium" text="" textColor="" />
    </div>
  );
}
