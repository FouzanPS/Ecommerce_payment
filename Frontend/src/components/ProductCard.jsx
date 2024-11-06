import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
      <img
        className="w-full h-48 object-cover"
        src={product.image}
        alt={product.name}
      />
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
        <p className="mt-2 text-gray-600 flex-grow">{product.description}</p>
        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="text-xl font-bold text-gray-800">
            ${product.price}
          </span>
          <button className="px-3 py-1 bg-black text-white rounded-lg text-sm font-medium hover:bg-white hover:border-black hover:border-2 hover:text-black">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
