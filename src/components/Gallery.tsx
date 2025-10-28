import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";

const Gallery = () => {
  const works = [
    {
      image: work1,
      title: "Fönsterrenovering",
      description: "Restaurering av historiska fönster med respekt för originalet",
    },
    {
      image: work2,
      title: "Möbelrestaurering",
      description: "Förnyat liv till klassiska möbler med moderna färgsättningar",
    },
    {
      image: work3,
      title: "Egen design",
      description: "Skräddarsydda möbler som kombinerar tradition och nutid",
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Showroom</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Ett urval av våra projekt – från fönsterrenovering till möbelrestaurering och egen design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className="aspect-square overflow-hidden mb-4 bg-muted">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{work.title}</h3>
              <p className="text-muted-foreground">{work.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
