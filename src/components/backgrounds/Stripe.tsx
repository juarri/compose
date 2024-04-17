import cn from "classnames";

export type StripeBackgroundProps = {
  children?: React.ReactNode;
  className?: string;
};

const StripeBackground = ({ children, className }: StripeBackgroundProps) => {
  return (
    <div
      className={(cn("absolute inset-0 z-0 animate-bg-pan"), className)}
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fafafa' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\")",
        backgroundSize: 12,
      }}
    >
      {children}
    </div>
  );
};

export default StripeBackground;
