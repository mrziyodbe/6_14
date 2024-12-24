import React from "react";
import { Link, useParams } from "react-router-dom";

export default function Product({ productList }) {
  const { id } = useParams();
  const productId = parseInt(id);

  const value = productList.find((product) => product.id === productId);

  return (
    <div className="p-4">
      <div>
        <h2 className="text-center text-blue-500 font-bold">{value.name}</h2>
        <p className="text-center text-gray-700">{value.title}</p>
      </div>
      <Link
        to={`/products`}
        className="border  border-blue-500  rounded-lg px-4 py-2 w-32 text-center hover:bg-blue-500 hover:text-white"
      >
        Back
      </Link>
    </div>
  );
}
