
import { ReactNode } from "react";

interface ProductCardProps {
  icon: ReactNode;
  title: string;
  items: string[];
}

const ProductCard = ({ icon, title, items }: ProductCardProps) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border hover:shadow-md transition">
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <ul className="space-y-2 text-gray-600">
        {items.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCard;
