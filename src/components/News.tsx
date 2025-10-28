import { Calendar, MapPin } from "lucide-react";

const News = () => {
  return (
    <section id="news" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Aktuellt</h2>

          <div className="space-y-8">
            <div className="border-l-4 border-primary pl-6 py-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <MapPin size={16} />
                <span>Holma, Hälsingland</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Showroom & Butik</h3>
              <p className="text-muted-foreground leading-relaxed">
                Vi öppnar snart vårt showroom och butik i Holma. Här kan du se våra projekt,
                köpa renoverade möbler och få inspiration för ditt hem. Välkommen!
              </p>
            </div>

            <div className="border-l-4 border-accent pl-6 py-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Calendar size={16} />
                <span>Kommande event</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">HOLMA Market</h3>
              <p className="text-muted-foreground leading-relaxed">
                Vi deltar i HOLMA Market där vi visar upp vårt hantverk tillsammans med andra
                lokala kreatörer. Mer information kommer snart om datum och plats.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
