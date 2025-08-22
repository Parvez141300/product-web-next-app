import Link from "next/link";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:min-h-screen">
      {/* left side */}
      <aside className="lg:col-span-3 bg-secondary p-5">
        <ul>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/user-dashboard/add-product"}>Add Product</Link>
          </li>
        </ul>
      </aside>
      {/* right side routing */}
      <div className="lg:col-span-9 p-5">{children}</div>
    </div>
  );
};

export default layout;
