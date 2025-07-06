export interface Order {
  id: string;
  userId: string;
  shopId: string;
  subscriptionId: string;
  status: OrderStatus;
  serviceDate: string;
  collectionMethod: 'pickup' | 'drop_off' | 'delivery';
  serviceAddress: string;
  itemsCount: number;
  specialInstructions?: string;
  totalAmount: number;
  createdAt: string;
  updatedAt: string;
  provider: LaundryProvider;
}

export type OrderStatus = 
  | 'scheduled' 
  | 'in_progress' 
  | 'ready' 
  | 'collected' 
  | 'delivered' 
  | 'cancelled';

export interface OrderItem {
  id: string;
  orderId: string;
  itemType: string;
  quantity: number;
  notes?: string;
}
