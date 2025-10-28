const About = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Om oss</h2>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Bock & Lintott är två hantverkare med passion för design och kvalitet. Vi arbetar med
              allt från finsnickeri och fönsterrenovering till målning och restaurering av möbler.
            </p>
            <p>
              Vår inspiration kommer från sekelskiftets formspråk, men vi tolkar det på vårt eget
              sätt – med råhet, modernitet och attityd. Vi tror på ärlighet i material och hantverk,
              där varje projekt får sin egen karaktär.
            </p>
            <p className="font-medium text-foreground">
              Välkommen till vårt showroom och butik i Holma, Hälsingland. Här kan du se våra projekt
              och få inspiration för ditt hem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
