
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <motion.div 
      className="rounded-lg overflow-hidden product-card-shadow card-hover dark:bg-gray-800 bg-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        <Link to={`/products/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-56 object-cover object-center"
          />
          {product.new && (
            <Badge className="absolute top-3 left-3 bg-blue-500">NEW</Badge>
          )}
          {product.bestSeller && (
            <Badge className="absolute top-3 left-3 bg-amber-500">BEST SELLER</Badge>
          )}
        </Link>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <Link to={`/products/${product.id}`} className="hover:underline hover:text-primary transition-colors">
              <h3 className="font-semibold text-lg">{product.name}</h3>
            </Link>
            <p className="text-sm text-muted-foreground">{product.brand}</p>
          </div>
          <p className="font-bold text-lg">{formatPrice(product.price)}</p>
        </div>
        
        <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
          <div className="flex flex-col">
            <span className="text-muted-foreground">Engine</span>
            <span className="font-medium">{product.engineCapacity}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-muted-foreground">Power</span>
            <span className="font-medium">{product.power}</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center mt-2">
          <Button 
            variant="outline" 
            className="w-full mr-2"
            asChild
          >
            <Link to={`/products/${product.id}`}>Details</Link>
          </Button>
          <Button 
            className="min-w-[46px]" 
            size="icon"
            onClick={() => addToCart(product)}
          >
            <ShoppingBag size={18} />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
