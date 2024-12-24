"use client"

import Header from "@/app/Components/component1";
import Foot from "@/app/Components/component2";
import Bottom1 from "@/app/Components/component3";
import { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";

const Products= [
  
  {
  id:1,
  name: 'Dictum morbi',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  price: 70.0,
  discountPrice: 55.0,
  image: '/shop1.png', 
  rating: 4.5,
  reviews: 125,
},
{
  id: 2,
  name: 'Sodales sit',
  description: 'Magna in est adipiscing in pharetra non in justo.',
  price: 25.0,
  discountPrice: 15.0,
  image: '/shop2.png',
  rating: 4.0,
  reviews: 89,
},
{
  id: 3,
  name: 'Nibh Various',
  description: 'Magna in est adipiscing in pharetra non in justo.',
  price: 25.0,
  discountPrice: 15.0,
  image: '/shop3.png',
  rating: 4.0,
  reviews: 89,
},
{
  id: 4,
  name: 'Morius Quis',
  description: 'Magna in est adipiscing in pharetra non in justo.',
  price: 25.0,
  discountPrice: 15.0,
  image: '/shop4.png',
  rating: 4.0,
  reviews: 89,
},
{
  id: 5,
  name: 'Morbi Sagittis',
  description: 'Magna in est adipiscing in pharetra non in justo.',
  price: 25.0,
  discountPrice: 15.0,
  image: '/shop5.png',
  rating: 4.0,
  reviews: 89,
},
{
  id: 6,
  name: 'seccelie deginism',
  description: 'Magna in est adipiscing in pharetra non in justo.',
  price: 25.0,
  discountPrice: 15.0,
  image: '/shop6.png',
  rating: 4.0,
  reviews: 89,
},
// Add more products here
];

interface Params {
  item?: number;
}
export default function Home(props: { params: Promise<Params> }){

  const [params, setParams] = useState<Params>({});
useEffect(() => {
  async function resolveParams() {
    const resolvedParams = await props.params;
    setParams(resolvedParams);
  }
  resolveParams();
}, [props.params]); 

const itemIndex = params.item ||  0;
const selecteditem = Products[itemIndex] || Products [0]

console.log(params.item)
  return(
        <div>
            <Header/>
            <div className="bg-gray-50">
             <section className="bg-purple-100 text-center py-10">
               <h1 className="text-3xl font-bold text-gray-800">Product Details</h1>
               <p className="mt-2 text-gray-600"></p>
            </section>
            </div>

      <div> 
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <Image
            src={selecteditem.image}
            alt={selecteditem.name}
            className="rounded-md w-full h-80 object-cover"
            width={300}
            height={200}
            
          />
        </div>
        <div className="w-full md:w-1/2 md:ml-8">
          <h1 className="text-2xl font-semibold text-gray-800">{selecteditem.name}</h1>
          <p className="text-gray-500 mt-2">{selecteditem.description}</p>
          <p className="mt-4 text-gray-800 text-lg font-bold">${selecteditem.discountPrice}</p>
          <p className="text-gray-500 line-through">${selecteditem.price}</p>
          <button className="bg-pink-500 text-white py-2 px-6 rounded-full mt-4">Add to Cart</button>

          <div className="mt-8">
            <ul className="flex border-b">
              <li className="mr-1">
                <a className="bg-white inline-block py-2 px-4 font-semibold text-gray-800 hover:text-pink-500" href="#">
                  Description
                </a>
              </li>
              <li className="mr-1">
                <a className="bg-white inline-block py-2 px-4 font-semibold text-gray-800 hover:text-pink-500" href="#">
                  Additional Info
                </a>
              </li>
              <li className="mr-1">
                <a className="bg-white inline-block py-2 px-4 font-semibold text-gray-800 hover:text-pink-500" href="#">
                  Reviews
                </a>
              </li>
              <li className="mr-1">
                <a className="bg-white inline-block py-2 px-4 font-semibold text-gray-800 hover:text-pink-500" href="#">
                  Video
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <p>Varius tempor.</p>
              <p>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Nam nisi penatibus sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo tortor, tortor id diam tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus sit. Eu in fringilla vulputate nunc nec. Duis massa viverra.</p>
            </div>
          </div>
        </div>
      </div>
    </div>


            </div>

           <Bottom1/>
            <Foot/>
        </div>
    )
}