
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
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
              <ContactItem 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>}
                label="Email"
                value="info@innovationhub.qa"
              />
              
              <ContactItem 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>}
                label="Phone"
                value="+974 4012 0120"
              />
              
              <ContactItem 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>}
                label="Address"
                value="Level 14, Commercial Bank Plaza, West Bay, Doha, Qatar"
              />
            </div>
            
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90 w-full">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const ContactItem = ({ icon, label, value }: ContactItemProps) => (
  <div className="flex items-center gap-4 mb-4">
    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
      {icon}
    </div>
    <div>
      <p className="text-sm opacity-75">{label}</p>
      <p>{value}</p>
    </div>
  </div>
);

export default ContactSection;
