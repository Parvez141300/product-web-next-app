"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";

const AddProduct = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  // add product
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const form = e.target;
      const formData = new FormData(form);
      const formInfo = Object.fromEntries(formData.entries());
      // send data to database
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/items`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(formInfo),
      });

      if (res.ok) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully added the product",
          showConfirmButton: false,
          timer: 1500,
        });
        setLoading(false);
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Error to add product",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      setError("Failed to do add product");
      Swal.fire({
        position: "center",
        icon: "error",
        title: `${error.message}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div className="w-11/12 max-w-md mx-auto my-10 p-6 bg-base-100 shadow-lg rounded-xl">
      <h1 className="text-2xl font-bold mb-5">Add New Product</h1>

      {error && <p className="text-red-500 mb-3">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">Name</label>
          <input
            type="text"
            name="name"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Description</label>
          <textarea
            name="description"
            className="textarea textarea-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Price ($)</label>
          <input
            type="number"
            name="price"
            className="input input-bordered w-full"
            required
          />
        </div>

        <button
          type="submit"
          className={`btn btn-primary w-full ${loading ? "loading" : ""}`}
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
