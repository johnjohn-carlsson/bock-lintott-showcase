const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} Bock & Lintott. Alla rättigheter förbehållna.
          </p>
          <p className="text-sm opacity-80">
            Holma, Hälsingland
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
