import { MenuItem } from './menu-item.model';

export interface Order {
    id: number;
    items: MenuItem[];
    totalAmount: number;

    // Optional properties for additional details about the order
    customerName?: string;
    customerAddress?: string;
    paymentMethod?: string;
    // Add more properties as needed
}
