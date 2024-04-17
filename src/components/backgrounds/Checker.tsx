import cn from "classnames";

export type CheckerProps = {
  children?: React.ReactNode;
  className?: string;
};

const CheckerBackground = ({ children, className }: CheckerProps) => {
  return (
    <div
      className={cn(" inset-0 z-0 animate-bg-pan bg-amber-400", className)}
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cg fill='%23f59e0b' fill-opacity='0.35'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E\")",
        backgroundSize: 12,
      }}
    >
      {children}
    </div>
  );
};

export default CheckerBackground;
