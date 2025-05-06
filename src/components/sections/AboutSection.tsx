
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <video 
              className="w-full h-full object-cover"
              controls
              poster="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070"
            >
              <source src="#" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          <div>
            <p className="text-lg mb-6 leading-relaxed">
              For 15 years we've been providing extensive expertise and access to over 2000 innovative solutions across 15 industries.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              Qatari company created by H.E sheikh Suhaim bin Ahmed Al Thani and Ministry of the Digital Economy of the Republic of Tatarstan, It aims to contribute to the realisation of Qatar Vision 2030 and digital transformation through our pioneering and innovative technological solutions.
            </p>
            <Button variant="outline" className="mt-4">Learn More About Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
