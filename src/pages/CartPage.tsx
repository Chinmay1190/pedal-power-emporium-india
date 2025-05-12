
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Cart from '@/components/Cart';
import { Card, CardContent } from '@/components/ui/card';

const CartPage = () => {
  useEffect(() => {
    document.title = "Your Cart | SuperBikes";
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gradient-to-b from-background to-secondary/10 dark:from-background dark:to-secondary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Your Shopping Cart</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Review your selected superbikes and accessories before proceeding to checkout.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="border-0 shadow-lg dark:bg-gray-800/50 overflow-hidden">
            <CardContent className="p-0">
              <Cart />
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default CartPage;
