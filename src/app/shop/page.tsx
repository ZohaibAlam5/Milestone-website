import Link from 'next/link';
import Header from '../Components/component1';
import Foot from '../Components/component2';
import Bottom1 from '../Components/component3';
import { products } from '../data/page';


export default function Home() {
  return (
    <div>
        <Header/>
        <div className="bg-gray-50">
             <section className="bg-purple-100 text-center py-10">
               <h1 className="text-3xl font-bold text-gray-800">Shop</h1>
               <p className="mt-2 text-gray-600"></p>
            </section>
          </div>
    <div className="flex flex-col md:flex-row container mx-auto px-4 py-8">
      {/* Left Sidebar */}
      <aside className="w-full md:w-1/4 bg-gray-50 p-4 rounded-md shadow">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Filters</h2>

        <div className="mb-6">
          <h3 className="text-md font-medium text-gray-600 mb-2">Product Brand</h3>
          <ul className="space-y-1">
            <li><input type="checkbox" /> Coaster Furniture</li>
            <li><input type="checkbox" /> Fusion Dot High Fashion</li>
            <li><input type="checkbox" /> Unique Furniture </li>
            <li><input type="checkbox" /> Dream Furniture</li>
            <li><input type="checkbox" /> Young Repurposed</li>
            <li><input type="checkbox" /> Green Furniture</li>
            {/* Add more brands */}
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-md font-medium text-gray-600 mb-2">Categories</h3>
          <ul className="space-y-1">
            <li><input type="checkbox" /> Accessories</li>
            <li><input type="checkbox" /> Watches</li>
            <li><input type="checkbox" /> Magento</li>
            <li><input type="checkbox" /> clothes</li>
            <li><input type="checkbox" /> Furniture</li>
            {/* Add more categories */}
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-md font-medium text-gray-600 mb-2">Price Filter</h3>
          <ul className="space-y-1">
            <li><input type="radio" name="price" /> $0 - $150</li>
            <li><input type="radio" name="price" /> $150 - $350</li>
            <li><input type="radio" name="price" /> $350 - $550</li>
            <li><input type="radio" name="price" /> $550 - $650</li>  
            <li><input type="radio" name="price" /> $650 - $1000</li>
            <li><input type="radio" name="price" /> above $1000</li>        
            </ul>
        </div>
      </aside>

      {/* Products Section */}
      <main className="flex-1 md:ml-8">
        <h1 className="text-xl font-semibold text-gray-800 mb-4">Ecommerce Accessories & Fashion</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
              <Link href={`/shop/${product.id-1}`}>
                <div>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="rounded-md w-full h-40 object-cover mb-4"
                  />
                  <h3 className="text-lg font-semibold text-gray-700">{product.name}</h3>
                  <p className="text-gray-500 text-sm">{product.description}</p>
                  <div className="mt-2 flex justify-between items-center">
                    <p className="text-gray-800 font-bold">${product.discountPrice}</p>
                    <p className="text-gray-500 line-through">${product.price}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
    <Bottom1/>
    <Foot/>
    </div>
  );
}
