import { Product } from "../types/chat";

export const fetchProductRecommendations = async (): Promise<Product[]> => {
  const response = await fetch(
    "https://api.wizybot.com/products/demo-product-list"
  );
  if (!response.ok) throw new Error("Failed to fetch products");
  const data: any[] = await response.json();

  return data.map((item) => ({
    id: item.id,
    displayTitle: item.displayTitle,
    imageUrl: item.imageUrl,
    price: item.price,
    url: item.url,
  }));
};
