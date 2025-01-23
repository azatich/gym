import React from "react";

export default function Section({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  ref,
  children,
}) {
  return (
    <div ref={ref} className={className || className}>
      {children}
    </div>
  );
}
