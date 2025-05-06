
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-black text-white py-20 flex-grow">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Pioneering Innovation for Qatar's Future</h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8">Driving digital transformation with cutting-edge technological solutions</p>
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
            Explore Our Solutions <ArrowRight className="ml-2" size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
