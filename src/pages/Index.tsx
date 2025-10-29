import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import AboutUs from "@/components/AboutUs";
import Showroom from "@/components/Showroom";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Gallery />
      <AboutUs />
      <Showroom />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
