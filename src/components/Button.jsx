import React from "react";

export default function Button({
  children,
  onClick,
  type,
  variant,
  className = "",
  style,
}) {
  if (variant === "primary")
    return (
      <button
        style={{
          clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)",
        }}
        className={`${
          className ? className : ""
        } bg-red-600 text-white pl-4 pr-6 py-2`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  return (
    <button style={style} type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
}
