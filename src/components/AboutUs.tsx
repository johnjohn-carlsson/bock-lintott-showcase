const AboutUs = () => {
  return (
    <section id="om-oss" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Om oss</h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Bock & Lintott är ett hantverksföretag specialiserat på finsnickeri, 
              renovering och egen design. Vi kombinerar traditionellt hantverk med 
              modern design för att skapa unika möbler och interiörlösningar.
            </p>
            
            <p>
              Med passion för trä och ögon för detaljer skapar vi allt från 
              fönsterrenovering till skräddarsydda möbler. Varje projekt är unikt 
              och utförs med omsorg och precision.
            </p>
            
            <p>
              Baserade i Holma, Hälsingland, arbetar vi med kunder som värderar 
              kvalitet, hantverk och tidlös design. Vi tar hand om både stora och 
              små projekt med samma engagemang och professionalism.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3">Finsnickeri</h3>
              <p className="text-muted-foreground">
                Skräddarsydda möbler och interiörlösningar tillverkade med 
                precision och kvalitet.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">Renovering</h3>
              <p className="text-muted-foreground">
                Expert på fönsterrenovering och restaurering av gamla möbler 
                och träarbeten.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">Egen Design</h3>
              <p className="text-muted-foreground">
                Unika designlösningar som kombinerar funktion med estetik 
                och personlighet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
