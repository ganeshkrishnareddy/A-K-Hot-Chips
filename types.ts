export interface Product {
  id: string;
  name: string;
  price: number;
  unit: string; // e.g., 'kg', 'packet', 'box'
  category: 'Snacks' | 'Chips' | 'Sweets' | 'Special';
  description: string;
  image?: string; // Made optional as we are removing them from UI
  popular?: boolean;
}

export interface CartItem extends Product {
  cartId: string; // Unique ID for the cart line item (to distinguish same product with different weights)
  quantity: number; // For packets/boxes. For KG items, this is usually 1 representing "one entry" of the specified weight
  selectedWeightLabel: string; // e.g., "250gm", "1kg", "Custom: 2.5kg", "Packet"
  weightValue: number; // The multiplier for price (e.g., 0.25, 1, 2.5) or count for packets
  finalPrice: number; // The calculated total price for this line item
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, weightLabel: string, weightValue: number, finalPrice: number) => void;
  removeFromCart: (cartId: string) => void;
  clearCart: () => void;
  cartTotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
}