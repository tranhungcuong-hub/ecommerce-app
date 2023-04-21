import Image from 'next/image'
import { Inter } from 'next/font/google'
import ProductCard from '@/components/product-card';
import supabase from '../../client';
import { useEffect, useState } from 'react';
import Navbar from '@/components/navBar';

const inter = Inter({ subsets: ['latin'] })

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 10.99,
  },
  {
    id: 2,
    name: "Product 2",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 19.99,
  },
  {
    id: 3,
    name: "Product 3",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: 5.99,
  },
  {
    id: 4,
    name: "Product 3",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: 5.99,
  },
  {
    id: 5,
    name: "Product 3",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: 5.99,
  },
];


export default function Home() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      const { data: prods, error } = await supabase.from("products").select("*");
      console.log(prods, " ", error);
      if (error) {
        console.log(error)
      } else {
        setData(prods)
      }
      setLoading(false);
    }
    getData();
  }, []);

  if (loading) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-roboto text-sm lg:flex">
          <p>Loading...</p>
        </div>
      </main>
    )
  }
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-roboto text-sm lg:flex">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-bold mb-8">Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.map((product: any) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}