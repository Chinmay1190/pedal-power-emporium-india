
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import products from '@/data/products';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Index = () => {
  // Set page title
  useEffect(() => {
    document.title = "SuperBikes | Premium Motorcycle Store";
  }, []);

  // Get bestseller products
  const bestSellers = products.filter(product => product.bestSeller);

  // Featured categories
  const categories = [
    {
      name: "Sport",
      image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Experience the thrill of extreme speed and precision with our Sport bikes"
    },
    {
      name: "Naked",
      image: "https://images.unsplash.com/photo-1662724615678-8478320c2d36?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Raw power and aggressive design come together in our Naked bike collection"
    },
    {
      name: "Adventure",
      image: "https://images.unsplash.com/photo-1662724615283-4afb0745224f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Explore beyond limits with our versatile Adventure motorcycles"
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      
      <FeaturedProducts />
      
      {/* Categories Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore By Category</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find your perfect motorcycle by category, each offering unique features and experiences.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div 
                key={category.name}
                className="overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-lg product-card-shadow relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6 w-full">
                      <h3 className="text-white text-xl font-bold">{category.name} Bikes</h3>
                      <p className="text-gray-200 text-sm mt-2">{category.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <Button asChild variant="outline" className="w-full">
                    <Link to={`/shop?category=${category.name}`}>
                      View All {category.name} Bikes
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Best Sellers Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Best Sellers</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our most popular motorcycles that riders love for their outstanding performance and design.
            </p>
          </motion.div>
          
          {bestSellers.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bestSellers.map((product, index) => (
                <motion.div
                  key={product.id}
                  className="rounded-lg overflow-hidden product-card-shadow card-hover bg-white dark:bg-gray-800"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link to={`/products/${product.id}`} className="block relative h-64 overflow-hidden">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-0 right-0 bg-amber-500 px-3 py-1 m-2 rounded-full text-xs font-bold text-white">
                      BEST SELLER
                    </div>
                  </Link>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <Link to={`/products/${product.id}`} className="hover:text-primary">
                          <h3 className="font-semibold text-lg">{product.name}</h3>
                        </Link>
                        <p className="text-sm text-muted-foreground">{product.brand}</p>
                      </div>
                      <p className="font-bold text-lg">
                        {new Intl.NumberFormat('en-IN', {
                          style: 'currency',
                          currency: 'INR',
                          maximumFractionDigits: 0
                        }).format(product.price)}
                      </p>
                    </div>
                    
                    <Button asChild variant="outline" className="w-full mt-4">
                      <Link to={`/products/${product.id}`}>View Details</Link>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
          
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/shop">View All Motorcycles</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-gray-900 text-white relative">
        <div 
          className="absolute inset-0 opacity-30 bg-cover bg-center" 
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')` 
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for the Ride of Your Life?</h2>
            <p className="text-gray-300 mb-8">
              Join thousands of riders who have found their perfect motorcycle. Our experts are ready to help you find the best match for your riding style.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" variant="default">
                <Link to="/shop">Shop Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white hover:border-primary">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
