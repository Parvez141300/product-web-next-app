import React from "react";
import ProductCard from "./shared/ProductCard";

async function getProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/items`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}

const Products = async () => {
  const products = await getProducts();

  return (
    <div className="space-y-5 w-11/12 mx-auto my-8">
      <h1 className="text-xl font-bold">Products:({products?.length})</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {products?.map((product) => (
          <ProductCard key={product?._id} {...product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
