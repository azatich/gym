import React from "react";
import hamburgerBg from "../assets/hamburgerBg.jpg";
export default function HamburgerMenu() {
  return (
    <div className="absolute inset-0 pointer-events-none lg:hidden">
      <div className="absolute inset-0 opacity-[.03]">
        <img
          className="w-full h-full object-cover"
          src={hamburgerBg}
          width={688}
          height={953}
          alt="Background"
        />
      </div>
    </div>
  );
}
