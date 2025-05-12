// Retrieves and returns up to 3 products from the demo list
import { Product } from "../types/chat";

export const fetchProductRecommendations = async (): Promise<Product[]> => {
  const response = await fetch(
    "https://api.wizybot.com/products/demo-product-list"
  );
  if (!response.ok) throw new Error("Failed to fetch products");
  const data = await response.json();
  return data.slice(0, 3).map((item: any) => ({
    id: item.id,
    displayTitle: item.displayTitle,
    imageUrl: item.imageUrl,
    price: item.price,
    url: item.url,
  }));
};
