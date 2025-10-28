import heroImage from "@/assets/hero.jpg";
import logo from "@/assets/logo.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.5)",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32">
        <div className="text-center">
          <div className="mb-8 flex justify-center">
            <img
              src={logo}
              alt="Bock & Lintott"
              className="w-full max-w-md h-auto"
            />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-6 tracking-tight uppercase">
            Vi finns här för<br />
            alla typer av träarbete
          </h1>
          <div className="inline-block bg-foreground text-background px-8 py-3 font-bold tracking-wider text-sm">
            FINSNICKERI - RENOVERING - DESIGN
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
