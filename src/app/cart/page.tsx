"use client"
import Header from "../Components/component1";
import Foot from "../Components/component2";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  color: string;
  size: string;
  price: number;
  quantity: number;
}
export default function(){
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: 'Ut diam consequat', color: 'Brown', size: 'XL', price: 32, quantity: 1 },
    { id: 2, name: 'Vel facilisis posuere', color: 'Brown', size: 'XL', price: 32, quantity: 1 },
    { id: 3, name: 'Ac vitae vestibulum', color: 'Brown', size: 'XL', price: 32, quantity: 1 },
    { id: 4, name: 'Etiam massa diam', color: 'Brown', size: 'XL', price: 32, quantity: 1 },
    { id: 5, name: 'Proin pharetra elementum', color: 'Brown', size: 'XL', price: 32, quantity: 1 },
  ]);

  const updateQuantity = (id: number, quantity: number) => {
    setProducts(products.map(product => product.id === id ? { ...product, quantity } : product));
  };

  const clearCart = () => {
    setProducts([]);
  };

  const subtotal = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
  const total = subtotal + 106; // Assuming 106 is the shipping and taxes
  return(
    <div>
      <Header/>
      <div className="bg-gray-50">
             <section className="bg-purple-100 text-center py-10">
               <h1 className="text-3xl font-bold text-gray-800">Shopping Cart</h1>
               <p className="mt-2 text-gray-600"></p>
            </section>
       </div>
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/3">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2">Product</th>
                <th className="py-2">Price</th>
                <th className="py-2">Quantity</th>
                <th className="py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id}>
                  <td className="py-2">
                    <div className="flex items-center">
                      <Image src={`/cart${product.id}.png`} 
                      alt={product.name} 
                      className="w-16 h-16 mr-4" 
                      width={83}
                      height={87}
                      />
                      <div>
                        <div>{product.name}</div>
                        <div className="text-sm text-gray-500">Color: {product.color}</div>
                        <div className="text-sm text-gray-500">Size: {product.size}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-2">${product.price.toFixed(2)}</td>
                  <td className="py-2">
                    <input
                      type="number"
                      value={product.quantity}
                      onChange={(e) => updateQuantity(product.id, parseInt(e.target.value))}
                      className="w-16 p-1 border rounded"
                    />
                  </td>
                  <td className="py-2">${(product.price * product.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between mt-4">
            <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600" onClick={() => setProducts(products)}>Update Cart</button>
            <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600" onClick={clearCart}>Clear Cart</button>
          </div>
        </div>
        <div className="w-full md:w-1/3 mt-4 md:mt-0 md:ml-4">
          <div className="bg-gray-100 p-4 rounded">
            <h2 className="text-lg font-bold">Cart Totals</h2>
            <div className="flex justify-between mt-2">
              <span>Subtotals:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mt-2">
              <span>Totals:</span>
              <span>${total.toFixed(2)}</span>
            </div>
           <Link href="/ordercompleted"><button className="bg-green-500 text-white w-full mt-4 py-2 rounded hover:bg-green-600">Order now</button></Link>
          </div>
          <div className="bg-gray-100 p-4 rounded mt-4">
            <h2 className="text-lg font-bold">Calculate Shipping</h2>
            <input type="text" placeholder="Country" className="w-full p-2 border rounded mb-2" />
            <input type="text" placeholder="City" className="w-full p-2 border rounded mb-2" />
            <input type="text" placeholder="Postal Code" className="w-full p-2 border rounded mb-2" />
            <button className="bg-pink-500 text-white w-full py-2 rounded hover:bg-pink-600">Calculate</button>
          </div>
        </div>
      </div>
    </div>
      <Foot/>
    </div>
  )
}