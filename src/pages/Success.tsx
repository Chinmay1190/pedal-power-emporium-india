
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Success = () => {
  useEffect(() => {
    document.title = "Order Confirmed | SuperBikes";
  }, []);
  
  return (
    <div className="min-h-screen pt-24 pb-16 flex items-center">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-md mx-auto text-center bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center mb-6">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <CheckCircle className="h-20 w-20 text-green-500" />
            </motion.div>
          </div>
          
          <motion.h1 
            className="text-2xl font-bold mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Order Confirmed!
          </motion.h1>
          
          <motion.p 
            className="text-muted-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Thank you for your purchase. Your order has been received and is being processed.
          </motion.p>
          
          <motion.div 
            className="border-t dark:border-gray-700 border-dashed py-4 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <p className="font-medium mb-1">Order Number</p>
            <p className="text-muted-foreground">{`#SB${Math.floor(100000 + Math.random() * 900000)}`}</p>
          </motion.div>
          
          <motion.p 
            className="text-sm text-muted-foreground mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            An email with your order details has been sent to your email address.
            Our team will contact you shortly to arrange delivery.
          </motion.p>
          
          <motion.div 
            className="flex flex-col gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <Button asChild>
              <Link to="/shop">Continue Shopping</Link>
            </Button>
            
            <Button asChild variant="outline">
              <Link to="/">Return to Home</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Success;
