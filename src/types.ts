export interface Service {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  techFeatures: string[];
  basePrice: number;
  pricingUnit: string;
  badgeColor: 'cyan' | 'green' | 'purple';
  iconName: string;
  tags: string[];
  imageUrl?: string;
}

export interface CartItem {
  service: Service;
  quantity: number;
  customRequirements: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  snippet: string;
  content: string;
  date: string;
  readTime: string;
  author: string;
  metrics?: {
    label: string;
    value: string;
  };
}

export interface Alliance {
  id: string;
  name: string;
  logoText: string;
  description: string;
  sector: string;
  status?: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot' | 'system';
  timestamp: string;
  actions?: {
    label: string;
    payload: string;
    type: 'add_to_cart' | 'schedule' | 'general' | 'service_info';
    targetId?: string;
  }[];
}
