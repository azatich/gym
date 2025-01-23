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

  return (
    <button style={style} type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
}
