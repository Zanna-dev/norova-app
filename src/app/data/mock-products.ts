import { Product } from '../models/catalog.models';

export const mockProducts: Product[] = [
  {
    id: 'p-001',
    name: 'Aurora Smart Speaker',
    description: 'Voice-controlled speaker with immersive sound and smart home integration.',
    price: 129.99,
    category: 'Electronics',
    rating: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&w=800&q=80',
    inventoryStatus: 'in-stock'
  },
  {
    id: 'p-002',
    name: 'Nova Leather Backpack',
    description: 'Premium backpack with multiple compartments and weather-resistant finish.',
    price: 89.5,
    category: 'Accessories',
    rating: 4.6,
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
    inventoryStatus: 'in-stock'
  },
  {
    id: 'p-003',
    name: 'Lumen Desk Lamp',
    description: 'Adjustable LED lamp designed for modern workspaces and ambient lighting.',
    price: 74.0,
    category: 'Home',
    rating: 4.4,
    imageUrl: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
    inventoryStatus: 'low-stock'
  },
  {
    id: 'p-004',
    name: 'Terra Running Shoes',
    description: 'Lightweight running shoes built for comfort and all-day movement.',
    price: 112.0,
    category: 'Apparel',
    rating: 4.7,
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
    inventoryStatus: 'in-stock'
  },
  {
    id: 'p-005',
    name: 'Orbit Noise-Canceling Headphones',
    description: 'Over-ear headphones with studio-grade audio and long battery life.',
    price: 199.99,
    category: 'Electronics',
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    inventoryStatus: 'in-stock'
  },
  {
    id: 'p-006',
    name: 'Cedar Throw Blanket',
    description: 'Soft woven blanket with a minimalist texture for cozy interiors.',
    price: 49.0,
    category: 'Home',
    rating: 4.3,
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    inventoryStatus: 'in-stock'
  },
  {
    id: 'p-007',
    name: 'Alpine Winter Jacket',
    description: 'Insulated jacket with weatherproof protection and premium stitching.',
    price: 159.0,
    category: 'Apparel',
    rating: 4.5,
    imageUrl: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    inventoryStatus: 'low-stock'
  },
  {
    id: 'p-008',
    name: 'Echo Smart Watch',
    description: 'Fitness and notification hub with a bright AMOLED display.',
    price: 219.0,
    category: 'Electronics',
    rating: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80',
    inventoryStatus: 'in-stock'
  },
  {
    id: 'p-009',
    name: 'Mira Ceramic Vase',
    description: 'Hand-finished vase that elevates contemporary living spaces.',
    price: 68.0,
    category: 'Home',
    rating: 4.2,
    imageUrl: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=800&q=80',
    inventoryStatus: 'out-of-stock'
  },
  {
    id: 'p-010',
    name: 'Harbor Travel Tote',
    description: 'Spacious carryall for weekend trips and daily commuting.',
    price: 84.0,
    category: 'Accessories',
    rating: 4.4,
    imageUrl: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80',
    inventoryStatus: 'in-stock'
  },
  {
    id: 'p-011',
    name: 'North Ridge Hoodie',
    description: 'Soft fleece hoodie with a relaxed silhouette and premium finish.',
    price: 97.5,
    category: 'Apparel',
    rating: 4.6,
    imageUrl: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    inventoryStatus: 'in-stock'
  },
  {
    id: 'p-012',
    name: 'Pixel Mini Drone',
    description: 'Compact drone with high-definition video capture and easy controls.',
    price: 299.0,
    category: 'Electronics',
    rating: 4.7,
    imageUrl: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=800&q=80',
    inventoryStatus: 'low-stock'
  },
  {
    id: 'p-013',
    name: 'Sage Coffee Set',
    description: 'Minimalist ceramic coffee set for modern kitchens and breakfast tables.',
    price: 56.0,
    category: 'Home',
    rating: 4.3,
    imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
    inventoryStatus: 'in-stock'
  },
  {
    id: 'p-014',
    name: 'Silverline Sunglasses',
    description: 'Polarized sunglasses with durable frame design and UV protection.',
    price: 64.0,
    category: 'Accessories',
    rating: 4.5,
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
    inventoryStatus: 'in-stock'
  },
  {
    id: 'p-015',
    name: 'Contour Mechanical Keyboard',
    description: 'Tactile keyboard for coding, gaming, and productive workflows.',
    price: 139.0,
    category: 'Electronics',
    rating: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    inventoryStatus: 'in-stock'
  }
];
