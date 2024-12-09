import React from "react";

interface Product {
  id: number;
  name: string;
  img: string;
}

const products: Product[] = [
  { id: 1, name: "Chair 1", img: "/images/chair1.png" },
  { id: 2, name: "Chair 2", img: "/images/chair2.png" },
  { id: 3, name: "Chair 3", img: "/images/chair3.png" },
];

const FeaturedProducts: React.FC = () => {
  return (
    <div className="bg-white py-10">
      <h3 className="text-center text-2xl font-bold mb-6">Featured Products</h3>
      <div className="flex justify-center space-x-6">
        {products.map((product) => (
          <div key={product.id} className="p-4 border rounded shadow-md">
            <img
              src={product.img}
              alt={product.name}
              className="h-32 w-32 object-cover"
            />
            <h4 className="mt-4">{product.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
