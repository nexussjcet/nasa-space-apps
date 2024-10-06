// pages/cart.js
"use client"
import React,{ useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import h1 from "./pngegg (6).png";
export default function Cart() {
  // Cart items state (default quantity of 2 for all items)
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Ozone', quantity: 1 },
    { id: 2, name: 'Ozone', quantity: 1 },
    { id: 3, name: 'Ozone', quantity: 1 },
    { id: 4, name: 'Ozone', quantity: 1 },
  ]);

  // Address state
  const [address, setAddress] = useState('');

  // Handle increment and decrement
  const updateQuantity = (id, action) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? {
              ...item,
              quantity: action === 'increment' ? item.quantity + 1 : item.quantity > 1 ? item.quantity - 1 : 1,
            }
          : item
      )
    );
  };

  // Calculate total quantity
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="bg-gray-900 text-white min-h-screen overflow-y-auto">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Cart</h1>

        {/* Cart Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          {cartItems.map(item => (
            <div key={item.id} className="bg-gray-800 p-4 rounded-lg text-center">
              <Image
                    src={h1}
                    alt="Restaurant Image"
                    width={320}
                    height={160}
                    className="rounded-lg object-cover"
                  />
                 
              <p className="pt-12 text-2xl font-semibold">Chorum Morum</p>
              <p className="text-xl font-bold">{item.name}</p>
              <div className="flex justify-center items-center mt-4">
                <button
                  onClick={() => updateQuantity(item.id, 'decrement')}
                  className="text-lg font-bold bg-gray-700 px-2 py-1 rounded"
                >
                  -
                </button>
                <span className="mx-4 text-lg">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, 'increment')}
                  className="text-lg font-bold bg-gray-700 px-2 py-1 rounded"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Restaurant Address */}
        <div className="pt-14 bg-white text-black p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold md:ml-14 mb-4">RESTAURANT ADDRESS</h2>
          <div className='flex flex-col justify-center items-center'>
          <p className="bg-slate-300 h-14 rounded-lg p-2 pb-4 md:p-5 w-[80vw] md:w-[70vw]">
            Pala, Choondacherry Sjcet, 686515, Kottayam Kerela 
          </p>
          
          <div className="flex mt-5 flex-col gap-5 justify-center items-center mb-4">
          <p className="text-xl font-semibold">TOTAL: {totalQuantity}</p>
          {/* <a href="#" className="text-orange-500">Breakdown</a> */}
          <button  className="md:w-[20vw] w-[39vw] bg-orange-500 text-white text-lg font-semibold py-4 rounded-lg"><Link href="/review">PLACE ORDER</Link></button>
        </div>
        </div>
        </div>
        {/* Total and Place Order */}
        
       
      </div>
    </div>
  );
}
