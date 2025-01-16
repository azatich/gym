import React from "react";
import { Link } from "react-router-dom";

export default function Button({
  children,
  onClick,
  type,
  variant,
  className = "",
  style,
  to,
}) {
  if (to && type !== "submit") {
    return (
      <Link to={to} className={`${className ? className : ""}`}>
        {children}
      </Link>
    );
  }

  if (variant === "primary") {
    return (
      <button
        style={{
          clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)",
        }}
        className={`${
          className ? className : ""
        } bg-red-500 text-white pl-4 pr-6 py-2 hover:bg-red-900 ease-in-out duration-300`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    );
  }

  return (
    <button style={style} type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
}
