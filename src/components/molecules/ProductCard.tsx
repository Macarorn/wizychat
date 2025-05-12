// Displays product image, truncated title, price, and link
import React from "react";
import { Product } from "../../types/chat";

interface ProductCardProps {
  product: Product;
}

const MAX_TITLE = "MSI Katana GF66 Gaming Laptop".length;

function truncateTitle(title: string) {
  return title.length > MAX_TITLE
    ? title.slice(0, MAX_TITLE - 3) + "..."
    : title;
}

export const ProductCard = ({ product }: ProductCardProps) => (
  <div className=" p-4 flex items-center bg-white border border-gray-100 rounded-lg h-full shadow-lg w-full">
    <img
      src={product.imageUrl}
      alt={product.displayTitle}
      className="h-20 w-20 object-contain mr-4 flex-shrink-0"
    />
    <div className="flex-1">
      <h4 className="text-base font-medium text-gray-900 mb-1">
        {truncateTitle(product.displayTitle)}
      </h4>
      <p className="text-lg font-bold text-gray-800 mb-2">{product.price}</p>
      <a
        href={product.url}
        target="_blank"
        rel="noopener noreferrer"
        className="
    inline-block
    text-sm
    font-light
    text-black
    border-b
    border-black
    pb-0.5
    hover:text-gray-700
    hover:border-gray-700
  "
      >
        View Page
      </a>
    </div>
  </div>
);
