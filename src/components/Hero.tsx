import heroImage from "@/assets/hero.jpg";
import logo from "@/assets/logo.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.4)",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32">
        <div className="max-w-3xl">
          <div className="mb-12">
            <img
              src={logo}
              alt="Bock & Lintott"
              className="w-full max-w-md h-auto"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </div>
          <h2 className="text-2xl md:text-3xl text-white mb-6 font-light tracking-wide">
            Kreativa hantverkare i Holma, Hälsingland
          </h2>
          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            Vi kombinerar finsnickeri, fönsterrenovering och egen design med sekelskiftets formspråk
            – tolkat på vårt sätt. Rått, modernt och med attityd.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
