const Footer = () => {
  return (
    <footer className="py-6 md:px-8 md:py-0 bg-black text-gray-300">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built &amp; designed by{" "}
          <a
            href="https://juarri.com"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Julian Rivera
          </a>
          . Source code is available on{" "}
          <a
            href="https://github.com/juarri/interval-timer"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
