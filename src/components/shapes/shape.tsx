import { CSSProperties } from "react";

export type Shape = "square" | "circle" | "diamond";

function Shape({
  shape,
  color,
  style,
}: {
  shape: Shape;
  color: string;
  style?: CSSProperties;
}) {
  return (
    <div style={{ ...style }}>
      {shape === "square" && (
        <div
          className="relative size-5 rounded-sm"
          style={{ backgroundColor: color }}
        />
      )}

      {shape === "circle" && (
        <div
          className="relative size-5 rounded-full"
          style={{ backgroundColor: color }}
        />
      )}

      {shape === "diamond" && (
        <div
          className="relative size-5 rotate-45 rounded-sm"
          style={{ backgroundColor: color }}
        />
      )}
    </div>
  );
}

export default Shape;
