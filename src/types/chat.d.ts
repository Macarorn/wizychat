export type Sender = "user" | "bot";

export interface ChatMessage {
  id: string;
  sender: Sender;
  content: string;
  timestamp: string;
}

export interface Product {
  id: string;
  displayTitle: string;
  imageUrl: string;
  price: string;
  url: string;
}
