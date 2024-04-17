import { StripeBackground } from "../backgrounds";

type HeaderProps = {
  children: React.ReactNode;
};

const Header = ({ children }: HeaderProps) => {
  return (
    <header className="relative border-b-2 border-gray-200">
      <StripeBackground>
        <div className="container mx-auto px-4 py-4 relative">{children}</div>
      </StripeBackground>
    </header>
  );
};

export default Header;
