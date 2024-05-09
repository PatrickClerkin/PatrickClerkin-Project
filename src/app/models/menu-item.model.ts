export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;

  // Optional properties for additional details about the menu item
  category?: string;
  ingredients?: string[];
  rating?: number;
  // Add more properties as needed
}
