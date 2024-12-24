import React from "react";
import { Link } from "react-router-dom";

export default function Products({ productList }) {
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4 text-blue-500 font-bold">Our Products</h1>
      <ul className="space-y-2">
        {productList.map((product) => (
          <li key={product.id}>
            <Link
              to={`/product/${product.id}`}
              className="border  border-blue-500 rounded-lg px-4 py-2 w-40 hover:bg-blue-500 hover:text-white block text-center"
            >
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
