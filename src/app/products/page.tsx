// components/ProductGrid.tsx
import Link from 'next/link';
import Header from '../Components/component1';
import Foot from '../Components/component2';
import Image from 'next/image';

interface Product {
  name: string;
  image: string;
  link: string;
}

interface ProductGridProps {
  products: Product[];
}

const Home: React.FC = () => {
    const products = [
      {
        name: 'Watches',
        image: '/shop-1.jpg', 
        link: '/product/1',
      },
      {
        name: 'Furniture',
        image: '/shop-3.jpg',
        link: '/shop',
      },
      {
        name: 'Mobile Accessories',
        image: '/shop-4.jpg',
        link: '/shop',
      },
      {
        name: 'Cameras',
        image: '/shop-5.jpeg',
        link: '/shop',
      },
      {
        name: 'Sport Goods',
        image: '/shop-2.jpg',
        link: '/shop',
      },
      {
        name: 'beauty',
        image: '/shop-6.jpg',
        link: '/shop',
      },
      {
        name: 'Phones',
        image: '/shop-7.jpg',
        link: '/shop',
      },
      {
        name: 'Electronics',
        image: '/shop-8.jpg',
        link: '/shop',
      },
      // Add more products here...
    ];
  
    return (
      <div>
        <ProductGrid products={products} />
      </div>
    );
  };
  
  export default Home;

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div>
        <Header/>
        <div className="bg-gray-50">
             <section className="bg-purple-100 text-center py-10">
               <h1 className="text-3xl font-bold text-gray-800">Products</h1>
               <p className="mt-2 text-gray-600"></p>
            </section>
            </div>
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">
        Ecommerce Items
      </h1>
      <div className="text-center text-gray-500 mb-6">
     {products.length} Product Categories
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <Link
            key={index}
            href="/shop"
            passHref
          >
            <div className="group block border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="bg-gray-100 aspect-w-1 aspect-h-1 w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  width={250}
                  height={183}
                />
              </div>
              <div className="p-4">
                <h2 className="font-semibold text-lg text-gray-800">
                  {product.name}
                </h2>
                <div className="flex items-center justify-between mt-2">
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    <Foot/>
    </div>
  );
};

