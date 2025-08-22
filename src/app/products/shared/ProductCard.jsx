import Link from "next/link";
import React from "react";

const ProductCard = ({ _id, name, description, price }) => {
  return (
    <div className="bg-base-100 rounded-2xl shadow-md p-5 flex flex-col justify-between hover:shadow-xl transition">
      <div>
        <h2 className="text-lg font-semibold mb-2">
          {name}
        </h2>
        <p className="text-sm mb-4">
          {description.slice(0, 50)}...
        </p>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-primary">
          ${price}
        </span>
        <Link href={`/products/${_id}`} className="btn btn-primary btn-outline rounded-xl">
          Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
