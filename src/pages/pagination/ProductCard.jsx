import React from "react";

const ProductCard = ({ product: { title, description, price, thumbnail } }) => {
  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 p-4 mb-6">
      {/* Thumbnail */}
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-64 object-cover rounded-md"
      />

      {/* Title */}
      <h2 className="text-lg font-semibold mt-4">{title}</h2>

      {/* Description */}
      <p className="text-gray-600 text-sm mt-2 line-clamp-3">{description}</p>

      {/* Price */}
      <div className="mt-4">
        <span className="text-xl font-bold text-green-600">
          ₹{price}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;