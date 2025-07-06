export interface LaundryProvider {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  rating: number;
  reviewCount: number;
  distance?: number;
  serviceModel: 'pickup_delivery' | 'drop_off' | 'hybrid' | 'mobile';
  pickupDeliveryAvailable: boolean;
  operatingHours: string;
  serviceArea: string;
  isActive: boolean;
  plans: SubscriptionPlan[];
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  planType: 'basic' | 'premium' | 'family';
  loadsPerMonth: number;
  price: number; // in cents
  description: string;
  features: string[];
  isActive: boolean;
}
