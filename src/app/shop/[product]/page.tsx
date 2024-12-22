import Header from "@/app/Components/component1";
import Foot from "@/app/Components/component2";
import Bottom1 from "@/app/Components/component3";
import { products } from "@/app/data/page";




export default async function(props:any){
console.log(props)
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
          <img
            src={props.params.products.image}
            alt={props.params.products.name}
            className="rounded-md w-full h-80 object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 md:ml-8">
          <h1 className="text-2xl font-semibold text-gray-800">{props.params.products.name}</h1>
          <p className="text-gray-500 mt-2">{props.params.products.description}</p>
          <p className="mt-4 text-gray-800 text-lg font-bold">${props.params.products.discountPrice}</p>
          <p className="text-gray-500 line-through">${props.params.products.price}</p>
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