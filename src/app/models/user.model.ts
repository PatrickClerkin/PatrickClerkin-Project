// Define the User interface
export interface User {
  // Email of the user
  email: string;

  // Name of the user
  name: string;

  // Optional properties
  // You can add more properties as needed
  age?: number;
  address?: Address;
  // Add more optional properties as needed
}

// Define the Address interface
export interface Address {
  // Street address
  street: string;

  // City
  city: string;

  // State or Province
  state: string;

  // Country
  country: string;

  // Postal code
  postalCode: string;
}
