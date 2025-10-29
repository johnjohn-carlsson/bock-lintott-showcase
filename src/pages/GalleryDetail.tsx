import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";

const GalleryDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const galleries = {
    fonsterrenovering: {
      title: "Fönsterrenovering",
      description: "Restaurering av historiska fönster med respekt för originalet. Vi bevarar ursprunglig karaktär samtidigt som vi förbättrar funktionalitet och energieffektivitet.",
      images: [work1, work1, work1],
    },
    mobelrestaurering: {
      title: "Möbelrestaurering",
      description: "Förnyat liv till klassiska möbler med moderna färgsättningar. Vi kombinerar traditionella tekniker med samtida design för ett unikt uttryck.",
      images: [work2, work2, work2],
    },
    "egen-design": {
      title: "Egen Design",
      description: "Skräddarsydda möbler som kombinerar tradition och nutid. Varje projekt är unikt och designat efter dina önskemål och behov.",
      images: [work3, work3, work3],
    },
  };

  const gallery = galleries[slug as keyof typeof galleries];

  if (!gallery) {
    navigate("/");
    return null;
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-8"
          >
            <ArrowLeft className="mr-2" size={20} />
            Tillbaka till galleri
          </Button>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">{gallery.title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-12">
            {gallery.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.images.map((image, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden bg-muted rounded-lg"
              >
                <img
                  src={image}
                  alt={`${gallery.title} ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GalleryDetail;
