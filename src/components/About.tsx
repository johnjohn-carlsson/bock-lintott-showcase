const About = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Välkommen till Bock & Lintott</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Kreativa hantverkare som kombinerar traditionellt hantverk med modern design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-border p-8 text-center hover:border-primary transition-colors">
            <h3 className="text-xl font-bold mb-4">Finsnickeri</h3>
            <p className="text-muted-foreground">
              Precision och hantverksskicklighet i varje detalj. Vi skapar skräddarsydda lösningar i trä.
            </p>
          </div>

          <div className="border border-border p-8 text-center hover:border-primary transition-colors">
            <h3 className="text-xl font-bold mb-4">Fönsterrenovering</h3>
            <p className="text-muted-foreground">
              Restaurering av historiska fönster med respekt för originalet och sekelskiftets formspråk.
            </p>
          </div>

          <div className="border border-border p-8 text-center hover:border-primary transition-colors">
            <h3 className="text-xl font-bold mb-4">Egen Design</h3>
            <p className="text-muted-foreground">
              Möbeldesign och restaurering som kombinerar tradition med modern attityd.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
