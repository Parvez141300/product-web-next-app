import React from "react";
import ProductCard from "../shared/ProductCard";
// export const dynamic = "force-dynamic";

async function getSingleProduct(id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/items/${id}`,
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}
async function getProducts(id) {
  try{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/items`, {
      cache: "no-store",
    });
    // if (!res.ok) throw new Error("Failed to fetch product");
    return res.json();
  }
  catch(error){
    console.log(error);
  }
}

const ProductDetails = async ({ params }) => {
  const { id } = await params;
  const product = await getSingleProduct(id);
  const products = await getProducts();

  return (
    <div className="w-11/12 mx-auto my-8 space-y-3 grid grid-cols-1 md:grid-cols-3 gap-5">
      <div className="col-span-2">
        {/* Product Name */}
        <h1 className="text-3xl font-bold mb-5">{product.name}</h1>

        {/* Product Description */}
        <p className="text-gray-700 mb-4">{product.description}</p>

        {/* Price */}
        <p className="text-xl font-semibold text-primary mb-6">
          ${product.price}
        </p>

        {/* Buy Button */}
        <button className="btn btn-primary">Buy Now</button>
      </div>
      <div className="space-y-5">
        <h1 className="text-xl font-bold">Products: ({products?.length})</h1>
        <div className="space-y-5 h-96 overflow-y-auto">
          {products?.map((product) => (
            <ProductCard key={product._id} {...product}></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
