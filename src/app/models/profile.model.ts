export interface Profile {
  userId: number;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  // Add more properties as needed

  // Optional properties for additional details
  email?: string;
  phoneNumber?: string;
  postalCode?: string;
  country?: string;
  // Add more optional properties as needed
}
