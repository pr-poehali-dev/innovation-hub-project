
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Навигация */}
      <header className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-primary">INNOVATION HUB</h1>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-700 hover:text-primary transition">About Us</a>
            <a href="#products" className="text-gray-700 hover:text-primary transition">Core Products</a>
            <a href="#contacts" className="text-gray-700 hover:text-primary transition">Contacts</a>
          </nav>
        </div>
      </header>

      {/* Главный экран */}
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

      {/* About Us */}
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

      {/* Core Products */}
      <section id="products" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Products</h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Cutting-edge solutions designed to transform industries and drive innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Oil and Gas */}
            <div className="bg-white p-8 rounded-lg shadow-sm border hover:shadow-md transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M2 22h20"></path><path d="M12 2v8"></path><path d="M12 10v12"></path><path d="M12 10a4 4 0 0 0-4-4H6"></path><path d="M12 10a4 4 0 0 1 4-4h2"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Oil and Gas Industry</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Digital Field</li>
                <li>• Oil and gas asset investment valuation</li>
                <li>• Digital twins and computer simulators</li>
                <li>• Automated Greenhouse Gas Accounting</li>
              </ul>
            </div>

            {/* AI Solutions */}
            <div className="bg-white p-8 rounded-lg shadow-sm border hover:shadow-md transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 2H2v10h10V2Z"></path><path d="M22 2h-5v5h5V2Z"></path><path d="M22 12h-5v10h5V12Z"></path><path d="M12 12H7v5h5v-5Z"></path><path d="M7 12H2v10h5V12Z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">AI Solutions</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Car plates, items and face recognition</li>
                <li>• Fraud prevention</li>
                <li>• Merchandize control</li>
              </ul>
            </div>

            {/* Cybersecurity */}
            <div className="bg-white p-8 rounded-lg shadow-sm border hover:shadow-md transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Cybersecurity</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Advanced threat protection</li>
                <li>• Network security monitoring</li>
                <li>• Vulnerability management</li>
              </ul>
            </div>

            {/* Access Control */}
            <div className="bg-white p-8 rounded-lg shadow-sm border hover:shadow-md transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Access Control Systems</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Biometric authentication</li>
                <li>• Smart card access</li>
                <li>• Integrated security solutions</li>
              </ul>
            </div>

            {/* Warehouse Robotization */}
            <div className="bg-white p-8 rounded-lg shadow-sm border hover:shadow-md transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect width="16" height="16" x="4" y="4" rx="2"></rect><circle cx="9" cy="9" r="1"></circle><circle cx="15" cy="9" r="1"></circle><path d="M8 14h8"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Warehouse Robotization</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Automated picking systems</li>
                <li>• Inventory management robots</li>
                <li>• Logistics optimization</li>
              </ul>
            </div>

            {/* Other Solutions */}
            <div className="bg-white p-8 rounded-lg shadow-sm border hover:shadow-md transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Additional Solutions</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Adaptive learning platform</li>
                <li>• Industrial drones</li>
                <li>• Charity IT Platform</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-primary text-white hover:bg-primary/90">
              View All Solutions
            </Button>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Let's discuss how our innovative solutions can transform your business. 
              Reach out to our team to schedule a consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1616782910736-05c4a9c2ae9d?q=80&w=1974" 
                alt="Qatar skyline" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                  </div>
                  <div>
                    <p className="text-sm opacity-75">Email</p>
                    <p>info@innovationhub.qa</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <div>
                    <p className="text-sm opacity-75">Phone</p>
                    <p>+974 4012 0120</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <div>
                    <p className="text-sm opacity-75">Address</p>
                    <p>Level 14, Commercial Bank Plaza, West Bay, Doha, Qatar</p>
                  </div>
                </div>
              </div>
              
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 w-full">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">INNOVATION HUB</h2>
              <p className="text-gray-400 mt-2">Pioneering Qatar's digital future</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 pb-4">
            <p className="text-center text-gray-500">© {new Date().getFullYear()} INNOVATION HUB. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
