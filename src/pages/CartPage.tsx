
import React, { useEffect } from 'react';
import Cart from '@/components/Cart';

const CartPage = () => {
  useEffect(() => {
    document.title = "Your Cart | SuperBikes";
  }, []);

  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto">
        <Cart />
      </div>
    </div>
  );
};

export default CartPage;
