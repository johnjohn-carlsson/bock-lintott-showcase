import { MapPin, Clock, Phone } from "lucide-react";

const Showroom = () => {
  return (
    <section id="showroom" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Showroom & Butik</h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-12">
            <p>
              Välkommen till vårt showroom i Holma, Hälsingland! Här kan du se 
              exempel på vårt hantverk, inspireras av våra projekt och köpa 
              renoverade möbler och designobjekt.
            </p>
            
            <p>
              I vårt showroom hittar du ett noggrant kurerat urval av möbler och 
              interiörprodukter. Allt är handgjort med kärlek till detaljer och 
              kvalitet. Vi tar också emot specialbeställningar och diskuterar 
              gärna dina idéer för skräddarsydda lösningar.
            </p>
          </div>

          <div className="bg-background rounded-lg p-8 space-y-6">
            <h3 className="text-2xl font-bold mb-6">Besöksinformation</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold mb-1">Adress</h4>
                  <p className="text-muted-foreground">
                    Holma, Hälsingland
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold mb-1">Öppettider</h4>
                  <p className="text-muted-foreground">
                    Besök efter överenskommelse<br />
                    Kontakta oss för att boka ett besök
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold mb-1">Kontakt</h4>
                  <p className="text-muted-foreground">
                    Boka tid genom vårt kontaktformulär nedan
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-primary/5 rounded-lg border-l-4 border-primary">
            <p className="text-muted-foreground">
              <strong className="text-foreground">Tips:</strong> Planerar du ett större projekt? 
              Boka ett besök så kan vi diskutera dina behov och visa exempel på 
              material och finish direkt i vår verkstad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showroom;
