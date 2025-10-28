import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Alla fält måste fyllas i",
        variant: "destructive",
      });
      return;
    }

    // In a real implementation, this would send the form data to a backend
    toast({
      title: "Meddelande skickat!",
      description: "Vi återkommer till dig så snart som möjligt.",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Kontakt</h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Har du ett projekt i åtanke eller vill veta mer om vårt hantverk? Hör av dig så
              berättar vi mer.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground p-3 rounded-sm">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-medium mb-1">E-post</p>
                  <a
                    href="mailto:info@bocklintott.se"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    info@bocklintott.se
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground p-3 rounded-sm">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-medium mb-1">Telefon</p>
                  <a
                    href="tel:+46701234567"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    +46 70 123 45 67
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Ditt namn"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-card"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Din e-post"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-card"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Ditt meddelande"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="bg-card resize-none"
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Skicka meddelande
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
