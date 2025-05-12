// Horizontal snap-scrolling list of products with progress indicator
import React, { useRef, useState, useEffect } from "react";
import { Product } from "../../types/chat";
import { ProductCard } from "../molecules/ProductCard";

interface ProductCarouselProps {
  products: Product[];
}

export const ProductCarousel = ({ products }: ProductCarouselProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const handleScroll = () => {
    const el = containerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScroll = scrollWidth - clientWidth;
    setProgress(maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0);
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      el.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      {/* carousel */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto hide-scrollbar scroll-snap-x snap-mandatory gap-4 pb-3 pt-2 pr-4"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className=" h-min snap-center flex-shrink-0 w-10/12"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* scroll-progress bar */}
      <div className="w-full h-1 bg-gray-300 rounded-2xl">
        <div
          className="h-1 bg-[#1e1e4b] rounded-2xl transition-[width]"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};
