
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, Heart, Share2, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import products from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const [product, setProduct] = useState(products.find(p => p.id === Number(id)));
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState<typeof products>([]);
  
  useEffect(() => {
    // Set page title
    if (product) {
      document.title = `${product.name} | SuperBikes`;
      
      // Find related products (same category, different id)
      const related = products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 3);
      setRelatedProducts(related);
    } else {
      document.title = "Product Not Found | SuperBikes";
    }
    
    setLoading(false);
  }, [product, id]);
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };
  
  const handleAddToCart = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
      
      // Only show one toast regardless of quantity
      if (quantity === 1) {
        toast.success(`Added ${product.name} to cart`);
      } else {
        toast.success(`Added ${quantity} ${product.name} to cart`);
      }
    }
  };
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };
  
  // Handle non-existent product
  if (!loading && !product) {
    return (
      <div className="container mx-auto py-32 px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-8">The product you are looking for does not exist.</p>
        <Button onClick={() => navigate('/shop')}>Back to Shop</Button>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto py-8 px-4">
        {/* Back button */}
        <Button 
          variant="ghost" 
          className="mb-6 pl-0" 
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        
        {product && (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {/* Product Image */}
              <motion.div 
                className="rounded-lg overflow-hidden shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
              </motion.div>
              
              {/* Product Details */}
              <motion.div
                className="flex flex-col"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div>
                  <p className="text-sm text-primary font-medium mb-2">{product.category} Bike</p>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">{product.name}</h1>
                  <p className="text-xl font-medium text-muted-foreground mb-4">{product.brand}</p>
                  <h2 className="text-3xl font-bold mb-6">{formatPrice(product.price)}</h2>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="border dark:border-gray-700 rounded-lg p-4 text-center">
                    <p className="text-muted-foreground mb-1">Engine</p>
                    <p className="text-xl font-semibold">{product.engineCapacity}</p>
                  </div>
                  <div className="border dark:border-gray-700 rounded-lg p-4 text-center">
                    <p className="text-muted-foreground mb-1">Power</p>
                    <p className="text-xl font-semibold">{product.power}</p>
                  </div>
                  <div className="border dark:border-gray-700 rounded-lg p-4 text-center">
                    <p className="text-muted-foreground mb-1">Torque</p>
                    <p className="text-xl font-semibold">{product.torque}</p>
                  </div>
                  <div className="border dark:border-gray-700 rounded-lg p-4 text-center">
                    <p className="text-muted-foreground mb-1">Category</p>
                    <p className="text-xl font-semibold">{product.category}</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-8">{product.description}</p>
                
                <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
                  <div className="flex items-center border dark:border-gray-700 rounded-lg">
                    <Button
                      type="button"
                      variant="ghost"
                      className="h-10 w-10"
                      onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                    >
                      -
                    </Button>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={handleQuantityChange}
                      className="h-10 w-16 text-center border-none focus:ring-0 focus:outline-none bg-transparent"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      className="h-10 w-10"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </Button>
                  </div>
                  
                  <Button 
                    className="w-full md:w-auto flex-1"
                    size="lg"
                    onClick={handleAddToCart}
                  >
                    <ShoppingBag className="mr-2 h-5 w-5" /> Add to Cart
                  </Button>
                  
                  <Button variant="outline" size="icon" className="w-10 h-10 rounded-full">
                    <Heart size={20} />
                  </Button>
                  
                  <Button variant="outline" size="icon" className="w-10 h-10 rounded-full">
                    <Share2 size={20} />
                  </Button>
                </div>
              </motion.div>
            </div>
            
            {/* Product Tabs */}
            <div className="mb-16">
              <Tabs defaultValue="details">
                <TabsList className="mb-6">
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="specifications">Specifications</TabsTrigger>
                  <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
                </TabsList>
                
                <TabsContent value="details" className="text-muted-foreground space-y-4">
                  <p>{product.description}</p>
                  <p>
                    The {product.name} is designed to provide an unmatched riding experience with cutting-edge technology
                    and exceptional performance. Whether you're a seasoned rider or new to the world of motorcycles, 
                    this {product.category.toLowerCase()} bike offers precision handling, outstanding acceleration,
                    and reliable braking capabilities.
                  </p>
                  <p>
                    With its powerful {product.engineCapacity} engine delivering {product.power} of maximum power 
                    and {product.torque} of torque, the {product.name} is ready to take on any road challenge.
                  </p>
                </TabsContent>
                
                <TabsContent value="specifications">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border dark:border-gray-700 rounded-lg p-4">
                      <h3 className="font-semibold mb-4">Engine & Performance</h3>
                      <ul className="space-y-2">
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">Engine</span>
                          <span>{product.engineCapacity}</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">Max Power</span>
                          <span>{product.power}</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">Max Torque</span>
                          <span>{product.torque}</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">Fuel System</span>
                          <span>Electronic Fuel Injection</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">Cooling System</span>
                          <span>Liquid Cooled</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="border dark:border-gray-700 rounded-lg p-4">
                      <h3 className="font-semibold mb-4">Dimensions & Capacity</h3>
                      <ul className="space-y-2">
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">Length</span>
                          <span>2100 mm</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">Width</span>
                          <span>750 mm</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">Height</span>
                          <span>1100 mm</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">Wheelbase</span>
                          <span>1450 mm</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">Fuel Capacity</span>
                          <span>18 L</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="border dark:border-gray-700 rounded-lg p-4">
                      <h3 className="font-semibold mb-4">Features</h3>
                      <ul className="space-y-2">
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">ABS</span>
                          <span>Dual-Channel</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">Traction Control</span>
                          <span>Yes</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">Riding Modes</span>
                          <span>4 (Sport, Road, Rain, Custom)</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">Quick Shifter</span>
                          <span>Yes (Up & Down)</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">Display</span>
                          <span>TFT Display</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="border dark:border-gray-700 rounded-lg p-4">
                      <h3 className="font-semibold mb-4">Chassis & Suspension</h3>
                      <ul className="space-y-2">
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">Frame</span>
                          <span>Aluminum Twin-Spar</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">Front Suspension</span>
                          <span>Fully Adjustable USD Forks</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">Rear Suspension</span>
                          <span>Mono-shock, Adjustable</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">Front Brake</span>
                          <span>Dual Disc</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">Rear Brake</span>
                          <span>Single Disc</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="shipping" className="text-muted-foreground space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Shipping Information</h3>
                    <p>
                      We offer nationwide shipping for all our motorcycles. Shipping costs are calculated based on 
                      the delivery location and are shown at checkout. Deliveries typically take 7-14 business days.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Return Policy</h3>
                    <p>
                      Our motorcycles come with a satisfaction guarantee. If you're not completely satisfied with your purchase,
                      you can return it within 7 days of delivery. The motorcycle must be in its original condition, 
                      without any damages or modifications, and with less than 100 km on the odometer.
                    </p>
                    <p className="mt-2">
                      Please note that shipping costs are non-refundable, and a 10% restocking fee may apply.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Warranty</h3>
                    <p>
                      All new motorcycles come with a manufacturer's warranty of 2 years or 30,000 km, whichever comes first.
                      This warranty covers defects in materials and workmanship. Extended warranty options are available at checkout.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Related Products */}
            {relatedProducts.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
