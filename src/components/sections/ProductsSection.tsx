
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";

const ProductsSection = () => {
  const products = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M2 22h20"></path><path d="M12 2v8"></path><path d="M12 10v12"></path><path d="M12 10a4 4 0 0 0-4-4H6"></path><path d="M12 10a4 4 0 0 1 4-4h2"></path></svg>,
      title: "Oil and Gas Industry",
      items: [
        "Digital Field", 
        "Oil and gas asset investment valuation", 
        "Digital twins and computer simulators",
        "Automated Greenhouse Gas Accounting"
      ]
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 2H2v10h10V2Z"></path><path d="M22 2h-5v5h5V2Z"></path><path d="M22 12h-5v10h5V12Z"></path><path d="M12 12H7v5h5v-5Z"></path><path d="M7 12H2v10h5V12Z"></path></svg>,
      title: "AI Solutions",
      items: [
        "Car plates, items and face recognition", 
        "Fraud prevention", 
        "Merchandize control"
      ]
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>,
      title: "Cybersecurity",
      items: [
        "Advanced threat protection", 
        "Network security monitoring", 
        "Vulnerability management"
      ]
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>,
      title: "Access Control Systems",
      items: [
        "Biometric authentication", 
        "Smart card access", 
        "Integrated security solutions"
      ]
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect width="16" height="16" x="4" y="4" rx="2"></rect><circle cx="9" cy="9" r="1"></circle><circle cx="15" cy="9" r="1"></circle><path d="M8 14h8"></path></svg>,
      title: "Warehouse Robotization",
      items: [
        "Automated picking systems", 
        "Inventory management robots", 
        "Logistics optimization"
      ]
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>,
      title: "Additional Solutions",
      items: [
        "Adaptive learning platform", 
        "Industrial drones", 
        "Charity IT Platform"
      ]
    },
  ];

  return (
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
          {products.map((product, index) => (
            <ProductCard 
              key={index}
              icon={product.icon}
              title={product.title}
              items={product.items}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-primary text-white hover:bg-primary/90">
            View All Solutions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
