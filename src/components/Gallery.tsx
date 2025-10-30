import { useState, useEffect } from "react";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Gallery = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const images = [
    { src: work1, alt: "Fönsterrenovering - Restaurering av historiska fönster" },
    { src: work2, alt: "Möbelrestaurering - Förnyat liv till klassiska möbler" },
    { src: work3, alt: "Egen design - Skräddarsydda möbler" },
  ];

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section id="gallery" className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Välkommen till Bock & Lintott</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Kreativa hantverkare som kombinerar traditionellt hantverk med modern design
          </p>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Galleri</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ett urval av våra projekt – från fönsterrenovering till möbelrestaurering och egen design.
          </p>
        </div>

        <div className="w-full max-w-5xl mx-auto space-y-4 overflow-hidden">
          <Carousel 
            setApi={setApi} 
            className="w-full px-12"
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <div className="aspect-[4/3] overflow-hidden rounded-lg bg-muted">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          <div className="flex justify-center gap-2 px-12">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`relative aspect-square w-20 overflow-hidden rounded-md transition-all ${
                  current === index
                    ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={image.src}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
