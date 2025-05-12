
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';
import products from '../data/products';
import { Button } from '@/components/ui/button';

const FeaturedProducts = () => {
  const [displayCount, setDisplayCount] = useState(4);
  const [animate, setAnimate] = useState(false);
  const featuredProducts = products.filter(product => product.featured);
  
  useEffect(() => {
    setAnimate(true);
  }, []);
  
  // Responsive display count based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setDisplayCount(4);
      } else if (window.innerWidth >= 768) {
        setDisplayCount(3);
      } else if (window.innerWidth >= 640) {
        setDisplayCount(2);
      } else {
        setDisplayCount(1);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
  
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20 dark:from-background dark:to-secondary/5">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 relative inline-block">
            Featured Bikes
            <motion.span 
              className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-primary rounded-full"
              initial={{ scaleX: 0 }}
              animate={animate ? { scaleX: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
            ></motion.span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg mt-6">
            Explore our collection of high-performance superbikes, equipped with cutting-edge technology and unrivaled power.
          </p>
        </motion.div>
        
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {featuredProducts.slice(0, displayCount).map(product => (
            <motion.div key={product.id} variants={item}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <Button
            as={Link}
            to="/shop"
            variant="default"
            className="group relative px-6 py-6 text-lg overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              View All Bikes <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 bg-primary opacity-80 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
