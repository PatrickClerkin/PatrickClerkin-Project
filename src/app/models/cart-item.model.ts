export interface CartItem {
  itemId: number;
  quantity: number;
  // Add more properties as needed

  // Optional properties for additional details about the item
  name?: string;
  description?: string;
  price?: number;
  imageUrl?: string;
}
